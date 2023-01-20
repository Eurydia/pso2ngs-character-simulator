import { FC, useEffect, useMemo, useState } from "react";
import {
  AppBar,
  CssBaseline,
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
  PageEditCharacter,
  PageEditEquipment,
  PageEditFood,
  PageHome,
} from "../pages";
import { useActionContext } from "../hooks";
import { StatEnum, StatObject, statObject } from "../assets";
import { AppContext } from "../contexts";

import { CustomGlobalStyle, style_overrides } from "./theme";
import { PageContainer } from "./PageContainer";

export const App: FC = () => {
  const [page, setPage] = useState(0);

  const { context, setContext } = useActionContext("app-context");

  const [statEquipment, setStatEquipment] = useState(statObject());
  const [statFood, setStatFood] = useState(statObject());
  const [statAddon, setStatAddon] = useState(statObject());
  const [statCharacter, setStatChatacter] = useState(statObject());

  const stat_total = useMemo((): StatObject => {
    let stat = StatObject.merge(statEquipment, statFood);
    stat = StatObject.merge(stat, statAddon);
    stat = StatObject.merge(stat, statCharacter);

    const hp_boost = StatObject.getStat(stat, StatEnum.ADV_HP_BOOST);
    const hp = StatObject.getStat(stat, StatEnum.CORE_HP);
    stat = StatObject.setStat(
      stat,
      StatEnum.CORE_HP,
      Math.round(hp * hp_boost),
    );
    delete stat[StatEnum.ADV_HP_BOOST];

    const healing = StatObject.getStat(stat, StatEnum.CORE_HP) / 2;
    const healing_up = StatObject.getStat(
      stat,
      StatEnum.ADV_DEF_HEALING_UP,
    );
    stat = StatObject.setStat(
      stat,
      StatEnum.ADV_DEF_HEALING,
      Math.floor(healing * healing_up),
    );
    delete stat[StatEnum.ADV_DEF_HEALING_UP];

    return stat;
  }, [statEquipment, statFood, statAddon, statCharacter]);

  useEffect(() => {
    setContext((prev) => {
      const next = { ...prev };
      const attack: number | undefined =
        stat_total[StatEnum.CORE_ATTACK];
      const defense: number | undefined =
        stat_total[StatEnum.CORE_DEFENSE];
      const hp: number | undefined = stat_total[StatEnum.CORE_HP];
      const pp: number | undefined = stat_total[StatEnum.CORE_PP];

      if (attack !== undefined) {
        next.character.attackValue = attack;
      }
      if (defense !== undefined) {
        next.character.defenseValue = defense;
      }
      if (hp !== undefined) {
        next.character.hpValue = hp;
      }
      if (pp !== undefined) {
        next.character.ppValue = pp;
      }
      return next;
    });
  }, [
    stat_total[StatEnum.CORE_HP],
    stat_total[StatEnum.CORE_PP],
    stat_total[StatEnum.CORE_ATTACK],
    stat_total[StatEnum.CORE_DEFENSE],
  ]);

  return (
    <ThemeProvider theme={style_overrides}>
      <CssBaseline />
      <CustomGlobalStyle />
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
      <AppContext.Provider
        value={{ context, updateContext: setContext }}
      >
        <PageContainer
          isVisible={page === 0}
          component={
            <PageHome stat={stat_total} onPageChange={setPage} />
          }
        />
        <PageContainer
          isVisible={page === 1}
          component={
            <PageEditEquipment onStatChange={setStatEquipment} />
          }
        />
        <PageContainer
          isVisible={page === 2}
          component={<PageEditFood onStatChange={setStatFood} />}
        />
        <PageContainer
          isVisible={page === 3}
          component={
            <PageEditCharacter onStatChange={setStatChatacter} />
          }
        />
        <PageContainer
          isVisible={page === 4}
          component={<PageEditAddon onStatChange={setStatAddon} />}
        />
      </AppContext.Provider>
    </ThemeProvider>
  );
};
