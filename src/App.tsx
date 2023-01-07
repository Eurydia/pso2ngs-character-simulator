import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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

import { PageEditEquipment, PageEditFood, PageHome } from "./pages";
import { style_overrides } from "./theme";
import { statObject, StatObject } from "./assets";

const STORAGE_KEY_EQUIPMENT: string = "p-eq";
const STORAGE_KEY_FOOD: string = "p-f";

const retrieveStat = (key: string): StatObject => {
  const loaded_string: string | null = localStorage.getItem(key);
  if (loaded_string === null) {
    return statObject();
  }
  try {
    return JSON.parse(loaded_string);
  } catch (e) {
    return statObject();
  }
};

function App() {
  const stat_equipment = retrieveStat(STORAGE_KEY_EQUIPMENT);
  const stat_food = retrieveStat(STORAGE_KEY_FOOD);

  let stat_total = StatObject.merge(stat_equipment, stat_food);

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
            <Route
              path="/"
              element={<PageHome stat={stat_total} />}
            />
            <Route
              path="/config-equipment"
              element={
                <PageEditEquipment
                  storageKey={STORAGE_KEY_EQUIPMENT}
                  ctx={{}}
                />
              }
            />
            <Route
              path="/config-character"
              element={<Typography>Coming soon</Typography>}
            />
            <Route
              path="/config-food"
              element={
                <PageEditFood
                  storageKey={STORAGE_KEY_FOOD}
                  ctx={{}}
                />
              }
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
