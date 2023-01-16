import { FC } from "react";
import { Box, Container } from "@mui/material";

import { FormClass } from "../../components";

type PageEditClassProps = {};
export const PageEditClass: FC<PageEditClassProps> = () => {
  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        <FormClass cardTitle="Main class & sub class" />
      </Box>
    </Container>
  );
};
