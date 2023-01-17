import {
  FC,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Typography,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  Checkbox,
} from "@mui/material";
import {
  BarChartRounded,
  CheckBoxRounded,
} from "@mui/icons-material";

import { AddonSkill, StatObject } from "../../assets";
import { GlobalAppContext } from "../../contexts";

import { FormBase } from "../FormBase";
import { StatView } from "../StatView";
import { IconButtonTooltip } from "../IconButtonTooltip";
import { FieldNumber } from "../FieldNumber";

import { FieldAddonLayout } from "./FieldAddonLayout";
import { CheckboxAddon } from "./CheckboxAddon";
import {
  loadMainLevel,
  loadSubLevels,
  loadSubActiveIndexes,
  saveMainLevel,
  saveSubLevels,
  saveSubActiveIndexes,
} from "./helper";

type FormCharacterAddonProps = {
  // static props
  cardTitle: string;
  formStorageKey: string;
  mainSkill: AddonSkill;
  subSkills: AddonSkill[];

  onStatChange: (next_stat: StatObject) => void;
};
export const FormCharacterAddon: FC<FormCharacterAddonProps> = (
  props,
) => {
  const {
    cardTitle,
    formStorageKey,
    mainSkill,
    subSkills,
    onStatChange,
  } = props;

  const context = useContext(GlobalAppContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const [mainLevel, setMainLevel] = useState(() => {
    return loadMainLevel(formStorageKey);
  });
  const [subLevels, setSubLevels] = useState(() => {
    const size: number = subSkills.length;
    return loadSubLevels(formStorageKey, size);
  });
  const [subActiveIndexes, setSubActiveIndexes] = useState(() => {
    const size: number = subSkills.length;
    return loadSubActiveIndexes(formStorageKey, size);
  });

  useEffect(() => {
    saveMainLevel(formStorageKey, mainLevel);
  }, [mainLevel]);
  useEffect(() => {
    saveSubLevels(formStorageKey, subLevels);
  }, [subLevels]);
  useEffect(() => {
    saveSubActiveIndexes(formStorageKey, subActiveIndexes);
  }, [subActiveIndexes]);

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

  const stat_total = useMemo(() => {
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
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
        slotCardHeaderAction={
          <IconButtonTooltip
            tooltipText="Open summary"
            icon={<BarChartRounded />}
            onClick={handleDialogOpen}
          />
        }
        slotCardContent={
          <Stack spacing={2}>
            <FieldAddonLayout
              slotLabel={
                <Typography fontWeight="bold">
                  {mainSkill.label}
                </Typography>
              }
              slotCheckbox={
                <Checkbox
                  checked
                  disabled
                  checkedIcon={<CheckBoxRounded />}
                />
              }
              slotField={
                <FieldNumber
                  disabled={false}
                  startAdornment={<Typography>Lv.</Typography>}
                  valueMin={0}
                  valueMax={AddonSkill.LEVEL_MAX}
                  value={mainLevel}
                  onValueChange={setMainLevel}
                />
              }
            />
            <Stack spacing={1}>
              {subSkills.map((sub_skill, skill_index) => {
                const sub_label = sub_skill.label;
                const sub_level = subLevels[skill_index];
                const order_number = subActiveIndexes[skill_index];
                return (
                  <FieldAddonLayout
                    key={`${sub_label}-${skill_index}`}
                    slotLabel={<Typography>{sub_label}</Typography>}
                    slotCheckbox={
                      <CheckboxAddon
                        orderNumber={order_number}
                        onClick={() => {
                          handleSubActiveIndexChange(skill_index);
                        }}
                      />
                    }
                    slotField={
                      <FieldNumber
                        disabled={false}
                        startAdornment={<Typography>Lv.</Typography>}
                        valueMin={0}
                        valueMax={AddonSkill.LEVEL_MAX}
                        value={sub_level}
                        onValueChange={(next_level) => {
                          handleSubLevelChange(
                            next_level,
                            skill_index,
                          );
                        }}
                      />
                    }
                  />
                );
              })}
            </Stack>
          </Stack>
        }
      />
      <Dialog
        fullWidth
        keepMounted
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          <Typography fontWeight="bold" fontSize="x-large">
            {`${cardTitle} addon summary`}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StatView stat={stat_total} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
