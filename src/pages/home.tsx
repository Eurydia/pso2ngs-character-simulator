import { FC } from "react";
import { Card, CardContent, Container, Grid } from "@mui/material";
import CharacterStats from "../CharacterStats";

interface HomeProps {}
const Home: FC<HomeProps> = (props) => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        width={1}
        columns={{ md: 2 }}
        padding={4}
        spacing={8}
      >
        <Grid item md={2}>
          <Card variant="elevation">
            <CardContent>
              <CharacterStats />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
