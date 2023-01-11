import { FC } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { SummaryEquipment } from "../../types";

type SummaryListItemProps = {
  bold: boolean;
  label: string | null;
};
const SummaryListItem: FC<SummaryListItemProps> = (props) => {
  const { label, bold } = props;

  if (!Boolean(label)) {
    return null;
  }

  return (
    <ListItem dense disablePadding>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontSize: "medium",
          fontWeight: bold ? "bold" : "normal",
        }}
      />
    </ListItem>
  );
};

const SummaryList: FC<SummaryEquipment> = (props) => {
  const { equipment, fixa, augments } = props;

  return (
    <List dense disablePadding>
      <SummaryListItem bold label={equipment} />
      <SummaryListItem bold={false} label={fixa} />
      <List dense disablePadding>
        {augments.map((augment, index) => {
          return (
            <SummaryListItem
              key={`augment-${index}`}
              label={augment}
              bold={false}
            />
          );
        })}
      </List>
    </List>
  );
};

type SummaryViewProps = {
  items: SummaryEquipment[];
};
export const SummaryView: FC<SummaryViewProps> = (props) => {
  const { items } = props;

  return (
    <Box>
      <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
        {items.map((item, index) => {
          if (!item.equipment) {
            return;
          }
          return (
            <Grid key={`item-${index}`} item xs={1}>
              <SummaryList {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
