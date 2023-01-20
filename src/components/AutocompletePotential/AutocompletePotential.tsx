import {
  FC,
  memo,
  SyntheticEvent,
  useCallback,
  useMemo,
} from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { OptionPotential } from "./OptionPotential";
import { TextFieldPotential } from "./TextFieldPotential";
import { Weapon } from "../../assets";

type AutocompletePotentialProps = {
  // Dynamic props
  weapon: Weapon | null;
  potentialLevel: number;

  onLevelChange: (next_level: number) => void;
};
export const AutocompletePotential: FC<AutocompletePotentialProps> =
  memo(
    (props) => {
      const { weapon, potentialLevel, onLevelChange } = props;

      const handleLevelChange = useCallback(
        (
          event: SyntheticEvent<Element, Event>,
          value: { label: string; value: number } | null,
          reason: AutocompleteChangeReason,
        ): void => {
          if (value === null) {
            return;
          }
          onLevelChange(value.value);
        },
        [],
      );

      const options = useMemo((): {
        label: string;
        value: number;
      }[] => {
        const results: {
          label: string;
          value: number;
        }[] = [{ label: "No potential", value: 0 }];
        if (weapon === null) {
          return results;
        }

        const { name: potentialName, level_max } = weapon.potential;
        for (
          let level_index = 0;
          level_index < level_max;
          level_index++
        ) {
          results.push({
            label: `${potentialName} Lv.${level_index + 1}`,
            value: level_index + 1,
          });
        }
        return results;
      }, [weapon]);

      const value = useMemo((): {
        label: string;
        value: number;
      } => {
        if (weapon === null) {
          return options[0];
        }
        return options[potentialLevel];
      }, [potentialLevel, options]);

      return (
        <Autocomplete
          disableClearable
          disabled={weapon === null}
          options={options}
          value={value}
          onChange={handleLevelChange}
          renderOption={(props, option, _) => {
            return (
              <OptionPotential
                key={option.label}
                LIProps={props}
                option={option}
              />
            );
          }}
          renderInput={(params) => {
            return <TextFieldPotential {...params} />;
          }}
        />
      );
    },
    (prev, next) => {
      return (
        prev.weapon?.label === next.weapon?.label &&
        prev.potentialLevel === next.potentialLevel
      );
    },
  );
