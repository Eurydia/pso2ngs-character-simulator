import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { SummaryEquipment } from "../../types";

type SummaryItemProps = SummaryEquipment;
const SummaryItem: FC<SummaryItemProps> = (props) => {
  return (
    <Box>
      <Typography fontWeight="bold" fontSize="small">
        {props.equipment}
      </Typography>
      <Typography fontSize="small">{props.fixa}</Typography>
      <Box paddingLeft={2}>
        {props.augments.map((value, index) => (
          <Typography key={`${value}-${index}`} fontSize="small">
            {value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SummaryItem;
