import { FC } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CharacterStats from "./subcomponents/StatList";
import ExtraRoundedCard from "../../GlobalComponents/ExtraRoundedCard";

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
      <Grid item md={2} xs={1}>
        <ExtraRoundedCard raised>
          <CardHeader title="Overview" />
          <CardContent>
            <CharacterStats />
          </CardContent>
        </ExtraRoundedCard>
      </Grid>
      <Grid item xs={1}>
        <ExtraRoundedCard raised>
          <CardHeader title="Character" />
          <CardContent>
            <Typography>
              Class, level, skill point allocation and more.
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to="edit-character">
              edit
            </Button>
          </CardActions>
        </ExtraRoundedCard>
      </Grid>
      <Grid item xs={1}>
        <ExtraRoundedCard raised>
          <CardHeader title="Equipment" />
          <CardContent>
            <Typography>Weapon, units, and augments.</Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to="edit-equipment">
              edit
            </Button>
          </CardActions>
        </ExtraRoundedCard>
      </Grid>
      <Grid item xs={1}>
        <ExtraRoundedCard raised>
          <CardHeader title="Food" />
          <CardContent>
            <Typography>
              Cook the perfect meal for your Meteorn.
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to="edit-food">
              edit
            </Button>
          </CardActions>
        </ExtraRoundedCard>
      </Grid>
    </Grid>
  );
};
export default Home;
