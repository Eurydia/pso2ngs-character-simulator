import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterEdit from "./pages/CharacterEdit";
import EquipmentEdit from "./pages/EquipmentEdit";
import FoodEdit from "./pages/FoodEdit";
import Home from "./pages/Home";
import { style_overrrides } from "./theme";

function App() {
  return (
    <ThemeProvider theme={style_overrrides}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-food" element={<FoodEdit />} />
          <Route path="/edit-character" element={<CharacterEdit />} />
          <Route path="/edit-equipment" element={<EquipmentEdit />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
