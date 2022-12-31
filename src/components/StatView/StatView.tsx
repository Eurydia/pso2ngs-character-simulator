import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { StatEnum, StatEnumString, StatObject } from "../../assets";

import CustomList from "./CustomList";
import CustomItem from "./CustomItem";
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
    <CustomList subheader="Core">
      <CustomItem
        label={StatEnumString[StatEnum.CORE_BP]}
        value={bp}
        icon={getIcon(bp)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.CORE_HP]}
        value={hp}
        icon={getIcon(hp)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.CORE_PP]}
        value={pp}
        icon={getIcon(pp)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.CORE_ATTACK]}
        value={attack}
        icon={getIcon(attack)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.CORE_DEFENSE]}
        value={defense}
        icon={getIcon(defense)}
      />
    </CustomList>
  );
};

type PotencyStatListProps = {
  melee: string | null;
  ranged: string | null;
  technique: string | null;
  weakpoint: string | null;
};
const PotencyStatList: FC<PotencyStatListProps> = (props) => {
  const { melee, ranged, technique, weakpoint } = props;

  return (
    <CustomList subheader="Weapon up">
      <CustomItem
        label={StatEnumString[StatEnum.WEAPON_MELEE]}
        value={melee}
        icon={getIcon(melee)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.WEAPON_RANGED]}
        value={ranged}
        icon={getIcon(ranged)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.WEAPON_TECHNIQUE]}
        value={technique}
        icon={getIcon(technique)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.WEAPON_WEAKPOINT]}
        value={weakpoint}
        icon={getIcon(weakpoint)}
      />
    </CustomList>
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
    <CustomList subheader="Ailment resistance">
      <CustomItem
        label={StatEnumString[StatEnum.AIL_BURN]}
        value={burn}
        icon={getIcon(burn)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.AIL_FREEZE]}
        value={freeze}
        icon={getIcon(freeze)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.AIL_SHOCK]}
        value={shock}
        icon={getIcon(shock)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.AIL_BLIND]}
        value={blind}
        icon={getIcon(blind)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.AIL_PANIC]}
        value={panic}
        icon={getIcon(panic)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.AIL_POISON]}
        value={poison}
        icon={getIcon(poison)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.AIL_PHYDOWN]}
        value={physicalDown}
        icon={getIcon(physicalDown)}
      />
    </CustomList>
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
    <CustomList subheader="Advanced: PP">
      <CustomItem
        label={StatEnumString[StatEnum.ADV_PP_USAGE]}
        value={usage}
        icon={getIcon(usage, true)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_PP_ACTIVE_RECOVERY]}
        value={activeRecovery}
        icon={getIcon(activeRecovery)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_PP_NATURAL_RECOVERY]}
        value={naturalRecovery}
        icon={getIcon(naturalRecovery)}
      />
    </CustomList>
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
    <CustomList subheader="Advanced: Offensive">
      <CustomItem
        label={StatEnumString[StatEnum.ADV_OFF_FLOOR]}
        value={floorPotency}
        icon={getIcon(floorPotency)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_OFF_DAMAGE_UP]}
        value={damageUp}
        icon={getIcon(damageUp)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_OFF_CRIT_CHANCE]}
        value={critChance}
        icon={getIcon(critChance)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_OFF_CRIT_DAMAGE]}
        value={critDamage}
        icon={getIcon(critDamage)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_OFF_PB_RECOVERY]}
        value={pbGaugeRecovery}
        icon={getIcon(pbGaugeRecovery)}
      />
    </CustomList>
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
    <CustomList subheader="Advanced: Defensive">
      <CustomItem
        label={StatEnumString[StatEnum.ADV_DEF_DAMAGE_RES]}
        value={damageResist}
        icon={getIcon(damageResist)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_DEF_HEALING]}
        value={healingUp}
        icon={getIcon(healingUp)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_DEF_AILMENT_DURATION]}
        value={ailmentDuration}
        icon={getIcon(ailmentDuration, true)}
      />
    </CustomList>
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
        weakpoint={stat.getFormattedStat(StatEnum.WEAPON_WEAKPOINT)}
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
      <CustomList subheader="Enviroment resistence">
        <CustomItem
          label={StatEnumString[StatEnum.HARSH_COLD]}
          value={_envCold}
          icon={getIcon(_envCold)}
        />
      </CustomList>
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
        damageUp={stat.getFormattedStat(StatEnum.ADV_OFF_DAMAGE_UP)}
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
