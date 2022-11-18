import { HTMLAttributes } from "react";
import {
  AutocompleteRenderOptionState,
  List,
  FilterOptionsState,
  ListItem,
  ListItemText,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import { Augment } from "../../assets";
import { romanize } from "romans";

export const renderOption = (
  props: HTMLAttributes<HTMLLIElement>,
  option: Augment,
  _: AutocompleteRenderOptionState,
) => {
  return (
    <MenuItem {...props}>
      <Tooltip
        followCursor
        placement="top"
        title={
          <List dense disablePadding>
            {option.getFormattedStats().map((v, index) => {
              return (
                <ListItem key={`stat-${index}`} disableGutters>
                  <ListItemText>{v}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        }
      >
        <ListItemText>{option.label}</ListItemText>
      </Tooltip>
    </MenuItem>
  );
};

export const filterOptions = (
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
