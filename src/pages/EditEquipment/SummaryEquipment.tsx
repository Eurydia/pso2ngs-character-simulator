import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { SummaryEquipment } from "../../types";

type SummaryEquipmentItemProps = SummaryEquipment;
const SummaryEquipmentItem: FC<SummaryEquipmentItemProps> = (
  props,
) => {
  return (
    <Box>
      <Stack>
        <Typography>Equipment: {props.equipment}</Typography>
        <Typography>Fixa: {props.fixa}</Typography>
        <Typography>Augments:</Typography>
        {props.augments.map((value, index) => (
          <Typography key={`${value}-${index}`}>{value}</Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default SummaryEquipmentItem;
