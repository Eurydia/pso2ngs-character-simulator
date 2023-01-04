import { ChangeEvent, FC, memo } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";

import { toSafeInteger as ld_toSafeInteger } from "lodash";

type SelectPotentialProps = {
  potentialName: string;
  valueMax: number;
  value: number;
  onChange: (value: number) => void;
};
export const SelectPotential: FC<SelectPotentialProps> = memo(
  (props) => {
    const { potentialName, valueMax, value } = props;

    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const value: number = ld_toSafeInteger(event.target.value);

      props.onChange(value);
    };

    const options: { label: string; value: number }[] = [];
    for (let level = 1; level <= valueMax; level++) {
      options.push({
        label: `${potentialName} Lv. ${level}`,
        value: level,
      });
    }

    let _value = "";
    if (value > 0) {
      _value = value.toString();
    }

    return (
      <TextField
        select
        fullWidth
        placeholder="Potential"
        disabled={valueMax === 0}
        value={_value}
        onChange={handleChange}
      >
        {options.map(({ label, value }) => {
          return (
            <MenuItem
              key={`${potentialName}-${value}`}
              value={value.toString()}
            >
              <Typography>{label}</Typography>
            </MenuItem>
          );
        })}
      </TextField>
    );
  },
  (prev, next) => {
    return (
      prev.value === next.value &&
      prev.valueMax === next.valueMax &&
      prev.potentialName === next.potentialName
    );
  },
);
