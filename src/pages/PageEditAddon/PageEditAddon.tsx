import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

type PageEditAddonProps = {};
export const PageEditAddon: FC<PageEditAddonProps> = () => {
  return (
    <Container maxWidth="lg">
      <Box margin={4}>
        <Paper sx={{ padding: 4 }}>
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
        </Paper>
      </Box>
    </Container>
  );
};
