import { FC } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface EquipmentEditProps {}
const EquipmentEdit: FC<EquipmentEditProps> = () => {
  return (
    <Stack>
      <Typography>Equipment</Typography>
      <Button component={Link} to="/">
        edit
      </Button>
    </Stack>
  );
};

export default EquipmentEdit;
