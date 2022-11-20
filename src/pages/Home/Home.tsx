import { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExtraRoundedCard from "../../components/ExtraRoundedCard";
import FormAugment from "../../components/FormAugment";
import FieldAugment from "../../components/FieldAugment";
import FieldWeapon from "../../components/FieldWeapon";

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
        <ExtraRoundedCard raised>
          <CardContent>
            <FieldWeapon value={null} onChange={(v) => null} />
            <FormAugment />
            {/* <FieldAugment /> */}
          </CardContent>
        </ExtraRoundedCard>
      </Grid>
    </Grid>
  );
};
export default Home;
