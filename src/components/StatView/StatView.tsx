import { FC } from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { StatEnum, StatObject } from "../../assets";

import Stat from "./Stat";
import StatItem from "./StatItem";
import { getIcon } from "./helper";

type CoreStatListProps = {
  bp: string | null;
  hp: string | null;
  pp: string | null;
  attack: string | null;
  defense: string | null;
};
const CoreStatList: FC<CoreStatListProps> = (props) => {
  const { bp, hp, pp, attack, defense } = props;

  return (
    <Stat subheader="Core">
      <StatItem label="BP" value={bp} icon={getIcon(bp)} />
      <StatItem label="HP" value={hp} icon={getIcon(hp)} />
      <StatItem label="PP" value={pp} icon={getIcon(pp)} />
      <StatItem
        label="Attack"
        value={attack}
        icon={getIcon(attack)}
      />
      <StatItem
        label="Defense"
        value={defense}
        icon={getIcon(defense)}
      />
    </Stat>
  );
};

type PotencyStatListProps = {
  melee: string | null;
  ranged: string | null;
  technique: string | null;
};
const PotencyStatList: FC<PotencyStatListProps> = (props) => {
  const { melee, ranged, technique } = props;

  return (
    <Stat subheader="Weapon up">
      <StatItem
        label="Melee potency"
        value={melee}
        icon={getIcon(melee)}
      />
      <StatItem
        label="Ranged potency"
        value={ranged}
        icon={getIcon(ranged)}
      />
      <StatItem
        label="Technique potency"
        value={technique}
        icon={getIcon(technique)}
      />
    </Stat>
  );
};

type AilmentStatListProps = {
  burn: string | null;
  freeze: string | null;
  shock: string | null;
  blind: string | null;
  panic: string | null;
  poison: string | null;
  physicalDown: string | null;
};
const AilmentStatList: FC<AilmentStatListProps> = (props) => {
  const { burn, freeze, panic, blind, shock, poison, physicalDown } =
    props;

  return (
    <Stat subheader="Ailment resistance">
      <StatItem
        label="Burn resistance"
        value={burn}
        icon={getIcon(burn)}
      />
      <StatItem
        label="Freeze resistance"
        value={freeze}
        icon={getIcon(freeze)}
      />
      <StatItem
        label="Shock resistance"
        value={shock}
        icon={getIcon(shock)}
      />
      <StatItem
        label="Blind resistance"
        value={blind}
        icon={getIcon(blind)}
      />
      <StatItem
        label="Panic resistance"
        value={panic}
        icon={getIcon(panic)}
      />
      <StatItem
        label="Poison resistance"
        value={poison}
        icon={getIcon(poison)}
      />
      <StatItem
        label="Physical down resistance"
        value={physicalDown}
        icon={getIcon(physicalDown)}
      />
    </Stat>
  );
};

type PPAdvancedStatsProps = {
  usage: string | null;
  naturalRecovery: string | null;
  activeRecovery: string | null;
};
const PPAdvancedStats: FC<PPAdvancedStatsProps> = (props) => {
  const { usage, activeRecovery, naturalRecovery } = props;

  return (
    <Stat subheader="Advanced: PP">
      <StatItem
        label="PP cost"
        value={usage}
        icon={getIcon(usage, true)}
      />
      <StatItem
        label="Active PP recovery"
        value={activeRecovery}
        icon={getIcon(activeRecovery)}
      />
      <StatItem
        label="Natural PP recovery"
        value={naturalRecovery}
        icon={getIcon(naturalRecovery)}
      />
    </Stat>
  );
};

type OffensiveAdancedStatsProps = {
  floorPotency: string | null;
  damageUp: string | null;
  critChance: string | null;
  critDamage: string | null;
  pbGaugeRecovery: string | null;
};
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

  return (
    <Stat subheader="Advanced: Offensive ">
      <StatItem
        label="Damage dealt"
        value={damageUp}
        icon={getIcon(damageUp)}
      />
      <StatItem
        label="Floor potency"
        value={floorPotency}
        icon={getIcon(floorPotency)}
      />
      <StatItem
        label="Critical chance"
        value={critChance}
        icon={getIcon(critChance)}
      />
      <StatItem
        label="Critical damage"
        value={critDamage}
        icon={getIcon(critDamage)}
      />
      <StatItem
        label="PB gauge recovery"
        value={pbGaugeRecovery}
        icon={getIcon(pbGaugeRecovery)}
      />
    </Stat>
  );
};

