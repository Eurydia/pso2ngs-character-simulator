import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CharacterEdit from "./pages/EditCharacter";
import EditEquipment from "./pages/EditEquipment";
import FoodEdit from "./pages/EditFood";
import Home from "./pages/Home";

import { style_overrrides } from "./theme";

function App() {
  return (
    <ThemeProvider theme={style_overrrides}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: purple["200"],
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-character" element={<CharacterEdit />} />
          <Route path="/edit-equipment" element={<EditEquipment />} />
          <Route path="/edit-food" element={<FoodEdit />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
