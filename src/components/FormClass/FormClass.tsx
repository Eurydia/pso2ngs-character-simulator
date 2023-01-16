import { FC, useCallback, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";

import { CharacterClass } from "../../assets";

import { FieldNumber } from "../FieldNumber";
import { FormBase } from "../FormBase";
import { SelectClass } from "../SelectClass";

type FormClassProps = {
  cardTitle: string;
};
export const FormClass: FC<FormClassProps> = (props) => {
  const { cardTitle } = props;

  const [classData, setClassData] = useState<{
    main: string;
    sub: string;
  }>({ main: "Hunter", sub: "Fighter" });
  const [mainLevel, setMainLevel] = useState<number>(0);

  const handleMainLabelChange = useCallback(
    (next_label: string): void => {
      setClassData((prev) => {
        const next = { ...prev };
        if (next_label === prev.sub) {
          next.sub = prev.main;
        }
        next.main = next_label;
        return next;
      });
    },
    [classData],
  );

  const handleSubLabelChange = useCallback(
    (next_sub_label: string) => {
      setClassData((prev) => {
        const next = { ...prev };
        if (next_sub_label === prev.main) {
          next.main = prev.sub;
        }
        next.sub = next_sub_label;
        return next;
      });
    },
    [classData],
  );

  const mainClass = useMemo(() => {
    const next_class: CharacterClass | null =
      CharacterClass.fromLabel(classData.main);
    if (next_class === null) {
      return;
    }
    return next_class;
  }, [classData.main]);

  return (
    <FormBase
      cardTitle={cardTitle}
      slotCardHeaderAction={null}
      slotCardContent={
        <Stack spacing={3}>
          <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
            <SelectClass
              startIcon={<LooksOneRounded />}
              currentClass={classData.main}
              onCurrentClassChange={handleMainLabelChange}
            />
            <FieldNumber
              disabled={false}
              startAdornment={<Typography>Lv.</Typography>}
              valueMin={1}
              valueMax={CharacterClass.LEVEL_MAX}
              value={mainLevel}
              onValueChange={setMainLevel}
            />
          </Stack>
          <Box width={{ xs: 1, sm: 0.5 }}>
            <SelectClass
              startIcon={<LooksTwoRounded />}
              currentClass={classData.sub}
              onCurrentClassChange={handleSubLabelChange}
            />
          </Box>
        </Stack>
      }
    />
  );
};
