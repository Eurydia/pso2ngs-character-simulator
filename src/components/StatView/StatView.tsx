import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { StatEnum, StatEnumString, StatObject } from "../../assets";
import { Nullable } from "../../types";

import { CustomList } from "./CustomList";
import { CustomItem } from "./CustomItem";
import { getIcon } from "./helper";

type CoreGroupProps = Nullable<{
  bp: string;
  hp: string;
  pp: string;
  attack: string;
  defense: string;
}>;
const CoreGroup: FC<CoreGroupProps> = (props) => {
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

type PotencyGroupProps = Nullable<{
  melee: string;
  ranged: string;
  technique: string;
  weakpoint: string;
}>;
const PotencyGroup: FC<PotencyGroupProps> = (props) => {
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

type AilmentGroupProps = Nullable<{
  burn: string;
  freeze: string;
  shock: string;
  blind: string;
  panic: string;
  poison: string;
  physicalDown: string;
}>;
const AilmentGroup: FC<AilmentGroupProps> = (props) => {
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
        label={StatEnumString[StatEnum.AIL_DOWN]}
        value={physicalDown}
        icon={getIcon(physicalDown)}
      />
    </CustomList>
  );
};

type AdvancedPPGroupProps = Nullable<{
  usage: string;
  naturalRecovery: string;
  activeRecovery: string;
}>;
const AdvancedPPGroup: FC<AdvancedPPGroupProps> = (props) => {
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

type AdvancedOffensiveGroupProps = Nullable<{
  floorPotency: string;
  damageUp: string;
  critChance: string;
  critDamage: string;
  pbGaugeRecovery: string;
}>;
const AdvancedOffensiveGroup: FC<AdvancedOffensiveGroupProps> = (
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

type AdvancedDefensiveGroupProps = Nullable<{
  healingUp: string;
  damageResist: string;
  ailmentDuration: string;
}>;
const AdvancedDefensiveGroup: FC<AdvancedDefensiveGroupProps> = (
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

type EnvironmentGroupProps = Nullable<{
  harshEnvironment: string;
}>;
const EnvironmentGroup: FC<EnvironmentGroupProps> = (props) => {
  const { harshEnvironment } = props;
  return (
    <CustomList subheader="Enviroment resistence">
      <CustomItem
        label={StatEnumString[StatEnum.HARSH_COLD]}
        value={harshEnvironment}
        icon={getIcon(harshEnvironment)}
      />
    </CustomList>
  );
};

type StatViewProps = {
  stat: StatObject;
};
export const StatView: FC<StatViewProps> = (props) => {
  const { stat } = props;

  return (
    <Box>
      <CoreGroup
        bp={stat.getFormattedStat(StatEnum.CORE_BP)}
        hp={stat.getFormattedStat(StatEnum.CORE_HP)}
        pp={stat.getFormattedStat(StatEnum.CORE_PP)}
        attack={stat.getFormattedStat(StatEnum.CORE_ATTACK)}
        defense={stat.getFormattedStat(StatEnum.CORE_DEFENSE)}
      />
      <PotencyGroup
        melee={stat.getFormattedStat(StatEnum.WEAPON_MELEE)}
        ranged={stat.getFormattedStat(StatEnum.WEAPON_RANGED)}
        technique={stat.getFormattedStat(StatEnum.WEAPON_TECHNIQUE)}
        weakpoint={stat.getFormattedStat(StatEnum.WEAPON_WEAKPOINT)}
      />
      <AilmentGroup
        burn={stat.getFormattedStat(StatEnum.AIL_BURN)}
        freeze={stat.getFormattedStat(StatEnum.AIL_FREEZE)}
        blind={stat.getFormattedStat(StatEnum.AIL_BLIND)}
        panic={stat.getFormattedStat(StatEnum.AIL_PANIC)}
        shock={stat.getFormattedStat(StatEnum.AIL_SHOCK)}
        poison={stat.getFormattedStat(StatEnum.AIL_POISON)}
        physicalDown={stat.getFormattedStat(StatEnum.AIL_DOWN)}
      />
      <EnvironmentGroup
        harshEnvironment={stat.getFormattedStat(StatEnum.HARSH_COLD)}
      />
      <AdvancedPPGroup
        usage={stat.getFormattedStat(StatEnum.ADV_PP_USAGE)}
        naturalRecovery={stat.getFormattedStat(
          StatEnum.ADV_PP_NATURAL_RECOVERY,
        )}
        activeRecovery={stat.getFormattedStat(
          StatEnum.ADV_PP_ACTIVE_RECOVERY,
        )}
      />
      <AdvancedOffensiveGroup
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
      <AdvancedDefensiveGroup
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
