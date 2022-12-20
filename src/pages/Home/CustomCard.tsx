import { FC } from "react";
import { Link } from "react-router-dom";
import { Launch } from "@mui/icons-material";
import { Button, Paper, Stack, Typography } from "@mui/material";

type CustomCardProps = {
  to: string;
  title: string;
  description: string;
};
const CustomCard: FC<CustomCardProps> = (props) => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Stack>
        <Typography fontWeight="bold">{props.title}</Typography>
        <Typography paragraph>{props.description}</Typography>
        <Button
          disableRipple
          size="small"
          variant="contained"
          component={Link}
          to={props.to}
        >
          <Stack direction="row" spacing={0.5}>
            <Launch fontSize="small" />
            <Typography>Edit</Typography>
          </Stack>
        </Button>
      </Stack>
    </Paper>
  );
};

export default CustomCard;
