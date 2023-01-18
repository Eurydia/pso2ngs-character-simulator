import { FC, useEffect, useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";

import {
  ActionContext,
  AssetCharacterClassSkills,
  CharacterClassSkill,
  statObject,
  StatObject,
} from "../../assets";
import { useNumber } from "../../hooks";
import { FormCharacterClass } from "../../components";

const HUNTER_SKILLS: CharacterClassSkill[] = [
  AssetCharacterClassSkills.G_HUNTER_FLASH_GUARD,
];

type PageEditClassProps = {
  onStatChange: (next_stat: StatObject) => void;
};
export const PageEditClass: FC<PageEditClassProps> = (props) => {
  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        {/* <FormCharacterClass formStorageKey="character-class" /> */}
      </Box>
    </Container>
  );
};
