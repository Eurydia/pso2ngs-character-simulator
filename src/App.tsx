import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CharacterEdit from "./pages/EditCharacter";
import EditEquipment from "./pages/EditEquipment/EditEquipment";
import FoodEdit from "./pages/EditFood";
import Home from "./pages/Home";

import { style_overrrides } from "./theme";

function App() {
  return (
    <ThemeProvider theme={style_overrrides}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="lg" sx={{ padding: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/edit-character"
              element={<CharacterEdit />}
            />
            <Route
              path="/edit-equipment"
              element={<EditEquipment />}
            />
            <Route path="/edit-food" element={<FoodEdit />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
