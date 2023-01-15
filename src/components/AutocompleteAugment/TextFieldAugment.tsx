import { FC } from "react";
import {
  AutocompleteRenderInputParams,
  TextField,
} from "@mui/material";

export const TextFieldAugment: FC<AutocompleteRenderInputParams> = (
  props,
) => {
  const { disabled } = props;
  return (
    <TextField
      {...props}
      fullWidth
      placeholder="Augment"
      sx={{
        textDecorationLine: disabled ? "line-through" : "none",
      }}
    />
  );
};
