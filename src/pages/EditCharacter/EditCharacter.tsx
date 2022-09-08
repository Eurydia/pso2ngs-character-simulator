import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface CharacterEditProps {}
const CharacterEdit: FC<CharacterEditProps> = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Grid container columns={{ md: 2, xs: 1 }} spacing={2}>
            <Grid item xs={1}>
              <TextField fullWidth label="Main class" />
            </Grid>
            <Grid item xs={1}>
              <TextField fullWidth label="level" />
            </Grid>
            <Grid item xs={1}>
              <TextField fullWidth label="Subclass class" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CharacterEdit;
