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
import { useAtomValue } from "jotai";

import {
  PageEditEquipment,
  equipmentAtom,
  PageEditFood,
  PageHome,
} from "./pages";

import { style_overrides } from "./theme";

function App() {
  const equipment = useAtomValue(equipmentAtom);
  // const [food, setFood] = useState<StatObject>(statObject());

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
              element={<PageEditEquipment ctx={{}} />}
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
