import { FC, HTMLAttributes, SyntheticEvent } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteRenderOptionState,
  capitalize,
  FilterOptionsState,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import { romanize } from "romans";
import {
  AssetAugments,
  Augment,
  StatAdd,
  StatEnum,
  StatEnumString,
  StatSpecial,
} from "../../assets";
import { parseValue } from "./helper";
import { Error, Warning } from "@mui/icons-material";

const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Augment,
  _: AutocompleteRenderOptionState,
) => {
  const label = getOptionLabel(option);
  const stats = option.stats;

  return (
    <MenuItem {...props}>
      <Tooltip
        followCursor
        placement="top"
        title={
          <List dense disablePadding>
            {Object.keys(stats).map((stat) => {
              const stat_label = StatEnumString[stat as StatEnum];
              const stat_value = stats[stat as StatEnum]!;

              let parsed_value: string = "";
              if (StatAdd.includes(stat as StatEnum)) {
                parsed_value = parseValue(stat_value, 0, "add");
              } else if (StatSpecial.includes(stat as StatEnum)) {
                parsed_value = parseValue(stat_value, 0, "percent");
              } else {
                parsed_value = parseValue(stat_value, 1, "percent");
              }

              return (
                <ListItem key={stat} disableGutters>
                  <ListItemText>
                    {`${parsed_value} ${stat_label}`}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        }
      >
        <ListItemText>{label}</ListItemText>
      </Tooltip>
    </MenuItem>
  );
};
const filterOptions = (
  options: Augment[],
  state: FilterOptionsState<Augment>,
  size: number = 16,
) => {
  const value = state.inputValue;

  const terms = value
    .split(" ")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);

  return terms
    .reduceRight(
      (res, term) =>
        matchSorter(res, term, {
          keys: [
            (item) => item.name,
            (item) => item.level.toString(),
            (item) => item.group,
            (item) => (item.level > 0 ? romanize(item.level) : ""),
          ],
        }),
      options,
    )
    .slice(0, size)
    .sort((a, b) => {
      if (
        a.stats.coreBP !== undefined &&
        b.stats.coreBP !== undefined
      ) {
        return b.stats.coreBP - a.stats.coreBP;
      } else {
        return 0;
      }
    })
    .sort((a, b) => {
      if (a.group > b.group) {
        return 1;
      }
      if (a.group < b.group) {
        return -1;
      }
      return 0;
    });
};
const getOptionLabel = (option: Augment) => {
  const level = option.level > 0 ? romanize(option.level) : "";

  const _words: string[] = [];
  for (const w of option.name.split(" ")) {
    _words.push(capitalize(w));
  }
  return `${_words.join(" ")} ${level}`.trimEnd();
};

interface FieldAugmentProps {
  error: boolean;
  value: Augment | null;
  onChange: (value: Augment | null) => void;
}
const FieldAugment: FC<FieldAugmentProps> = (props) => {
  const size = 16;

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Augment | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  return (
    <Autocomplete
      options={AssetAugments}
      value={props.value}
      onChange={handleChange}
      renderInput={({ InputProps, ...other }) => (
        <TextField
          {...other}
          error={props.error}
          fullWidth
          label="Augment"
          InputProps={{
            ...InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {props.error ? (
                  <Error color="warning" fontSize="inherit" />
                ) : (
                  "C/"
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={renderOption}
      getOptionLabel={getOptionLabel}
      filterOptions={(options, state) =>
        filterOptions(options, state, size)
      }
      groupBy={(option) => option.group}
    />
  );
};

export default FieldAugment;
