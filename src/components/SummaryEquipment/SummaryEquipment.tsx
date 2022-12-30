import { FC } from "react";
import { Grid } from "@mui/material";

import { SummaryEquipment } from "../../types";
import { StatObject } from "../../assets";

import FormBase from "../FormBase";

import SummaryItem from "./SummaryItem";

type SummaryEquipmentProps = {
  items: SummaryEquipment[];
  stat: StatObject;
};
const SummaryEquipment: FC<SummaryEquipmentProps> = (props) => {
  const { stat, items } = props;

  return (
    <FormBase title="Summary" stat={stat}>
      <Grid container columns={{ xs: 1, sm: 2 }} spacing={3}>
        {items.map((item, index) => (
          <Grid key={`item-#${index}`} item xs={1}>
            <SummaryItem {...item} />
          </Grid>
        ))}
      </Grid>
    </FormBase>
  );
};

export default SummaryEquipment;
