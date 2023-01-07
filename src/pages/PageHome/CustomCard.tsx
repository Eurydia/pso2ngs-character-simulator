import { FC } from "react";
import { Link } from "react-router-dom";
import { Launch } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

type CustomCardProps = {
  destination: string;
  title: string;
  desc: string;
};
export const CustomCard: FC<CustomCardProps> = (props) => {
  return (
    <Card variant="outlined" sx={{ padding: 1 }}>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ fontWeight: "bold" }}
      />
      <CardContent>
        <Typography paragraph>{props.desc}</Typography>
      </CardContent>
      <CardActions disableSpacing>
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
      </CardActions>
    </Card>
  );
};

export default CustomCard;
