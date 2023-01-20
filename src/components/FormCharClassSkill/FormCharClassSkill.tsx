import {
  FC,
  Fragment,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { amber, grey, orange } from "@mui/material/colors";
import {
  BarChartRounded,
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";

import {
  CharClassSkill,
  StatEnum,
  StatObject,
  statObject,
} from "../../assets";
import { AppContext } from "../../contexts";
import { FieldNumber } from "../FieldNumber";

import { FormBase } from "../FormBase";
import { IconButtonTooltip } from "../IconButtonTooltip";
import { StatView } from "../StatView";
import { FieldSkillLayout } from "./FieldSkillLayout";
import { useNumber } from "../../hooks";
import { loadSkillLevels, saveSkillLevels } from "./helper";

type FormCharClassSkillProps = {
  formStorageKey: string;
  cardTitle: string;
  skills: CharClassSkill[];

  isMainClass: boolean;
  isSubClass: boolean;

  onStatChange: (next_stat: StatObject) => void;
};
export const FormCharClassSkill: FC<FormCharClassSkillProps> = (
  props,
) => {
  const {
    formStorageKey,
    cardTitle,
    skills,
    isMainClass,
    isSubClass,
    onStatChange,
  } = props;

  const { context } = useContext(AppContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const { value: skillPoint, setValue: setSkillPoint } = useNumber(
    `${formStorageKey}-sp`,
  );
  const [skillLevels, setSkillLevels] = useState((): number[] => {
    const size: number = skills.length;
    return loadSkillLevels(`${formStorageKey}-levels`, size);
  });

  useEffect(() => {
    saveSkillLevels(`${formStorageKey}-levels`, skillLevels);
  }, [skillLevels]);

  const handleSkillLevelChange = useCallback(
    (next_level: number, skill_index: number): void => {
      setSkillLevels((prev) => {
        const next = [...prev];
        next[skill_index] = next_level;
        return next;
      });
    },
    [],
  );

  const card_icon = useMemo((): ReactNode => {
    if (isMainClass) {
      return (
        <LooksOneRounded fontSize="medium" htmlColor={amber["400"]} />
      );
    }
    if (isSubClass) {
      return (
        <LooksTwoRounded fontSize="medium" htmlColor={grey["400"]} />
      );
    }
    return null;
  }, [isMainClass, isSubClass]);

  const stat_total = useMemo((): StatObject => {
    let stat = statObject();
    if (isMainClass) {
      stat = StatObject.setStat(
        stat,
        StatEnum.CORE_BP,
        skillPoint * 3,
      );
      skills.forEach((skill, skill_index) => {
        const skill_level: number = skillLevels[skill_index];
        const stat_skill: StatObject =
          CharClassSkill.getStatObjectMain(
            context,
            skill,
            skill_level,
          );
        stat = StatObject.merge(stat, stat_skill);
      });
      return stat;
    }
    if (isSubClass) {
      stat = StatObject.setStat(
        stat,
        StatEnum.CORE_BP,
        skillPoint * 3,
      );
      skills.forEach((skill, skill_index) => {
        const skill_level: number = skillLevels[skill_index];
        const stat_skill: StatObject =
          CharClassSkill.getStatObjectSub(
            context,
            skill,
            skill_level,
          );
        stat = StatObject.merge(stat, stat_skill);
      });
      return stat;
    }
    return statObject();
  }, [isMainClass, isSubClass, skillLevels, context, skillPoint]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
        slotCardHeaderAvatar={card_icon}
        slotCardHeaderAction={
          <IconButtonTooltip
            tooltipText="Open summary"
            icon={<BarChartRounded />}
            onClick={handleDialogOpen}
          />
        }
        slotCardContent={
          <Stack spacing={2}>
            <FieldSkillLayout
              slotLabel={<Typography>SP spent</Typography>}
              slotField={
                <FieldNumber
                  disabled={false}
                  startAdornment={null}
                  value={skillPoint}
                  valueMax={CharClassSkill.SKILLPOINT_MAX}
                  valueMin={skillLevels.reduce((a, b) => {
                    return a + b;
                  }, 0)}
                  onValueChange={setSkillPoint}
                />
              }
            />
            <Stack spacing={1}>
              {skills.map(({ label, level_max }, skill_index) => {
                const skill_level: number = skillLevels[skill_index];
                return (
                  <FieldSkillLayout
                    key={label}
                    slotLabel={<Typography>{label}</Typography>}
                    slotField={
                      <FieldNumber
                        disabled={false}
                        startAdornment={<Typography>Lv.</Typography>}
                        value={skill_level}
                        valueMax={level_max}
                        valueMin={0}
                        onValueChange={(next_level) => {
                          handleSkillLevelChange(
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
            {`${cardTitle} summary`}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StatView stat={stat_total} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
