import { FC, ChangeEvent, useState } from "react";
import { TextField } from "@mui/material";
import { toSafeInteger as ld_toSafeInteger } from "lodash";

import { clampValue } from "./helper";

type FieldFixaProps = {
  valueMin: number | null;
  valueMax: number | null;
  onChange: (value: number) => void;
};
const FieldFixa: FC<FieldFixaProps> = (props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const value_input: string = event.target.value;
    const value_number: number = ld_toSafeInteger(value_input);
    const value_clamped: number = clampValue(
      value_number,
      props.valueMin,
      props.valueMax,
    );

    setValue(value_input);
    props.onChange(value_clamped);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      fullWidth
      size="small"
      inputMode="numeric"
      placeholder="Enhancement"
    />
  );
};

export default FieldFixa;
