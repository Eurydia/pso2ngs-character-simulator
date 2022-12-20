import { FC, ReactNode } from "react";
import { Box, Paper } from "@mui/material";

type FormBaseProps = { children: ReactNode | ReactNode[] };
const FormBase: FC<FormBaseProps> = (props) => {
  return (
    <Paper>
      <Box padding={2} margin={2}>
        {props.children}
      </Box>
    </Paper>
  );
};

export default FormBase;
