import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { SummaryEquipment } from "../../types";

type ItemProps = SummaryEquipment;
const Item: FC<ItemProps> = (props) => {
  return (
    <Box>
      <Typography fontWeight="500">{props.equipment}</Typography>
      <Typography>{props.fixa}</Typography>
      {props.augments.map((value, index) => (
        <Typography key={`${value}-${index}`}>{value}</Typography>
      ))}
    </Box>
  );
};

export default Item;
