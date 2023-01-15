import { FC, useContext } from "react";
import { Box, Container } from "@mui/material";

import { StatObject } from "../../assets";
import { FormFood } from "../../components";
import { GlobalAppContext } from "../../contexts";

type PageEditFoodProps = {
  pageStorageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { pageStorageKey, onStatChange } = props;

  const context = useContext(GlobalAppContext);

  return (
    <Container maxWidth="md">
      <Box marginY={4}>
        <FormFood
          context={context}
          formStorageKey={`${pageStorageKey}-foods`}
          onStatChange={onStatChange}
        />
      </Box>
    </Container>
  );
};
