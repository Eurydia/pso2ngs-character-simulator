import { FC, Fragment, ReactNode, useState } from "react";
import {
  BarChartRounded,
  BuildRounded,
  LaunchRounded,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

type LinkCardProps = {
  cardTitle: string;
  cardDescription: string;
  onLinkClick: () => void;
};
export const LinkCard: FC<LinkCardProps> = (props) => {
  const { cardTitle, cardDescription, onLinkClick } = props;

  return (
    <Card variant="outlined" sx={{ padding: 1 }}>
      <CardHeader
        title={cardTitle}
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
        subheader={cardDescription}
        subheaderTypographyProps={{
          paragraph: true,
        }}
      />
      <CardActions disableSpacing>
        <Button
          disableRipple
          startIcon={<LaunchRounded fontSize="large" />}
          onClick={onLinkClick}
        >
          go
        </Button>
      </CardActions>
    </Card>
  );
};
