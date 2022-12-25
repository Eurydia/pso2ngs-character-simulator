import { FC } from "react";
import { Box, Typography } from "@mui/material";

type SummaryItemProps = {
  equipment: string | null;
  fixa: string | null;
  augments: string[];
};
const SummaryItem: FC<SummaryItemProps> = (props) => {
  return (
    <Box>
      <Typography fontWeight="bold">{props.equipment}</Typography>
      <Typography>{props.fixa}</Typography>
      <Box paddingLeft={2}>
        {props.augments.map((value, index) => (
          <Typography key={`${value}-${index}`}>{value}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SummaryItem;
