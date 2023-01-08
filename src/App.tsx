import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  GlobalStyles,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";

import { style_overrides } from "./theme";
import { PageEditEquipment, PageEditFood, PageHome } from "./pages";
import { Food, statObject, StatObject } from "./assets";
import {
  useFood,
  useFormActionContext,
  useFormUnit,
  useFormWeapon,
} from "./hooks";
import { FormDataUnit, FormDataWeapon } from "./types";

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
  const [weapon, setWeapon] = useFormWeapon(
    `${STORAGE_KEY_EQUIPMENT}-eq-w`,
  );
  const [unitA, setUnitA] = useFormUnit(
    `${STORAGE_KEY_EQUIPMENT}-eq-ua`,
  );
  const [unitB, setUnitB] = useFormUnit(
    `${STORAGE_KEY_EQUIPMENT}-eq-ub`,
  );
  const [unitC, setUnitC] = useFormUnit(
    `${STORAGE_KEY_EQUIPMENT}-eq-uc`,
  );

  const [foodItems, foodItemAdd, foodItemRemove] = useFood(
    `${STORAGE_KEY_FOOD}-i`,
  );

  const stat_weapon = FormDataWeapon.getStatObject(context, weapon);
  const stat_unit_a = FormDataUnit.getStatObject(context, unitA);
  const stat_unit_b = FormDataUnit.getStatObject(context, unitB);
  const stat_unit_c = FormDataUnit.getStatObject(context, unitC);

  let stat_equipment = StatObject.merge(stat_weapon, stat_unit_a);
  stat_equipment = StatObject.merge(stat_equipment, stat_unit_b);
  stat_equipment = StatObject.merge(stat_equipment, stat_unit_c);

  const stat_food = Food.getStatObject(context, foodItems);

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
                weapon={weapon}
                unitA={unitA}
                unitB={unitB}
                unitC={unitC}
                onWeaponChange={setWeapon}
                onUnitChangeA={setUnitA}
                onUnitChangeB={setUnitB}
                onUnitChangeC={setUnitC}
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
                values={foodItems}
                onValueAdd={foodItemAdd}
                onValueRemove={foodItemRemove}
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
