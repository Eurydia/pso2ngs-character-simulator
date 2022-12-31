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

type EditFoodProps = {
  onStatChange: (stat: StatObject) => void;
};
const EditFood: FC<EditFoodProps> = () => {
  const [stat, setStat] = useStatObject();
  const [summaries, setSummary] = useState<SummaryFood[]>([]);

  return (
    <Box margin={4}>
      <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
        <Grid item xs={1}>
          <Card>
            <CardHeader
              title="Food"
              titleTypographyProps={{
                fontSize: "x-large",
                fontWeight: "bold",
              }}
            />
            <CardContent>
              <FormFood
                storage_key="page-food-item"
                onStatChange={setStat}
                onSummaryChange={setSummary}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <FormBase stat={stat} title="Summary">
            <Stack>
              {summaries.map((summary, index) => {
                return (
                  <SummaryItem
                    key={`summary-${index}`}
                    {...summary}
                  />
                );
              })}
            </Stack>
          </FormBase>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditFood;
