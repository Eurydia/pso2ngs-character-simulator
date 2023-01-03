import { ChangeEvent, FC, memo } from "react";
import { MenuItem, TextField } from "@mui/material";

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

    return (
      <TextField
        select
        fullWidth
        placeholder="Potential"
        disabled={valueMax === 0}
        value={value}
        onChange={handleChange}
      >
        {Array(valueMax).map((_, level_index) => {
          const level: number = level_index + 1;

          return (
            <MenuItem key={`${potentialName}-${level_index}`}>
              {`${potentialName} Lv. ${level}`}
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
