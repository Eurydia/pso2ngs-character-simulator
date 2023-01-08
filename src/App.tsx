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
import { useFormActionContext } from "./hooks";

const STORAGE_KEY_EQUIPMENT: string = "p-eq";
const STORAGE_KEY_FOOD: string = "p-f";
const STORAGE_KEY_CONTEXT: string = "p-c";

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
  const [context, setContext] = useFormActionContext(
    STORAGE_KEY_CONTEXT,
  );

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
        <Routes>
          <Route
            path="/"
            element={
              <PageHome
                stat={stat_total}
                context={context}
                onContextChange={setContext}
              />
            }
          />
          <Route
            path="/config-equipment"
            element={
              <PageEditEquipment
                context={context}
                storageKey={STORAGE_KEY_EQUIPMENT}
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
                context={context}
                storageKey={STORAGE_KEY_FOOD}
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
