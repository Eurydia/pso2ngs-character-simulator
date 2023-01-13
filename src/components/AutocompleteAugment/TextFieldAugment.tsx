import { FC } from "react";
import {
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";

export const TextFieldAugment: FC<AutocompleteRenderInputParams> = (
  props,
) => {
  return (
    <TextField
      {...props}
      fullWidth
      placeholder="Augment"
      sx={{
        textDecorationLine: props.disabled ? "line-through" : "none",
      }}
    />
  );
};
