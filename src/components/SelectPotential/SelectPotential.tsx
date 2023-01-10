import { ChangeEvent, FC, memo } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import { Weapon } from "../../assets";

type SelectPotentialProps = {
  weapon: Weapon | null;
  value: number;
  onChange: (value: number) => void;
};
export const SelectPotential: FC<SelectPotentialProps> = memo(
  (props) => {
    const { weapon, value, onChange } = props;

    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const value_input: string = event.target.value;
      if (Number.isNaN(value_input)) {
        return;
      }
      onChange(Number.parseInt(value_input));
    };

    let level_max: number = 0;
    let potential_name: string = "";
    if (weapon !== null) {
      level_max = weapon.potential.level_max;
      potential_name = weapon.potential.name;
    }

    const options: { label: string; value: number }[] = [];
    for (let level = 1; level <= level_max; level++) {
      options.push({
        label: `${potential_name} Lv. ${level}`,
        value: level,
      });
    }

    return (
      <TextField
        select
        fullWidth
        placeholder="Potential"
        disabled={level_max === 0}
        value={value}
        onChange={handleChange}
        sx={{
          textDecorationLine:
            level_max === 0 ? "line-through" : "none",
        }}
      >
        <MenuItem value={0}>
          <Typography>No Potential</Typography>
        </MenuItem>
        {options.map(({ label, value }) => {
          return (
            <MenuItem
              key={`${potential_name}-${value}`}
              value={value}
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
      prev.weapon?.label === next.weapon?.label
    );
  },
);
