import { FC, useEffect, useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";

import {
  FormCharacterClass,
  FormCharacterClassSkill,
} from "../../components";
import {
  AssetCharacterClassSkills,
  CharacterClassSkill,
  statObject,
  StatObject,
} from "../../assets";

const HUNTER_SKILLS: CharacterClassSkill[] = [
  AssetCharacterClassSkills.G_HUNTER_FLASH_GUARD,
];

type PageEditClassProps = {
  pageStorageKey: string;
  onStatChange: (next_stat: StatObject) => void;
};
export const PageEditClass: FC<PageEditClassProps> = (props) => {
  const { pageStorageKey } = props;

  

  const [mainStat, setMainStat] = useState(statObject());

  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        <Stack spacing={3}>
          <FormCharacterClass
            formStorageKey={pageStorageKey}
            cardTitle="Main class & sub class"
            onStatChange={setMainStat}
          />
          <Box>
            <Grid container spacing={3} columns={{ xs: 1, sm: 2 }}>
              <Grid item xs={1}>
                <FormCharacterClassSkill
                  cardTitle="Hunter skills"

                  formStorageKey={`${pageStorageKey}-hunter`}
                  isMainClass={class}
                  isSubClass={false}
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
