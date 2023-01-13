import { ChangeEvent, FC, memo, useMemo } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import { Potential, Weapon } from "../../assets";

type SelectPotentialProps = {
  weapon: Weapon | null;
  value: number;
  onValueChange: (value: number) => void;
};
export const SelectPotential: FC<SelectPotentialProps> = memo(
  (props) => {
    const { weapon, value, onValueChange } = props;

    const handleValueChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const value_input: string = event.target.value;
      if (Number.isNaN(value_input)) {
        return;
      }
      onValueChange(Number.parseInt(value_input));
    };

    const potential = useMemo((): Potential | null => {
      if (weapon === null) {
        return null;
      }
      return weapon.potential;
    }, [weapon]);

    const level_max = useMemo((): number => {
      if (potential === null) {
        return 0;
      }
      return potential.level_max;
    }, [potential]);

    const potential_name = useMemo((): string => {
      if (potential === null) {
        return "";
      }
      return potential.name;
    }, [potential]);

    const options = useMemo((): {
      label: string;
      value: number;
    }[] => {
      const results: { label: string; value: number }[] = [];
      for (let level = 1; level <= level_max; level++) {
        options.push({
          label: `${potential_name} Lv. ${level}`,
          value: level,
        });
      }
      return results;
    }, [potential_name, level_max]);

    return (
      <TextField
        select
        fullWidth
        placeholder="Potential"
        disabled={level_max === 0}
        value={value}
        onChange={handleValueChange}
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
