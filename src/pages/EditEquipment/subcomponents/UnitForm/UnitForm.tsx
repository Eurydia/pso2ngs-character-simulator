import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, Fragment } from "react";
import AugmentForm from "../AugmentForm";
import EquipmentFormLayout from "../EquipmentFormLayout";

interface UnitFormProps {}
const UnitForm: FC<UnitFormProps> = () => {
  return (
    <EquipmentFormLayout
      equipmentSlot={<TextField fullWidth label="Unit" />}
      enhancementSlot={
        <TextField
          fullWidth
          label="Enhancement"
          // <Typography fontSize="inherit">Invalid</Typography>
        />
      }
      fixaSlot={<TextField fullWidth label="Fixa" />}
      augmentSlot={<AugmentForm />}
    />
  );
};

export default UnitForm;
