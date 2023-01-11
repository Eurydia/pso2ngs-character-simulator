import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { SummaryEquipment } from "../../types";

const SummaryItem: FC<SummaryEquipment> = (props) => {
  const { equipment, fixa, augments } = props;
  return (
    <Box>
      <Typography fontWeight="bold">{equipment}</Typography>
      <Typography>{fixa}</Typography>
      {augments.map((value, index) => (
        <Typography key={`${value}-${index}`}>{value}</Typography>
      ))}
    </Box>
  );
};

type SummaryViewProps = {
  items: SummaryEquipment[];
};
export const SummaryList: FC<SummaryViewProps> = (props) => {
  const { items } = props;

  return (
    <Box>
      <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
        {items.map((item, index) => {
          return (
            <Grid key={`item-${index}`} item xs={1}>
              <SummaryItem {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
