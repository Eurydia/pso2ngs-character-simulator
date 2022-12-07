import { FC, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { isNaN as ld_isNaN } from "lodash";

import { clampValue } from "./helper";

type FieldFixaProps = {
  valueMin: number | null;
  valueMax: number | null;
  value: string;
  onChange: (value: string) => void;
};
const FieldFixa: FC<FieldFixaProps> = (props) => {
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const input_value: string = event.target.value.replace(
      /[^0-9]/,
      "",
    );

    const new_value: number = parseInt(input_value);

    if (ld_isNaN(new_value)) {
      props.onChange("");
    } else {
      props.onChange(
        clampValue(
          new_value,
          props.valueMin,
          props.valueMax,
        ).toString(),
      );
    }
  };

  return (
    <TextField
      value={props.value}
      onChange={handleChange}
      fullWidth
      label="Enhancement"
      InputProps={{
        startAdornment: "+",
      }}
      inputProps={{
        inputMode: "numeric",
      }}
    />
  );
};

export default FieldFixa;
