import { FC } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";

import {
  FormCharacterClass,
  FormCharacterClassSkill,
} from "../../components";
import {
  AssetCharacterClassSkills,
  CharacterClassSkill,
} from "../../assets";

const HUNTER_SKILLS: CharacterClassSkill[] = [
  AssetCharacterClassSkills.G_HUNTER_FLASH_GUARD,
];

type PageEditClassProps = {};
export const PageEditClass: FC<PageEditClassProps> = () => {
  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        <Stack spacing={3}>
          <FormCharacterClass cardTitle="Main class & sub class" />
          <Box>
            <Grid container spacing={3} columns={{ xs: 1, sm: 2 }}>
              <Grid item xs={1}>
                <FormCharacterClassSkill
                  isMainClass={true}
                  isSubClass={false}
                  cardTitle="Hunter skills"
                  skills={HUNTER_SKILLS}
                />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};
