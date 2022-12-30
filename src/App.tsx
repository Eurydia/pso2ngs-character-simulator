import {
  AppBar,
  Container,
  CssBaseline,
  GlobalStyles,
  IconButton,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import EditCharacter from "./pages/EditCharacter";
import EditEquipment from "./pages/EditEquipment";
import FoodEdit from "./pages/EditFood";
import HomePage from "./pages/Home";
import { useStatObject } from "./hooks/useStatObject";

import { style_overrrides } from "./theme";

function App() {
  const [statEquipment, setStatEquipment] =
    useStatObject("page-equipment");

  return (
    <ThemeProvider theme={style_overrrides}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: style_overrrides.palette.primary.light,
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
            <Route
              path="/"
              element={<HomePage stat={statEquipment} />}
            />
            <Route
              path="/config-character"
              element={<EditCharacter />}
            />
            <Route
              path="/config-equipment"
              element={<EditEquipment onChange={setStatEquipment} />}
            />
            <Route path="/config-food" element={<FoodEdit />} />
            <Route path="/config-addon" element={<FoodEdit />} />
            <Route path="/config-buffs" element={<FoodEdit />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
