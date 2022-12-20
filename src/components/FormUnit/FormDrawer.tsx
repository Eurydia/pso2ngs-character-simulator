import { FC } from "react";
import { Box, Drawer } from "@mui/material";

import StatView from "../StatView";

import { StatObject } from "../../assets";

type FormDrawerProps = {
  title: string;
  statsToDisplay: StatObject;
  isOpen: boolean;
  onClose: () => void;
};
const FormDrawer: FC<FormDrawerProps> = (props) => {
  return (
    <Drawer
      open={props.isOpen}
      onClose={props.onClose}
      anchor="right"
      variant="temporary"
    >
      <Box padding={2} margin={1}>
        <StatView
          title={`Stats For ${props.title}`}
          stat={props.statsToDisplay}
        />
      </Box>
    </Drawer>
  );
};

export default FormDrawer;
