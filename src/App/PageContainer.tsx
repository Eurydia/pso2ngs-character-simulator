import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

type PageContainerProps = {
  isVisible: boolean;
  component: ReactNode;
};
export const PageContainer: FC<PageContainerProps> = (props) => {
  const { isVisible, component } = props;

  return (
    <Box display={isVisible ? "block" : "none"}>{component}</Box>
  );
};
