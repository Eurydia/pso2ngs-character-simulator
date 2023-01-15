import { FC } from "react";
import { Box, Container } from "@mui/material";

import { StatObject } from "../../assets";
import { FormFood } from "../../components";

type PageEditFoodProps = {
  pageStorageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { pageStorageKey, onStatChange } = props;

  return (
    <Container maxWidth="sm">
      <Box marginY={4}>
        <FormFood
          formStorageKey={`${pageStorageKey}-foods`}
          onStatChange={onStatChange}
        />
      </Box>
    </Container>
  );
};
