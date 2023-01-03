import { FC, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { useStatObject } from "../../hooks";
import { StatObject } from "../../assets";
import { FormBase, FormFood } from "../../components";
import { SummaryFood } from "../../types";

const SummaryItem: FC<SummaryFood> = (props) => {
  const { label, level } = props;

  return (
    <Box>
      <Typography fontWeight="bold">
        {`${label} Lv. ${level}`}
      </Typography>
    </Box>
  );
};

type SummaryProps = { items: SummaryFood[] };
const Summary: FC<SummaryProps> = (props) => {
  const { items } = props;

  return (
    <Box>
      <Grid container spacing={2} columns={{ sm: 1, md: 2 }}>
        {items.map((item, index) => {
          return (
            <Grid key={`summary-${index}`} item xs={1}>
              <SummaryItem {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

type EditFoodProps = {
  onStatChange: (stat: StatObject) => void;
};
const EditFood: FC<EditFoodProps> = () => {
  const [stat, setStat] = useStatObject();
  const [summaries, setSummary] = useState<SummaryFood[]>([]);

  return (
    <Box margin={4}>
      <FormBase stat={stat} title="Food">
        <FormFood
          storage_key="page-food-item"
          onStatChange={setStat}
          onSummaryChange={setSummary}
        />
      </FormBase>
    </Box>
  );
};

export default EditFood;
