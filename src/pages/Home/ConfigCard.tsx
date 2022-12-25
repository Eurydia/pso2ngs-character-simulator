import { FC } from "react";
import { Link } from "react-router-dom";
import { Launch } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type ConfigCardProps = {
  destination: string;
  title: string;
  description: string;
};
const ConfigCard: FC<ConfigCardProps> = (props) => {
  return (
    <Paper>
      <Box padding={2}>
        <Stack>
          <Typography fontWeight="bold">{props.title}</Typography>
          <Typography paragraph>{props.description}</Typography>
          <Button
            startIcon={<Launch fontSize="small" />}
            component={Link}
            to={props.destination}
          >
            edit
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ConfigCard;
