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
import EnhancementField from "../EnhancementField";
import EquipmentFormLayout from "../EquipmentFormLayout";
import FixaField from "../FixaField";

interface UnitFormProps {}
const UnitForm: FC<UnitFormProps> = () => {
  return (
    <EquipmentFormLayout
      equipmentSlot={<TextField fullWidth label="Unit" />}
      enhancementSlot={
        <EnhancementField value="0" onChange={() => null} />
      }
      fixaSlot={<FixaField />}
      augmentSlot={<AugmentForm />}
    />
  );
};

export default UnitForm;
