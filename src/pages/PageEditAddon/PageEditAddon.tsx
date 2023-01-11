import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { FormAddon } from "../../components";
import { ActionContext } from "../../assets";

type PageEditAddonProps = {
  context: ActionContext;
  isVisible: boolean;
};
export const PageEditAddon: FC<PageEditAddonProps> = (props) => {
  const { isVisible, context } = props;
  return (
    <Container
      maxWidth="lg"
      sx={{ display: isVisible ? "block" : "none" }}
    >
      <Box margin={4}>
        <FormAddon context={context} title="Hunter" />
      </Box>
    </Container>
  );
};
