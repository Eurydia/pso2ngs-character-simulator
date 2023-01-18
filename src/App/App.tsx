import { FC, useEffect, useMemo, useState } from "react";
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
import { grey } from "@mui/material/colors";
import { HomeRounded } from "@mui/icons-material";

import {
  PageEditAddon,
  PageEditClass,
  PageEditEquipment,
  PageEditFood,
  PageHome,
} from "../pages";
import { useActionContext } from "../hooks";
import { StatEnum, StatObject, statObject } from "../assets";
import { GlobalAppContext } from "../contexts";

import { style_overrides } from "./theme";
import { PageContainer } from "./PageContainer";

export const App: FC = () => {
  const [page, setPage] = useState(3);

  const { context, setContext } = useActionContext("app-context");

  const [statEquipment, setStatEquipment] = useState(statObject());
  const [statFood, setStatFood] = useState(statObject());
  const [statAddon, setStatAddon] = useState(statObject());

  const stat_total = useMemo(() => {
    let stat = StatObject.merge(statEquipment, statFood);
    stat = StatObject.merge(stat, statAddon);
    const hp_boost = StatObject.getStat(stat, StatEnum.ADV_HP_BOOST);
    if (hp_boost) {
      const hp = StatObject.getStat(stat, StatEnum.CORE_HP);
      stat = StatObject.setStat(
        stat,
        StatEnum.CORE_HP,
        Math.round(hp * hp_boost),
      );
      stat = StatObject.setStat(
        stat,
        StatEnum.ADV_HP_BOOST,
        undefined,
      );
    }
    return stat;
  }, [statEquipment, statFood, statAddon]);

  useEffect(() => {
    setContext((prev) => {
      const next = { ...prev };
      const { coreAttack, coreDefense, corePP, coreHP } = stat_total;
      if (coreAttack !== undefined) {
        next.character.attackValue = coreAttack;
      }
      if (coreDefense !== undefined) {
        next.character.defenseValue = coreDefense;
      }
      if (coreHP !== undefined) {
        next.character.hpValue = coreHP;
      }
      if (corePP !== undefined) {
        next.character.ppValue = corePP;
      }
      return next;
    });
  }, [stat_total]);

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
                setPage(0);
              }}
            >
              <HomeRounded htmlColor={grey[200]} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <GlobalAppContext.Provider value={{ context, setContext }}>
        <PageContainer
          isVisible={page === 0}
          component={
            <PageHome
              stat={stat_total}
              onContextChange={setContext}
              onPageChange={setPage}
            />
          }
        />
        <PageContainer
          isVisible={page === 1}
          component={
            <PageEditEquipment
              onStatChange={setStatEquipment}
              onContextChange={setContext}
            />
          }
        />
        <PageContainer
          isVisible={page === 2}
          component={<PageEditFood onStatChange={setStatFood} />}
        />
        <PageContainer
          isVisible={page === 3}
          component={<PageEditClass />}
        />
        <PageContainer
          isVisible={page === 4}
          component={<PageEditAddon onStatChange={setStatAddon} />}
        />
      </GlobalAppContext.Provider>
    </ThemeProvider>
  );
};
