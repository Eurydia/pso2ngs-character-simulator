import { FC } from "react";
import {
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Stat, { StatValue } from "./subcomponents/Stat";

interface CoreStatsProps {
  bp: number;
  hp: number;
  pp: number;
  attack: number;
  defense: number;
}
const CoreStats: FC<CoreStatsProps> = (props) => {
  return (
    <Stack>
      <Stat
        label={<Typography>BP</Typography>}
        value={<StatValue value={props.bp} mode="add" />}
      />
      <Stat
        label={<Typography>HP</Typography>}
        value={<StatValue value={props.hp} mode="add" />}
      />
      <Stat
        label={<Typography>PP</Typography>}
        value={<StatValue value={props.pp} mode="add" />}
      />
      <Stat
        label={<Typography>Attack</Typography>}
        value={<StatValue value={props.attack} mode="add" />}
      />
      <Stat
        label={<Typography>Defense</Typography>}
        value={<StatValue value={props.defense} mode="add" />}
      />
    </Stack>
  );
};

interface PotencyStatsProps {
  melee: number;
  ranged: number;
  technique: number;
}
const PotencyStats: FC<PotencyStatsProps> = (props) => {
  return (
    <Stack>
      <Stat
        label={<Typography>Melee potency</Typography>}
        value={<StatValue value={props.melee} mode="percent" />}
      />
      <Stat
        label={<Typography>Ranged potency</Typography>}
        value={<StatValue value={props.ranged} mode="percent" />}
      />
      <Stat
        label={<Typography>Techinque potency</Typography>}
        value={<StatValue value={props.technique} mode="percent" />}
      />
    </Stack>
  );
};

interface AilmentStatsProps {
  burn: number;
  freeze: number;
  shock: number;
  blind: number;
  panic: number;
  poison: number;
  physicalDown: number;
}
const AilmentStats: FC<AilmentStatsProps> = (props) => {
  return (
    <Stack>
      <Stat
        label={<Typography>Burn resistance</Typography>}
        value={<StatValue value={props.burn} mode="percent" />}
      />
      <Stat
        label={<Typography>Freeze resistance</Typography>}
        value={<StatValue value={props.freeze} mode="percent" />}
      />
      <Stat
        label={<Typography>Shock resistance</Typography>}
        value={<StatValue value={props.shock} mode="percent" />}
      />
      <Stat
        label={<Typography>Blind resistance</Typography>}
        value={<StatValue value={props.blind} mode="percent" />}
      />
      <Stat
        label={<Typography>Panic resistance</Typography>}
        value={<StatValue value={props.panic} mode="percent" />}
      />
      <Stat
        label={<Typography>Poison resistance</Typography>}
        value={<StatValue value={props.poison} mode="percent" />}
      />
      <Stat
        label={<Typography>Physical down resistance</Typography>}
        value={
          <StatValue value={props.physicalDown} mode="percent" />
        }
      />
    </Stack>
  );
};

interface PPAdvancedStatsProps {
  usage: number;
  naturalRecovery: number;
  activeRecovery: number;
}
const PPAdvancedStats: FC<PPAdvancedStatsProps> = (props) => {
  return (
    <Stack>
      <Stat
        label={<Typography>PP cost</Typography>}
        value={<StatValue value={props.usage} mode="percent" />}
      />
      <Stat
        label={<Typography>Active PP recovery</Typography>}
        value={
          <StatValue value={props.activeRecovery} mode="percent" />
        }
      />
      <Stat
        label={<Typography>Natural PP recovery</Typography>}
        value={
          <StatValue value={props.naturalRecovery} mode="percent" />
        }
      />
    </Stack>
  );
};

interface OffensiveAdancedStatsProps {
  floorPotency: number;
  damageUp: number;
  critChance: number;
  critDamage: number;
  pbGaugeRecovery: number;
}
const OffensiveAdvancedStats: FC<OffensiveAdancedStatsProps> = (
  props,
) => {
  return (
    <Stack>
      <Stat
        label={<Typography>Damage dealt</Typography>}
        value={<StatValue value={props.damageUp} mode="percent" />}
      />
      <Stat
        label={<Typography>Floor potency</Typography>}
        value={
          <StatValue value={props.floorPotency} mode="percent" />
        }
      />
      <Stat
        label={<Typography>Crit chance</Typography>}
        value={<StatValue value={props.critChance} mode="percent" />}
      />
      <Stat
        label={<Typography>Crit damage</Typography>}
        value={<StatValue value={props.critDamage} mode="percent" />}
      />
      <Stat
        label={<Typography>PB gauge recovery</Typography>}
        value={
          <StatValue value={props.pbGaugeRecovery} mode="percent" />
        }
      />
    </Stack>
  );
};

interface DefensiveAdancedStatsProps {
  healingUp: number;
  damageResist: number;
  ailmentDuration: number;
}
const DefensiveAdvancedStats: FC<DefensiveAdancedStatsProps> = (
  props,
) => {
  return (
    <Stack>
      <Stat
        label={<Typography>Damage resistance</Typography>}
        value={
          <StatValue value={props.damageResist} mode="percent" />
        }
      />
      <Stat
        label={<Typography>Healing up</Typography>}
        value={<StatValue value={props.healingUp} mode="percent" />}
      />
      <Stat
        label={<Typography>Ailment duration</Typography>}
        value={
          <StatValue value={props.ailmentDuration} mode="percent" />
        }
      />
    </Stack>
  );
};

interface CharacterStatsProps {}
const CharacterStats: FC<CharacterStatsProps> = () => {
  const { breakpoints } = useTheme();
  return (
    <Stack
      padding={2}
      spacing={{ md: 4, xs: 1 }}
      direction={{ md: "row", xs: "column" }}
      divider={
        <Divider
          flexItem
          orientation={
            useMediaQuery(breakpoints.down("sm"))
              ? "horizontal"
              : "vertical"
          }
        />
      }
    >
      <Stack
        spacing={1}
        width={{ md: 0.5, xs: 1 }}
        divider={<Divider flexItem />}
      >
        <CoreStats
          bp={1000}
          hp={1000}
          pp={1000}
          attack={1000}
          defense={1000}
        />
        <PotencyStats
          melee={0.25555}
          ranged={0.2555}
          technique={0.255}
        />
        <AilmentStats
          burn={0.5}
          freeze={0.5}
          blind={0.5}
          panic={0.5}
          shock={0.5}
          poison={0.5}
          physicalDown={0.5}
        />
        <Stat
          label={
            <Typography>Harsh environment resistance</Typography>
          }
          value={<StatValue value={1} mode="percent" />}
        />
      </Stack>
      <Stack
        width={{ md: 0.5, xs: 1 }}
        spacing={1}
        divider={<Divider flexItem />}
      >
        <OffensiveAdvancedStats
          floorPotency={0.8}
          damageUp={1.05}
          critChance={0.1}
          critDamage={1.5}
          pbGaugeRecovery={2}
        />
        <PPAdvancedStats
          usage={0.25}
          naturalRecovery={3}
          activeRecovery={3}
        />
        <DefensiveAdvancedStats
          healingUp={3}
          damageResist={1.45}
          ailmentDuration={0.8}
        />
      </Stack>
    </Stack>
  );
};

export default CharacterStats;
