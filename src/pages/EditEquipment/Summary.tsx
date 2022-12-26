import { FC } from "react";
import { Grid } from "@mui/material";

import { SummaryEquipment } from "../../types";
import { StatObject } from "../../assets";
import { FormBase } from "../../components";

import SummaryItem from "./SummaryItem";

type SummaryProps = {
  items: SummaryEquipment[];
  stat: StatObject;
};
const Summary: FC<SummaryProps> = (props) => {
  const { stat, items } = props;

  return (
    <FormBase
      title="Summary"
      dialogTitle="Stats for Equipment"
      stat={stat}
    >
      <Grid container columns={{ xs: 1, sm: 2, md: 4 }}>
        {items.map((item, index) => (
          <Grid key={`item-#${index}`} item xs={1}>
            <SummaryItem {...item} />
          </Grid>
        ))}
      </Grid>
    </FormBase>
  );
};

export default Summary;
