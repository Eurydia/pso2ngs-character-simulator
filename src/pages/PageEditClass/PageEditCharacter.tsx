import { FC } from "react";
import { Box, Container } from "@mui/material";

import { FormCharacterClass } from "../../components";

type PageEditClassProps = {};
export const PageEditClass: FC<PageEditClassProps> = () => {
  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        <FormCharacterClass cardTitle="Main class & sub class" />
      </Box>
    </Container>
  );
};
