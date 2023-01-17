import {
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { amber, grey, orange } from "@mui/material/colors";
import { FC, ReactNode, useCallback, useMemo, useState } from "react";

import { CharacterClassSkill } from "../../assets";
import { FieldNumber } from "../FieldNumber";

import { FormBase } from "../FormBase";
import { FieldSkillLayout } from "./FieldSkillLayout";

type FormCharacterClassSkillProps = {
  cardTitle: string;
  isMainClass: boolean;
  isSubClass: boolean;
  skills: CharacterClassSkill[];
};
export const FormCharacterClassSkill: FC<
  FormCharacterClassSkillProps
> = (props) => {
  const { cardTitle, skills, isMainClass, isSubClass } = props;

  const [skillLevels, setSkillLevels] = useState<number[]>(() => {
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
  return (
    <FormBase
      cardTitle={cardTitle}
      slotCardHeaderAvatar={card_icon}
      slotCardHeaderAction={null}
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
                      handleSkillLevelChange(next_level, skill_index);
                    }}
                  />
                }
              />
            );
          })}
        </Stack>
      }
    />
  );
};
