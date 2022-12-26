import { FC } from "react";
import { Link } from "react-router-dom";
import { Launch } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";

type ConfigCardProps = {
  destination: string;
  title: string;
  description: string;
};
const ConfigCard: FC<ConfigCardProps> = (props) => {
  return (
    <Paper>
      <Box padding={2}>
        <Typography fontWeight="bold">{props.title}</Typography>
        <Typography paragraph>{props.description}</Typography>
        <Button
          disableRipple
          disableFocusRipple
          disableTouchRipple
          disableElevation
          startIcon={<Launch fontSize="small" />}
          component={Link}
          to={props.destination}
        >
          go
        </Button>
      </Box>
    </Paper>
  );
};

export default ConfigCard;
