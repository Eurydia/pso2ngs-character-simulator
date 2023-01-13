import { FC, memo, SyntheticEvent, useMemo } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { Fixa, AssetFixas, GroupEnumFixa } from "../../assets";

import { filterOptions } from "./helper";
import { OptionFixa } from "./OptionFixa";
import { TextFieldFixa } from "./TextFieldFixa";

type AutocompleteFixaProps = {
  mode: GroupEnumFixa;
  disabled: boolean;
  fixa: Fixa | null;
  onFixaChange: (next_fixa: Fixa | null) => void;
};
export const AutocompleteFixa: FC<AutocompleteFixaProps> = memo(
  (props) => {
    const { mode, disabled, fixa: value, onFixaChange } = props;

    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Fixa | null,
      reason: AutocompleteChangeReason,
    ) => {
      onFixaChange(value);
    };

    const options = useMemo((): Fixa[] => {
      return AssetFixas.filter((fixa) => {
        return fixa.group === props.mode;
      });
    }, [mode]);

    return (
      <Autocomplete
        disabled={disabled}
        options={options}
        value={value}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderInput={(params) => {
          return <TextFieldFixa {...params} />;
        }}
        renderOption={(props, option, _) => {
          return <OptionFixa {...props} option={option} />;
        }}
      />
    );
  },
  (prev, next) => {
    return (
      prev.disabled === next.disabled &&
      prev.fixa?.label === next.fixa?.label
    );
  },
);
