import { useMemo } from "react";
import {
  AppBar,
  Container,
  CssBaseline,
  GlobalStyles,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import EditEquipment from "./pages/EditEquipment";
import FoodEdit from "./pages/EditFood";
import HomePage from "./pages/Home";

import { useStatObject } from "./hooks";
import { style_overrides } from "./theme";
import { statObject, StatObject } from "./assets";

function App() {
  const [equipment, setEquipment] = useStatObject("page-equipment");
  const [food, setFood] = useStatObject("page-food");

  let total: StatObject = statObject();
  const items: StatObject[] = [equipment, food];
  for (const item of items) {
    total = StatObject.merge(total, item);
  }

  return (
    <ThemeProvider theme={style_overrides}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: style_overrides.palette.primary.light,
          },
        }}
      />
      <BrowserRouter>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton component={Link} to="/">
              <Home />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<HomePage stat={total} />} />
            <Route
              path="/config-equipment"
              element={<EditEquipment onStatChange={setEquipment} />}
            />
            <Route
              path="/config-character"
              element={<Typography>Coming soon</Typography>}
            />
            <Route
              path="/config-food"
              element={<FoodEdit onStatChange={setFood} />}
            />
            <Route
              path="/config-addon"
              element={<Typography>Coming soon</Typography>}
            />
            <Route
              path="/config-buffs"
              element={<Typography>Coming soon</Typography>}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
