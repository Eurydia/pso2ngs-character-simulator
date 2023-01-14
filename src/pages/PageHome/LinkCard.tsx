import { FC, memo } from "react";
import { Button, Card, CardActions, CardHeader } from "@mui/material";
import { LaunchRounded } from "@mui/icons-material";

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
          disableElevation
          variant="contained"
          startIcon={<LaunchRounded fontSize="large" />}
          onClick={onLinkClick}
        >
          go
        </Button>
      </CardActions>
    </Card>
  );
};