type DefensiveAdancedStatsProps = {
  healingUp: string | null;
  damageResist: string | null;
  ailmentDuration: string | null;
};
const DefensiveAdvancedStats: FC<DefensiveAdancedStatsProps> = (
  props,
) => {
  const { damageResist, healingUp, ailmentDuration } = props;
  return (
    <Stat subheader="Advanced: Defensive">
      <StatItem
        label="Damage resistance"
        value={damageResist}
        icon={getIcon(damageResist)}
      />
      <StatItem
        label="Healing up"
        value={healingUp}
        icon={getIcon(healingUp)}
      />
      <StatItem
        label="Ailment effect duration"
        value={ailmentDuration}
        icon={getIcon(ailmentDuration, true)}
      />
    </Stat>
  );
};

type StatViewProps = {
  title?: string;
  stat: StatObject;
};
const StatView: FC<StatViewProps> = (props) => {
  const { stat } = props;

  const _envCold = stat.getFormattedStat(StatEnum.HARSH_COLD);

  return (
    <Box>
      <Typography fontWeight="bold" fontSize="large">
        {props.title}
      </Typography>
      <CoreStatList
        bp={stat.getFormattedStat(StatEnum.CORE_BP)}
        hp={stat.getFormattedStat(StatEnum.CORE_HP)}
        pp={stat.getFormattedStat(StatEnum.CORE_PP)}
        attack={stat.getFormattedStat(StatEnum.CORE_ATTACK)}
        defense={stat.getFormattedStat(StatEnum.CORE_DEFENSE)}
      />
      <PotencyStatList
        melee={stat.getFormattedStat(StatEnum.WEAPON_MELEE)}
        ranged={stat.getFormattedStat(StatEnum.WEAPON_RANGED)}
        technique={stat.getFormattedStat(StatEnum.WEAPON_TECHNIQUE)}
      />
      <AilmentStatList
        burn={stat.getFormattedStat(StatEnum.AIL_BURN)}
        freeze={stat.getFormattedStat(StatEnum.AIL_FREEZE)}
        blind={stat.getFormattedStat(StatEnum.AIL_BLIND)}
        panic={stat.getFormattedStat(StatEnum.AIL_PANIC)}
        shock={stat.getFormattedStat(StatEnum.AIL_SHOCK)}
        poison={stat.getFormattedStat(StatEnum.AIL_POISON)}
        physicalDown={stat.getFormattedStat(StatEnum.AIL_PHYDOWN)}
      />
      <Stat subheader="Enviroment resistence">
        <StatItem
          label="Harsh environment resistance"
          value={_envCold}
          icon={getIcon(_envCold)}
        />
      </Stat>
      <PPAdvancedStats
        usage={stat.getFormattedStat(StatEnum.ADV_PP_USAGE)}
        naturalRecovery={stat.getFormattedStat(
          StatEnum.ADV_PP_NATURAL_RECOVERY,
        )}
        activeRecovery={stat.getFormattedStat(
          StatEnum.ADV_PP_ACTIVE_RECOVERY,
        )}
      />
      <OffensiveAdvancedStats
        floorPotency={stat.getFormattedStat(StatEnum.ADV_OFF_FLOOR)}
        damageUp={stat.getFormattedStat(StatEnum.ADV_OFF_DAMAGE)}
        critChance={stat.getFormattedStat(
          StatEnum.ADV_OFF_CRIT_CHANCE,
        )}
        critDamage={stat.getFormattedStat(
          StatEnum.ADV_OFF_CRIT_DAMAGE,
        )}
        pbGaugeRecovery={stat.getFormattedStat(
          StatEnum.ADV_OFF_PB_RECOVERY,
        )}
      />
      <DefensiveAdvancedStats
        healingUp={stat.getFormattedStat(StatEnum.ADV_DEF_HEALING)}
        damageResist={stat.getFormattedStat(
          StatEnum.ADV_DEF_DAMAGE_RES,
        )}
        ailmentDuration={stat.getFormattedStat(
          StatEnum.ADV_DEF_AILMENT_DURATION,
        )}
      />
    </Box>
  );
};

export default StatView;
