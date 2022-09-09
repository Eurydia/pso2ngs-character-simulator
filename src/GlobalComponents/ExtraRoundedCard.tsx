import { Card, CardProps } from "@mui/material";
import { FC } from "react";

const ExtraRoundedCard: FC<CardProps> = (props) => {
  return <Card {...props} sx={{ borderRadius: "1.25rem" }} />;
};

export default ExtraRoundedCard;
