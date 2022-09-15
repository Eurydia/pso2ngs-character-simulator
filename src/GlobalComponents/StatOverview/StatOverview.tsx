import { FC, ReactNode } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  getIcon,
  maybeToNumber,
  parseAdd,
  parsePercent,
} from "./helper";
import { StatEnum } from "../../assets/stat";

type StatListItemProps = {
  mode: "add" | "percent";
  value: number;
  label: ReactNode;
  icon: ReactNode;
};
const StatListItem: FC<StatListItemProps> = (props) => {
  const parsed_value =
    props.mode === "add"
      ? parseAdd(props.value)
      : parsePercent(props.value);

  return (
    <ListItem dense>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{props.label}</Typography>
          <Typography>{parsed_value}</Typography>
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

interface CustomListProps {
  children: ReactNode;
  subheader: string;
}
const CustomList: FC<CustomListProps> = (props) => {
  return (
    <List
      disablePadding
      subheader={
        <ListSubheader disableGutters disableSticky>
          {props.subheader}
        </ListSubheader>
      }
    >
      {props.children}
    </List>
  );
};

type CoreStatListProps = Partial<{
  bp: number;
  hp: number;
  pp: number;
  attack: number;
  defense: number;
}>;
const CoreStatList: FC<CoreStatListProps> = (props) => {
  const { bp, hp, pp, attack, defense } = props;

  const _bp = maybeToNumber(bp, 0);
  const _hp = maybeToNumber(hp, 0);
  const _pp = maybeToNumber(pp, 0);
  const _attack = maybeToNumber(attack, 0);
  const _defense = maybeToNumber(defense, 0);

  return (
    <CustomList subheader="Core">
      <StatListItem
        mode="add"
        label="BP"
        value={_bp}
        icon={getIcon(_bp, 0)}
      />
      <StatListItem
        mode="add"
        label="HP"
        value={_hp}
        icon={getIcon(_hp, 0)}
      />
      <StatListItem
        mode="add"
        label="PP"
        value={_pp}
        icon={getIcon(_pp, 0)}
      />
      <StatListItem
        mode="add"
        label="Attack"
        value={_attack}
        icon={getIcon(_attack, 0)}
      />
      <StatListItem
        mode="add"
        label="Defense"
        value={_defense}
        icon={getIcon(_defense, 0)}
      />
    </CustomList>
  );
};

type PotencyStatListProps = Partial<{
  melee: number;
  ranged: number;
  technique: number;
}>;
const PotencyStatList: FC<PotencyStatListProps> = (props) => {
  const { melee, ranged, technique } = props;

  const _melee = maybeToNumber(melee, 1);
  const _ranged = maybeToNumber(ranged, 1);
  const _technique = maybeToNumber(technique, 1);

  return (
    <CustomList subheader="Weapon up">
      <StatListItem
        mode="percent"
        label="Melee potency"
        value={_melee - 1}
        icon={getIcon(_melee, 1)}
      />
      <StatListItem
        mode="percent"
        label="Ranged potency"
        value={_ranged - 1}
        icon={getIcon(_ranged, 1)}
      />
      <StatListItem
        mode="percent"
        label="Technique potency"
        value={_technique - 1}
        icon={getIcon(_technique, 1)}
      />
    </CustomList>
  );
};

type AilmentStatListProps = Partial<{
  burn: number;
  freeze: number;
  shock: number;
  blind: number;
  panic: number;
  poison: number;
  physicalDown: number;
}>;
const AilmentStatList: FC<AilmentStatListProps> = (props) => {
  const { burn, freeze, panic, blind, shock, poison, physicalDown } =
    props;

  const _burn = maybeToNumber(burn, 1);
  const _freeze = maybeToNumber(freeze, 1);
  const _panic = maybeToNumber(panic, 1);
  const _blind = maybeToNumber(blind, 1);
  const _shock = maybeToNumber(shock, 1);
  const _poison = maybeToNumber(poison, 1);
  const _physicalDown = maybeToNumber(physicalDown, 1);

  return (
    <CustomList subheader="Ailment resistance">
      <StatListItem
        mode="percent"
        label="Burn resistance"
        value={_burn}
        icon={getIcon(_burn, 1)}
      />
      <StatListItem
        mode="percent"
        label="Freeze resistance"
        value={_freeze}
        icon={getIcon(_freeze, 1)}
      />
      <StatListItem
        mode="percent"
        label="Shock resistance"
        value={_shock}
        icon={getIcon(_shock, 1)}
      />
      <StatListItem
        mode="percent"
        label="Blind resistance"
        value={_blind}
        icon={getIcon(_blind, 1)}
      />
      <StatListItem
        mode="percent"
        label="Panic resistance"
        value={_panic}
        icon={getIcon(_panic, 1)}
      />
      <StatListItem
        mode="percent"
        label="Poison resistance"
        value={_poison}
        icon={getIcon(_poison, 1)}
      />
      <StatListItem
        mode="percent"
        label="Physical down resistance"
        value={_physicalDown}
        icon={getIcon(_physicalDown, 1)}
      />
    </CustomList>
  );
};

type PPAdvancedStatsProps = Partial<{
  usage: number;
  naturalRecovery: number;
  activeRecovery: number;
}>;
const PPAdvancedStats: FC<PPAdvancedStatsProps> = (props) => {
  const { usage, activeRecovery, naturalRecovery } = props;

  const _usage = maybeToNumber(usage, 1);
  const _activeRecovery = maybeToNumber(activeRecovery, 1);
  const _naturalRecovery = maybeToNumber(naturalRecovery, 1);

  return (
    <CustomList subheader="Advanced: PP">
      <StatListItem
        mode="percent"
        label="PP cost"
        value={_usage}
        icon={getIcon(_usage, 1, true)}
      />
      <StatListItem
        mode="percent"
        label="Active PP recovery"
        value={_activeRecovery}
        icon={getIcon(_activeRecovery, 1)}
      />
      <StatListItem
        mode="percent"
        label="Natural PP recovery"
        value={_naturalRecovery}
        icon={getIcon(_naturalRecovery, 1)}
      />
    </CustomList>
  );
};

type OffensiveAdancedStatsProps = Partial<{
  floorPotency: number;
  damageUp: number;
  critChance: number;
  critDamage: number;
  pbGaugeRecovery: number;
}>;
const OffensiveAdvancedStats: FC<OffensiveAdancedStatsProps> = (
  props,
) => {
  const {
    damageUp,
    floorPotency,
    critChance,
    critDamage,
    pbGaugeRecovery,
  } = props;

  const _damageUp = maybeToNumber(damageUp, 1);
  const _floorPotency = maybeToNumber(floorPotency, 1);
  const _critChance = maybeToNumber(critChance, 1);
  const _critDamage = maybeToNumber(critDamage, 1);
  const _pbGaugeRecovery = maybeToNumber(pbGaugeRecovery, 1);

  return (
    <CustomList subheader="Advanced: Offensive ">
      <StatListItem
        mode="percent"
        label="Damage dealt"
        value={_damageUp}
        icon={getIcon(_damageUp, 1)}
      />
      <StatListItem
        mode="percent"
        label="Floor potency"
        value={_floorPotency - 1}
        icon={getIcon(_floorPotency, 1)}
      />
      <StatListItem
        mode="percent"
        label="Critical chance"
        value={_critChance - 1}
        icon={getIcon(_critChance, 1)}
      />
      <StatListItem
        mode="percent"
        label="Critical damage"
        value={_critDamage}
        icon={getIcon(_critDamage, 1)}
      />
      <StatListItem
        mode="percent"
        label="PB gauge recovery"
        value={_pbGaugeRecovery}
        icon={getIcon(_pbGaugeRecovery, 1)}
      />
    </CustomList>
  );
};

type DefensiveAdancedStatsProps = Partial<{
  healingUp: number;
  damageResist: number;
  ailmentDuration: number;
}>;
const DefensiveAdvancedStats: FC<DefensiveAdancedStatsProps> = (
  props,
) => {
  const { damageResist, healingUp, ailmentDuration } = props;

  const _damageResist = maybeToNumber(damageResist, 1);
  const _healingUp = maybeToNumber(healingUp, 1);
  const _ailmentDuration = maybeToNumber(ailmentDuration, 1);

  return (
    <CustomList subheader="Advanced: Defensive">
      <StatListItem
        mode="percent"
        label="Damage resistance"
        value={_damageResist}
        icon={getIcon(_damageResist, 1)}
      />
      <StatListItem
        mode="percent"
        label="Healing up"
        value={_healingUp}
        icon={getIcon(_healingUp, 1)}
      />
      <StatListItem
        mode="percent"
        label="Ailment effect duration"
        value={_ailmentDuration}
        icon={getIcon(_ailmentDuration, 1, true)}
      />
    </CustomList>
  );
};

type StatsOverviewProps = Partial<{
  [K in StatEnum]: number;
}>;
const StatsOverview: FC<StatsOverviewProps> = (props) => {
  const { breakpoints } = useTheme();

  const _envCold = maybeToNumber(props.envCold, 0);

  return (
    <Box>
      <Stack
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
        <CoreStatList
          bp={props.coreBP}
          hp={props.coreHP}
          pp={props.corePP}
          attack={props.coreAttack}
          defense={props.coreDefense}
        />
        <PotencyStatList
          melee={props.weaponMelee}
          ranged={props.weaponRanged}
          technique={props.weaponTechnique}
        />
        <AilmentStatList
          burn={props.ailBurn}
          freeze={props.ailFreeze}
          blind={props.ailBlind}
          panic={props.ailPanic}
          shock={props.ailShock}
          poison={props.ailPoison}
          physicalDown={props.ailPhyDown}
        />
        <CustomList subheader="Enviroment resistence">
          <StatListItem
            mode="percent"
            label="Harsh environment resistance"
            value={_envCold}
            icon={getIcon(_envCold, 0)}
          />
        </CustomList>
        <PPAdvancedStats
          usage={props.ppUsage}
          naturalRecovery={props.ppActiveRecovery}
          activeRecovery={props.ppNaturalRecovery}
        />
        <OffensiveAdvancedStats
          floorPotency={props.offFloor}
          damageUp={props.offDamageUp}
          critChance={props.offCritChance}
          critDamage={props.offCritDamage}
          pbGaugeRecovery={props.offPBRecovery}
        />
        <DefensiveAdvancedStats
          healingUp={props.defHealingUp}
          damageResist={props.defDamageResist}
          ailmentDuration={props.defAilmentDuration}
        />
      </Stack>
    </Box>
  );
};

export default StatsOverview;
