import {
  BarChartRounded,
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { amber, grey, orange } from "@mui/material/colors";
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
  CharacterClassSkill,
  StatObject,
  statObject,
} from "../../assets";
import { AppContext } from "../../contexts";
import { FieldNumber } from "../FieldNumber";

import { FormBase } from "../FormBase";
import { IconButtonTooltip } from "../IconButtonTooltip";
import { StatView } from "../StatView";
import { FieldSkillLayout } from "./FieldSkillLayout";

type FormCharacterClassSkillProps = {
  formStorageKey: string;
  cardTitle: string;
  skills: CharacterClassSkill[];

  isMainClass: boolean;
  isSubClass: boolean;

  onStatChange: (next_stat: StatObject) => void;
};
export const FormCharacterClassSkill: FC<
  FormCharacterClassSkillProps
> = (props) => {
  const { cardTitle, skills, isMainClass, isSubClass, onStatChange } =
    props;

  const { context } = useContext(AppContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const [skillLevels, setSkillLevels] = useState((): number[] => {
    const size: number = skills.length;
    const state: number[] = Array(size).fill(0);
    return state;
  });
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
      return <LooksOneRounded htmlColor={orange["400"]} />;
    }
    if (isSubClass) {
      return <LooksTwoRounded htmlColor={grey["400"]} />;
    }
    return null;
  }, [isMainClass, isSubClass]);

  const stat_total = useMemo(() => {
    let stat: StatObject = statObject();
    if (isMainClass) {
      skills.forEach((skill, skill_index) => {
        const skill_level: number = skillLevels[skill_index];
        const stat_skill: StatObject =
          CharacterClassSkill.getStatObjectMain(
            context,
            skill,
            skill_level,
          );
        stat = StatObject.merge(stat, stat_skill);
      });
    }
    if (isSubClass) {
      skills.forEach((skill, skill_index) => {
        const skill_level: number = skillLevels[skill_index];
        const stat_skill: StatObject =
          CharacterClassSkill.getStatObjectSub(
            context,
            skill,
            skill_level,
          );
        stat = StatObject.merge(stat, stat_skill);
      });
    }
    return stat;
  }, [isMainClass, isSubClass, skillLevels, context]);

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
          <Stack spacing={1}>
            {skills.map(({ label, level_max }, skill_index) => {
              const skill_level: number = skillLevels[skill_index];
              return (
                <FieldSkillLayout
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
