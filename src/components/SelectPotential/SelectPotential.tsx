import { ChangeEvent, FC, memo, useMemo } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";

import { Weapon } from "../../assets";

type SelectPotentialProps = {
  // Dynamics props
  weapon: Weapon | null;
  potentialLevel: number;

  onPotentialLevelChange: (next_level: number) => void;
};
export const SelectPotential: FC<SelectPotentialProps> = memo(
  (props) => {
    const { weapon, potentialLevel, onPotentialLevelChange } = props;

    const handlePotentialLevelChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ): void => {
      const value_input: string = event.target.value;
      const value_parsed: number = Number.parseInt(value_input);
      if (Number.isNaN(value_parsed)) {
        return;
      }
      onPotentialLevelChange(value_parsed);
    };

    const options = useMemo((): {
      label: string;
      value: number;
    }[] => {
      const results: { label: string; value: number }[] = [
        { label: "No Potential", value: 0 },
      ];
      if (weapon === null) {
        return results;
      }
      const level_max: number = weapon.potential.level_max;
      const potential_name: string = weapon.potential.name;
      for (let level = 1; level <= level_max; level++) {
        results.push({
          label: `${potential_name} Lv. ${level}`,
          value: level,
        });
      }
      return results;
    }, [weapon]);

    return (
      <TextField
        select
        fullWidth
        placeholder="Potential"
        disabled={weapon === null}
        value={potentialLevel}
        onChange={handlePotentialLevelChange}
        sx={{
          textDecorationLine:
            weapon === null ? "line-through" : "none",
        }}
      >
        {options.map(({ label, value }) => {
          return (
            <MenuItem key={`${label}-${value}`} value={value}>
              <Typography>{label}</Typography>
            </MenuItem>
          );
        })}
      </TextField>
    );
  },
  (prev, next) => {
    return (
      prev.potentialLevel === next.potentialLevel &&
      prev.weapon?.label === next.weapon?.label
    );
  },
);
