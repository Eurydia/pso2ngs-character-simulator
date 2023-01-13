import { FC } from "react";
import {
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";

export const TextFieldFixa: FC<AutocompleteRenderInputParams> = (
  props,
) => {
  return (
    <TextField
      {...props}
      fullWidth
      placeholder="Fixa"
      sx={{
        textDecorationLine: props.disabled ? "line-through" : "none",
      }}
    />
  );
};
