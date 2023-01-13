import { FC } from "react";
import {
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";

type TextFieldFoodProps = AutocompleteRenderInputParams;
export const TextFieldFood: FC<TextFieldFoodProps> = (props) => {
  return <TextField {...props} fullWidth placeholder="Search" />;
};
