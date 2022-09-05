import { Stack } from "@mui/material";
import { FC, ReactNode } from "react";

interface StatProps {
  label: ReactNode;
  value: ReactNode;
}
const Stat: FC<StatProps> = (props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {props.label}
      {props.value}
    </Stack>
  );
};
export default Stat;
