import { FC } from "react";
import {
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";

export const TextFieldFood: FC<AutocompleteRenderInputParams> = (
  props,
) => {
  return <TextField {...props} fullWidth placeholder="Search" />;
};
