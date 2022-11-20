import { FC, Fragment, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FieldWeapon from "../../components/FieldWeapon";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [overviewPanel, setOverviewPanel] = useState<number | null>(
    null,
  );

  return (
    <Paper sx={{ padding: 4 }}>
      <Stack>
        <FieldWeapon value={null} onChange={(v) => null} />
      </Stack>
    </Paper>
  );
};

export default EditEquipment;
