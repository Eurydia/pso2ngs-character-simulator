import { FC, useMemo, useState } from "react";
import {
  AppBar,
  CssBaseline,
  GlobalStyles,
  IconButton,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { PageEditEquipment, PageHome } from "../pages";
import { useActionContext } from "../hooks";
import { StatEnum, StatObject, statObject } from "../assets";
import { GlobalAppContext } from "../contexts";

import { style_overrides } from "./theme";
import { PageContainer } from "./PageContainer";
import { HomeRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

export const App: FC = () => {
  const [page, setPage] = useState(0);

  const [appContext, setAppContext] = useActionContext("app-ctx");

  const [statEquipment, setStatEquipment] = useState(statObject());
  const [statFood, setStatFood] = useState(statObject());
  const [statAddon, setStatAddon] = useState(statObject());

  const stat_total = useMemo(() => {
    let stat = StatObject.merge(statEquipment, statFood);
    stat = StatObject.merge(stat, statAddon);

    const hp = StatObject.getStat(stat, StatEnum.CORE_HP);
    const hp_boost = StatObject.getStat(stat, StatEnum.ADV_HP_BOOST);
    stat = StatObject.setStat(stat, StatEnum.CORE_HP, hp * hp_boost);
    stat = StatObject.setStat(stat, StatEnum.ADV_HP_BOOST, 1);

    return;
  }, [statEquipment, statFood, statAddon]);

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
      <AppBar position="sticky">
        <Toolbar>
          <Tooltip
            placement="top"
            title={<Typography>Home</Typography>}
          >
            <IconButton
              onClick={() => {
                return setPage(0);
              }}
            >
              <HomeRounded htmlColor={grey[200]} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <GlobalAppContext.Provider value={appContext}>
        <PageContainer
          isVisible={page === 0}
          component={<PageHome />}
        />
        <PageContainer
          isVisible={page === 1}
          component={
            <PageEditEquipment
              pageStorageKey="p-equipment"
              onStatChange={setStatEquipment}
            />
          }
        />

        <PageEditFood
          isVisible={page === 2}
          pageStorageKey="p-food"
          onStatChange={setStatFood}
        />
        <PageEditAddon
          isVisible={page === 4}
          pageStorageKey="p-addon"
          onStatChange={setStatAddon}
        />
      </GlobalAppContext.Provider>
    </ThemeProvider>
  );
};
