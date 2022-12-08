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
    const value_input: string = event.target.value;
    const value_filtered: string = value_input.replace(/[^0-9]/, "");
    const value_number: number = parseInt(value_filtered);

    if (ld_isNaN(value_number)) {
      props.onChange("");
      return;
    }

    props.onChange(
      clampValue(
        value_number,
        props.valueMin,
        props.valueMax,
      ).toString(),
    );
  };

  return (
    <TextField
      value={props.value}
      onChange={handleChange}
      fullWidth
      size="small"
      label="Enhancement"
      inputProps={{
        inputMode: "numeric",
      }}
    />
  );
};

export default FieldFixa;
