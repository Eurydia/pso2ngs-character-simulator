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

type ConfigCardProps = {
  destination: string;
  title: string;
  desc: string;
};
const ConfigCard: FC<ConfigCardProps> = (props) => {
  return (
    <Card variant="outlined">
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

export default ConfigCard;
