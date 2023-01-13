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

import { Fixa, AssetFixas, GroupEnumFixa } from "../../assets";

import { filterOptions } from "./helper";
import { OptionFixa } from "./OptionFixa";
import { TextFieldFixa } from "./TextFieldFixa";

type AutocompleteFixaProps = {
  // Dynamic props
  disabled: boolean;
  fixa: Fixa | null;

  // Static props
  mode: GroupEnumFixa;

  onFixaChange: (next_fixa: Fixa | null) => void;
};
export const AutocompleteFixa: FC<AutocompleteFixaProps> = memo(
  (props) => {
    const { mode, disabled, fixa, onFixaChange } = props;

    const handleFixaChange = useCallback(
      (
        event: SyntheticEvent<Element, Event>,
        value: Fixa | null,
        reason: AutocompleteChangeReason,
      ): void => {
        onFixaChange(value);
      },
      [],
    );

    const options = useMemo((): Fixa[] => {
      return AssetFixas.filter((fixa) => {
        return fixa.group === props.mode;
      });
    }, [mode]);

    return (
      <Autocomplete
        disabled={disabled}
        options={options}
        value={fixa}
        onChange={handleFixaChange}
        filterOptions={filterOptions}
        renderInput={(params) => {
          return <TextFieldFixa {...params} />;
        }}
        renderOption={(props, option, _) => {
          return (
            <OptionFixa
              key={option.label}
              LIProps={props}
              option={option}
            />
          );
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
