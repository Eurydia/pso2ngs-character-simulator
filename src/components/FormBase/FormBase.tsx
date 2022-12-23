import { FC, ReactNode } from "react";
import { Box, Paper, Typography } from "@mui/material";

type FormBaseProps = {
  title: string;
  children: ReactNode | ReactNode[];
};
const FormBase: FC<FormBaseProps> = (props) => {
  return (
    <Paper>
      <Box padding={2} margin={2}>
        <Typography fontWeight="bold" fontSize="large">
          {props.title}
        </Typography>
        {props.children}
      </Box>
    </Paper>
  );
};

export default FormBase;
