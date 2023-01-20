import { FC } from "react";
import {
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";

type TextFieldPotentialProps = AutocompleteRenderInputParams;
export const TextFieldPotential: FC<TextFieldPotentialProps> = (
  props,
) => {
  return (
    <TextField
      {...props}
      fullWidth
      placeholder="Potential"
      sx={{
        textDecorationLine: props.disabled ? "line-through" : "none",
      }}
    />
  );
};
