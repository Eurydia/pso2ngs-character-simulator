import { ChangeEvent, FC, memo } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";

type SelectPotentialProps = {
  potentialName: string;
  valueMax: number;
  value: number;
  onChange: (value: number) => void;
};
export const SelectPotential: FC<SelectPotentialProps> = memo(
  (props) => {
    const { potentialName, valueMax, value, onChange } = props;

    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const value_input: string = event.target.value;
      if (Number.isNaN(value_input)) {
        return;
      }
      onChange(Number.parseInt(value_input));
    };

    const options: { label: string; value: number }[] = [];
    for (let level = 1; level <= valueMax; level++) {
      options.push({
        label: `${potentialName} Lv. ${level}`,
        value: level,
      });
    }

    return (
      <TextField
        select
        fullWidth
        placeholder="Potential"
        disabled={valueMax === 0}
        value={value}
        onChange={handleChange}
        sx={{
          textDecorationLine:
            valueMax === 0 ? "line-through" : "none",
        }}
      >
        <MenuItem value={0}>
          <Typography>No Level</Typography>
        </MenuItem>
        {options.map(({ label, value }) => {
          return (
            <MenuItem key={`${potentialName}-${value}`} value={value}>
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
