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

const isValidJSON = (data: string): boolean => {
  try {
    JSON.parse(data);
    return true;
  } catch (e) {
    return false;
  }
};

const retrieveStat = (key: string): StatObject => {
  const loaded_string: string | null = localStorage.getItem(key);
  if (loaded_string === null) {
    return statObject();
  }
  if (!isValidJSON(loaded_string)) {
    return statObject();
  }
  const obj: StatObject = JSON.parse(loaded_string);
  return statObject(obj);
};

function App() {
  const equipment = retrieveStat(STORAGE_KEY_EQUIPMENT);

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
            <Route path="/" element={<PageHome stat={equipment} />} />
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
              element={<PageEditFood ctx={{}} />}
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
