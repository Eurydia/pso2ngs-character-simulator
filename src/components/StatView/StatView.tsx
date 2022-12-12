import { FC } from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { StatObject } from "../../assets";

import StatList from "./List";
import StatListItem from "./ListItem";
import { getIcon } from "./helper";

type CoreStatListProps = {
  bp: number;
  hp: number;
  pp: number;
  attack: number;
  defense: number;
};
const CoreStatList: FC<CoreStatListProps> = (props) => {
  const { bp, hp, pp, attack, defense } = props;

  return (
    <StatList subheader="Core">
      <StatListItem label="BP" value={bp} icon={getIcon(bp, 0)} />
      <StatListItem label="HP" value={hp} icon={getIcon(hp, 0)} />
      <StatListItem label="PP" value={pp} icon={getIcon(pp, 0)} />
      <StatListItem
        label="Attack"
        value={attack}
        icon={getIcon(attack, 0)}
      />
      <StatListItem
        label="Defense"
        value={defense}
        icon={getIcon(defense, 0)}
      />
    </StatList>
  );
};

type PotencyStatListProps = {
  melee: number;
  ranged: number;
  technique: number;
};
const PotencyStatList: FC<PotencyStatListProps> = (props) => {
  const { melee, ranged, technique } = props;

  return (
    <StatList subheader="Weapon up">
      <StatListItem
        mode="percent"
        label="Melee potency"
        value={melee}
        icon={getIcon(melee, 1)}
      />
      <StatListItem
        mode="percent"
        label="Ranged potency"
        value={ranged}
        icon={getIcon(ranged, 1)}
      />
      <StatListItem
        mode="percent"
        label="Technique potency"
        value={technique}
        icon={getIcon(technique, 1)}
      />
    </StatList>
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

  const _burn = maybeUndefToNumber(burn, 1);
  const _freeze = maybeUndefToNumber(freeze, 1);
  const _panic = maybeUndefToNumber(panic, 1);
  const _blind = maybeUndefToNumber(blind, 1);
  const _shock = maybeUndefToNumber(shock, 1);
  const _poison = maybeUndefToNumber(poison, 1);
  const _physicalDown = maybeUndefToNumber(physicalDown, 1);

  return (
    <StatList subheader="Ailment resistance">
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
    </StatList>
  );
};

type PPAdvancedStatsProps = Partial<{
  usage: number;
  naturalRecovery: number;
  activeRecovery: number;
}>;
const PPAdvancedStats: FC<PPAdvancedStatsProps> = (props) => {
  const { usage, activeRecovery, naturalRecovery } = props;

  const _usage = maybeUndefToNumber(usage, 1);
  const _activeRecovery = maybeUndefToNumber(activeRecovery, 1);
  const _naturalRecovery = maybeUndefToNumber(naturalRecovery, 1);

  return (
    <StatList subheader="Advanced: PP">
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
    </StatList>
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

  const _damageUp = maybeUndefToNumber(damageUp, 1);
  const _floorPotency = maybeUndefToNumber(floorPotency, 1);
  const _critChance = maybeUndefToNumber(critChance, 1);
  const _critDamage = maybeUndefToNumber(critDamage, 1);
  const _pbGaugeRecovery = maybeUndefToNumber(pbGaugeRecovery, 1);

  return (
    <StatList subheader="Advanced: Offensive ">
      <StatListItem
        mode="percent"
        label="Damage dealt"
        value={_damageUp}
        icon={getIcon(_damageUp, 1)}
      />
      <StatListItem
        mode="percent"
        label="Floor potency"
        value={_floorPotency}
        icon={getIcon(_floorPotency, 1)}
      />
      <StatListItem
        mode="percent"
        label="Critical chance"
        value={_critChance}
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
    </StatList>
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

  const _damageResist = maybeUndefToNumber(damageResist, 1);
  const _healingUp = maybeUndefToNumber(healingUp, 1);
  const _ailmentDuration = maybeUndefToNumber(ailmentDuration, 1);

  return (
    <StatList subheader="Advanced: Defensive">
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
    </StatList>
  );
};

const CustomDivider = () => {
  const { breakpoints } = useTheme();

  return (
    <Divider
      flexItem
      orientation={
        useMediaQuery(breakpoints.down("sm"))
          ? "horizontal"
          : "vertical"
      }
    />
  );
};

type StatViewProps = {
  stat: StatObject;
};
const StatView: FC<StatViewProps> = (props) => {
  const _envCold = maybeUndefToNumber(props.envCold, 0);

  return (
    <Box>
      <Stack divider={<CustomDivider />}>
        <Typography fontWeight="bold" fontSize="large">
          Stat View
        </Typography>
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
        <StatList subheader="Enviroment resistence">
          <StatListItem
            mode="percent"
            label="Harsh environment resistance"
            value={_envCold + 1}
            icon={getIcon(_envCold, 0)}
          />
        </StatList>
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

export default StatView;
