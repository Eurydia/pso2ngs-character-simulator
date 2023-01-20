import { FC, memo, ReactNode } from "react";
import {
  AutocompleteRenderInputParams,
  InputAdornment,
  TextField,
} from "@mui/material";
import { PriorityHighRounded } from "@mui/icons-material";

type EndAdornmentProps = {
  shouldShowWarning: boolean;
  defaultAdornment: ReactNode;
};
const EndAdornment: FC<EndAdornmentProps> = (props) => {
  const { shouldShowWarning, defaultAdornment } = props;
  if (shouldShowWarning) {
    return (
      <InputAdornment position="end">
        <PriorityHighRounded fontSize="medium" color="warning" />
        {defaultAdornment}
      </InputAdornment>
    );
  }
  return (
    <InputAdornment position="end">{defaultAdornment}</InputAdornment>
  );
};

type TextFieldWeaponProps = AutocompleteRenderInputParams & {
  shouldShowWarning: boolean;
};
export const TextFieldWeapon: FC<TextFieldWeaponProps> = (props) => {
  const { shouldShowWarning, InputProps, ...rest } = props;

  return (
    <TextField
      {...rest}
      fullWidth
      placeholder="Weapon*"
      InputProps={{
        ...InputProps,
        endAdornment: (
          <EndAdornment
            shouldShowWarning={shouldShowWarning}
            defaultAdornment={InputProps.endAdornment}
          />
        ),
      }}
    />
  );
};
