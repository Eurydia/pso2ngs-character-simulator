import {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import { ActionContext, AddonSkill, StatObject } from "../../assets";

import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

import { FieldAddon } from "./FieldAddon";
import { CheckboxAddon } from "./CheckboxAddon";
import {
  loadMainLevel,
  loadSubLevels,
  loadSubActiveIndexes,
  saveMainLevel,
  saveSubLevels,
  saveSubActiveIndexes,
} from "./helper";

type FormAddonProps = {
  // dynamic props
  context: ActionContext;

  // static props
  formStorageKey: string;
  title: string;
  mainSkill: AddonSkill;
  subSkills: AddonSkill[];

  onStatChange: (next_stat: StatObject) => void;
};
export const FormAddon: FC<FormAddonProps> = (props) => {
  const {
    title,
    formStorageKey,
    context,
    mainSkill,
    subSkills,
    onStatChange,
  } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const [mainLevel, setMainLevel] = useState<number>(() => {
    return loadMainLevel(formStorageKey);
  });
  const [subActiveIndexes, setSubActiveIndexes] = useState<number[]>(
    () => {
      const size: number = subSkills.length;
      return loadSubActiveIndexes(formStorageKey, size);
    },
  );
  const [subLevels, setSubLevels] = useState<number[]>(() => {
    const size: number = subSkills.length;
    return loadSubLevels(formStorageKey, size);
  });

  const handleSubLevelChange = useCallback(
    (next_level: number, skill_index: number): void => {
      setSubLevels((prev) => {
        const next = [...prev];
        next[skill_index] = next_level;
        return next;
      });
    },
    [],
  );
  const handleSubActiveIndexChange = useCallback(
    (skill_index: number): void => {
      setSubActiveIndexes((prev) => {
        if (prev[skill_index] > 0) {
          return prev;
        }
        let next = [...prev];
        next = next.map((value) => {
          if (value === 0) {
            return 0;
          }
          return value - 1;
        });
        next[skill_index] = 2;
        return next;
      });
    },
    [],
  );

  const stat_total = useMemo((): StatObject => {
    let stat = AddonSkill.getStatObject(
      context,
      mainSkill,
      mainLevel,
    );
    subActiveIndexes.forEach((order_number, skill_index) => {
      if (order_number === 0) {
        return;
      }
      const sub_addon: AddonSkill = subSkills[skill_index];
      const sub_level: number = subLevels[skill_index];
      const sub_stat: StatObject = AddonSkill.getStatObject(
        context,
        sub_addon,
        sub_level,
      );
      stat = StatObject.merge(stat, sub_stat);
    });
    return stat;
  }, [mainLevel, subLevels, subActiveIndexes, context]);

  useEffect(() => {
    saveMainLevel(formStorageKey, mainLevel);
  }, [mainLevel]);

  useEffect(() => {
    saveSubLevels(formStorageKey, subLevels);
  }, [subLevels]);

  useEffect(() => {
    saveSubActiveIndexes(formStorageKey, subActiveIndexes);
  }, [subActiveIndexes]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <Fragment>
      <FormBase
        cardTitle={title}
        slotCardHeaderAction={
          <Tooltip
            placement="top"
            title={<Typography>Open summary</Typography>}
          >
            <IconButton
              size="large"
              color="primary"
              onClick={handleDialogOpen}
            >
              <BarChartRounded />
            </IconButton>
          </Tooltip>
        }
        slotCardContent={
          <Stack spacing={3}>
            <FieldAddon
              bold
              title={mainSkill.label}
              slotCheckbox={null}
              level={mainLevel}
              onLevelChange={setMainLevel}
            />
            <Stack spacing={1}>
              {subActiveIndexes.map((order_number, skill_index) => {
                const sub_level: number = subLevels[skill_index];
                const sub_label: string =
                  subSkills[skill_index].label;
                return (
                  <FieldAddon
                    key={`${sub_label}-${skill_index}`}
                    bold={false}
                    title={sub_label}
                    slotCheckbox={
                      <CheckboxAddon
                        orderNumber={order_number}
                        onClick={() => {
                          handleSubActiveIndexChange(skill_index);
                        }}
                      />
                    }
                    level={sub_level}
                    onLevelChange={(next_level: number) => {
                      handleSubLevelChange(next_level, skill_index);
                    }}
                  />
                );
              })}
            </Stack>
          </Stack>
        }
      />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`${title} addon summary`}</DialogTitle>
        <DialogContent>
          <StatView stat={stat_total} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
