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

import { PageEditEquipment, PageEditFood, PageHome } from "./pages";

import { style_overrides } from "./theme";
import { useEffect, useState } from "react";
import { statObject, StatObject } from "./assets";

const isValidJSON = (data: string): boolean => {
  try {
    JSON.parse(data);
    return true;
  } catch (e) {
    return false;
  }
};

const saveStat = (key: string, stat: StatObject): void => {
  localStorage.setItem(key, StatObject.toString(stat));
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
  const [equipment, setEquipment] = useState<StatObject>(() => {
    return retrieveStat("p-eq");
  });

  const handleEquipmentChange = (value: StatObject) => {
    setEquipment(value);
    saveStat("p-eq", value);
  };

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
                  ctx={{}}
                  stat={equipment}
                  onStatChange={handleEquipmentChange}
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
