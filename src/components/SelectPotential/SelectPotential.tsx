import { ChangeEvent, FC, memo, useCallback, useMemo } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import { Potential, Weapon } from "../../assets";

type SelectPotentialProps = {
  // Dynamics props
  weapon: Weapon | null;
  potentialLevel: number;

  onPotentialLevelChange: (next_level: number) => void;
};
export const SelectPotential: FC<SelectPotentialProps> = memo(
  (props) => {
    const { weapon, potentialLevel, onPotentialLevelChange } = props;

    const handleValueChange = useCallback(
      (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      ): void => {
        const value_input: string = event.target.value;
        const value_parsed: number = Number.parseInt(value_input);
        if (Number.isNaN(value_parsed)) {
          return;
        }
        onPotentialLevelChange(value_parsed);
      },
      [],
    );

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
        results.push({
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
        value={potentialLevel}
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
      prev.potentialLevel === next.potentialLevel &&
      prev.weapon?.label === next.weapon?.label
    );
  },
);
