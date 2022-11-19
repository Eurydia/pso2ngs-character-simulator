import { Fragment, HTMLAttributes } from "react";
import {
  AutocompleteRenderOptionState,
  FilterOptionsState,
  ListItemText,
  MenuItem,
  Tooltip,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { matchSorter } from "match-sorter";
import { Augment } from "../../assets";

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
          <Box padding={1} minWidth={"200px"}>
            <Grid container columns={{ xs: 1, md: 3 }}>
              {option.formatted_stats.map(([label, value]) => (
                <Fragment key={label}>
                  <Grid item xs={1}>
                    <Typography>{value}</Typography>
                  </Grid>
                  <Grid item xs={1} md={2}>
                    <Typography>{label}</Typography>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Box>
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
            (item) => item.level_roman,
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
