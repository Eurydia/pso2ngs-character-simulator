import { FC } from "react";
import { Box, Container } from "@mui/material";

import { StatObject, ActionContext } from "../../assets";
import { FormFood } from "../../components";

type PageEditFoodProps = {
  isVisible: boolean;
  context: ActionContext;
  pageStorageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { isVisible, context, pageStorageKey, onStatChange } = props;

  return (
    <Container
      maxWidth="md"
      sx={{
        display: isVisible ? "block" : "none",
      }}
    >
      <Box margin={4}>
        <FormFood
          context={context}
          formStorageKey={`${pageStorageKey}-foods`}
          onStatChange={onStatChange}
        />
      </Box>
    </Container>
  );
};
