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
import { getIcon, toAdd, toPercent } from "./helper";

interface StatListItemProps {
  mode: "add" | "percent";
  value: number;
  label: ReactNode;
  icon?: ReactNode;
}
const StatListItem: FC<StatListItemProps> = (props) => {
  const parsed_value =
    props.mode === "add"
      ? toAdd(props.value)
      : toPercent(props.value);

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

interface CoreStatListProps {
  bp: number;
  hp: number;
  pp: number;
  attack: number;
  defense: number;
}
const CoreStatList: FC<CoreStatListProps> = (props) => {
  const { bp, hp, pp, attack, defense } = props;

  const bp_icon = getIcon(bp, 0);
  const hp_icon = getIcon(hp, 0);
  const pp_icon = getIcon(pp, 0);
  const atk_icon = getIcon(attack, 0);
  const def_icon = getIcon(defense, 0);

  return (
    <CustomList subheader="Core">
      <StatListItem label="BP" value={bp} mode="add" icon={bp_icon} />
      <StatListItem label="HP" value={hp} mode="add" icon={hp_icon} />
      <StatListItem label="PP" value={pp} mode="add" icon={pp_icon} />
      <StatListItem
        label="Attack"
        value={attack}
        icon={atk_icon}
        mode="add"
      />
      <StatListItem
        label="Defense"
        value={defense}
        icon={def_icon}
        mode="add"
      />
    </CustomList>
  );
};

interface PotencyStatListProps {
  melee: number;
  ranged: number;
  technique: number;
}
const PotencyStatList: FC<PotencyStatListProps> = (props) => {
  const { melee, ranged, technique } = props;

  const mel_icon = getIcon(melee, 1);
  const rng_icon = getIcon(ranged, 1);
  const tec_icon = getIcon(technique, 1);

  return (
    <CustomList subheader="Weapon up">
      <StatListItem
        label="Melee potency"
        value={melee - 1}
        icon={mel_icon}
        mode="percent"
      />
      <StatListItem
        label="Ranged potency"
        value={ranged - 1}
        icon={rng_icon}
        mode="percent"
      />
      <StatListItem
        label="Technique potency"
        value={technique - 1}
        icon={tec_icon}
        mode="percent"
      />
    </CustomList>
  );
};

interface AilmentStatListProps {
  burn: number;
  freeze: number;
  shock: number;
  blind: number;
  panic: number;
  poison: number;
  physicalDown: number;
}
const AilmentStatList: FC<AilmentStatListProps> = (props) => {
  const { burn, freeze, panic, blind, shock, poison, physicalDown } =
    props;

  const burn_icon = getIcon(burn, 1);
  const freeze_icon = getIcon(freeze, 1);
  const shock_icon = getIcon(shock, 1);
  const blind_icon = getIcon(blind, 1);
  const poison_icon = getIcon(poison, 1);
  const panic_icon = getIcon(panic, 1);
  const phydown_icon = getIcon(physicalDown, 1);

  return (
    <CustomList subheader="Ailment resistance">
      <StatListItem
        label="Burn resistance"
        value={burn}
        icon={burn_icon}
        mode="percent"
      />
      <StatListItem
        label="Freeze resistance"
        value={freeze}
        icon={freeze_icon}
        mode="percent"
      />
      <StatListItem
        label="Shock resistance"
        value={shock}
        icon={shock_icon}
        mode="percent"
      />
      <StatListItem
        label="Blind resistance"
        value={blind}
        icon={blind_icon}
        mode="percent"
      />
      <StatListItem
        label="Panic resistance"
        value={panic}
        icon={panic_icon}
        mode="percent"
      />
      <StatListItem
        label="Poison resistance"
        value={poison}
        icon={poison_icon}
        mode="percent"
      />
      <StatListItem
        label="Physical down resistance"
        value={physicalDown}
        icon={phydown_icon}
        mode="percent"
      />
    </CustomList>
  );
};

interface PPAdvancedStatsProps {
  usage: number;
  naturalRecovery: number;
  activeRecovery: number;
}
const PPAdvancedStats: FC<PPAdvancedStatsProps> = (props) => {
  const { usage, activeRecovery, naturalRecovery } = props;

  const usage_icon = getIcon(usage, 1, true);
  const active_icon = getIcon(activeRecovery, 1);
  const natural_icon = getIcon(naturalRecovery, 1);

  return (
    <CustomList subheader="Advanced: PP">
      <StatListItem
        label="PP cost"
        value={usage}
        icon={usage_icon}
        mode="percent"
      />
      <StatListItem
        label="Active PP recovery"
        value={activeRecovery}
        icon={active_icon}
        mode="percent"
      />
      <StatListItem
        label="Natural PP recovery"
        value={naturalRecovery}
        icon={natural_icon}
        mode="percent"
      />
    </CustomList>
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
  const {
    damageUp,
    floorPotency,
    critChance,
    critDamage,
    pbGaugeRecovery,
  } = props;

  const damage_icon = getIcon(damageUp, 1);
  const floor_icon = getIcon(floorPotency, 1);
  const crit_chance_icon = getIcon(critChance, 1);
  const crit_damage_icon = getIcon(critDamage, 1);
  const pb_gauge_icon = getIcon(pbGaugeRecovery, 1);

  return (
    <CustomList subheader="Advanced: Offensive ">
      <StatListItem
        label="Damage dealt"
        value={damageUp}
        icon={damage_icon}
        mode="percent"
      />
      <StatListItem
        label="Floor potency"
        value={floorPotency - 1}
        icon={floor_icon}
        mode="percent"
      />
      <StatListItem
        label="Critical chance"
        value={critChance - 1}
        icon={crit_chance_icon}
        mode="percent"
      />
      <StatListItem
        label="Critical damage"
        value={critDamage}
        icon={crit_damage_icon}
        mode="percent"
      />
      <StatListItem
        label="PB gauge recovery"
        value={pbGaugeRecovery}
        icon={pb_gauge_icon}
        mode="percent"
      />
    </CustomList>
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
  const { damageResist, healingUp, ailmentDuration } = props;

  const dmg_resist_icon = getIcon(damageResist, 1);
  const healing_up__icon = getIcon(healingUp, 1);
  const ailment_duration_icon = getIcon(ailmentDuration, 1, true);

  return (
    <CustomList subheader="Advanced: Defensive">
      <StatListItem
        label="Damage resistance"
        value={damageResist}
        icon={dmg_resist_icon}
        mode="percent"
      />
      <StatListItem
        label="Healing up"
        value={healingUp}
        icon={healing_up__icon}
        mode="percent"
      />
      <StatListItem
        label="Ailment effect duration"
        value={ailmentDuration}
        icon={ailment_duration_icon}
        mode="percent"
      />
    </CustomList>
  );
};

interface CharacterStatsProps {}
const CharacterStats: FC<CharacterStatsProps> = () => {
  const { breakpoints } = useTheme();
  return (
    <Box>
      <Stack
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
          width={{ md: 0.5, xs: 1 }}
          divider={<Divider flexItem />}
        >
          <CoreStatList
            bp={9000}
            hp={9999}
            pp={9999}
            attack={9999}
            defense={9999}
          />
          <PotencyStatList
            melee={1.25555}
            ranged={1.2555}
            technique={1.255}
          />
          <AilmentStatList
            burn={0.5}
            freeze={0.5}
            blind={1.5}
            panic={0.5}
            shock={0.5}
            poison={0.5}
            physicalDown={0.5}
          />
          <CustomList subheader="Other">
            <StatListItem
              label="Harsh environment resistance"
              value={0}
              icon={getIcon(0, 0)}
              mode="percent"
            />
          </CustomList>
        </Stack>
        <Stack
          width={{ md: 0.5, xs: 1 }}
          divider={<Divider flexItem />}
        >
          <PPAdvancedStats
            usage={0.85}
            naturalRecovery={3}
            activeRecovery={3}
          />
          <OffensiveAdvancedStats
            floorPotency={1.8}
            damageUp={1.05}
            critChance={1.1}
            critDamage={1.5}
            pbGaugeRecovery={2}
          />
          <DefensiveAdvancedStats
            healingUp={3}
            damageResist={1.45}
            ailmentDuration={2}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CharacterStats;
