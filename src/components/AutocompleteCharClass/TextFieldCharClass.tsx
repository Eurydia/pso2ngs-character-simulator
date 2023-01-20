import { FC, ReactNode } from "react";
import {
  AutocompleteRenderInputParams,
  InputAdornment,
  TextField,
} from "@mui/material";

type TextFieldCharClassProps = AutocompleteRenderInputParams & {
  startIcon: ReactNode;
};
export const TextFieldCharClass: FC<TextFieldCharClassProps> = (
  props,
) => {
  const { startIcon, InputProps, ...rest } = props;

  return (
    <TextField
      {...rest}
      fullWidth
      placeholder="Class"
      InputProps={{
        ...InputProps,
        startAdornment: (
          <InputAdornment position="start">
            {startIcon}
          </InputAdornment>
        ),
      }}
    />
  );
};
