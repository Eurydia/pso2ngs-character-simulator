import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Launch } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  return (
    <Grid
      container
      width={1}
      columns={{ md: 2, xs: 1 }}
      padding={2}
      spacing={4}
    >
      <Grid item md={2}>
        <Card>
          <CardHeader title={"Config Equipment"} />
          <CardContent>
            Config your character equipment here.
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              to="/config-equipment"
              variant="contained"
              disableRipple
            >
              <Stack direction="row" spacing={0.5}>
                <Launch fontSize="small" />
                <Typography>Edit</Typography>
              </Stack>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
};
export default Home;
