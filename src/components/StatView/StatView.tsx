import { FC } from "react";
import { Box, Stack } from "@mui/material";

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

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Core">
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

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Weapon up">
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

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Ailment resistance">
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

type AdvHPGroupProps = Nullable<{
  boost: string;
}>;
const AdvHPGroup: FC<AdvHPGroupProps> = (props) => {
  const { boost } = props;

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Advanced: HP">
      <CustomItem
        label={StatEnumString[StatEnum.ADV_HP_BOOST]}
        value={boost}
        icon={getIcon(boost)}
      />
    </CustomList>
  );
};

type AdvPPGroupProps = Nullable<{
  usage: string;
  naturalRecovery: string;
  activeRecovery: string;
}>;
const AdvPPGroup: FC<AdvPPGroupProps> = (props) => {
  const { usage, activeRecovery, naturalRecovery } = props;

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Advanced: PP">
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

type AdvOffensiveGroupProps = Nullable<{
  floorPotency: string;
  damageUp: string;
  critChance: string;
  critDamage: string;
  pbRecovery: string;
}>;
const AdvOffensiveGroup: FC<AdvOffensiveGroupProps> = (props) => {
  const {
    damageUp,
    floorPotency,
    critChance,
    critDamage,
    pbRecovery,
  } = props;

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Advanced: Offensive">
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
        value={pbRecovery}
        icon={getIcon(pbRecovery)}
      />
    </CustomList>
  );
};

type AdvDefensiveGroupProps = Nullable<{
  healingUp: string;
  damageResist: string;
  ailmentDuration: string;
}>;
const AdvDefensiveGroup: FC<AdvDefensiveGroupProps> = (props) => {
  const { damageResist, healingUp, ailmentDuration } = props;

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Advanced: Defensive">
      <CustomItem
        label={StatEnumString[StatEnum.ADV_DEF_DAMAGE_RES]}
        value={damageResist}
        icon={getIcon(damageResist)}
      />
      <CustomItem
        label={StatEnumString[StatEnum.ADV_DEF_HEALING_UP]}
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

  const hidden = Object.values(props).every((value) => {
    return value === null;
  });

  return (
    <CustomList hidden={hidden} subheader="Enviroment resistence">
      <CustomItem
        label={StatEnumString[StatEnum.HARSH_COLD]}
        value={harshEnvironment}
        icon={getIcon(harshEnvironment)}
      />
    </CustomList>
  );
};

type StatViewProps = {
  maxHeight: string;
  stat: StatObject;
};
export const StatView: FC<StatViewProps> = (props) => {
  const { stat, maxHeight } = props;

  return (
    <Box>
      <Stack spacing={1} maxHeight={maxHeight} overflow="auto">
        <CoreGroup
          bp={StatObject.format(stat, StatEnum.CORE_BP)}
          hp={StatObject.format(stat, StatEnum.CORE_HP)}
          pp={StatObject.format(stat, StatEnum.CORE_PP)}
          attack={StatObject.format(stat, StatEnum.CORE_ATTACK)}
          defense={StatObject.format(stat, StatEnum.CORE_DEFENSE)}
        />
        <PotencyGroup
          melee={StatObject.format(stat, StatEnum.WEAPON_MELEE)}
          ranged={StatObject.format(stat, StatEnum.WEAPON_RANGED)}
          technique={StatObject.format(
            stat,
            StatEnum.WEAPON_TECHNIQUE,
          )}
          weakpoint={StatObject.format(
            stat,
            StatEnum.WEAPON_WEAKPOINT,
          )}
        />
        <AilmentGroup
          burn={StatObject.format(stat, StatEnum.AIL_BURN)}
          freeze={StatObject.format(stat, StatEnum.AIL_FREEZE)}
          blind={StatObject.format(stat, StatEnum.AIL_BLIND)}
          panic={StatObject.format(stat, StatEnum.AIL_PANIC)}
          shock={StatObject.format(stat, StatEnum.AIL_SHOCK)}
          poison={StatObject.format(stat, StatEnum.AIL_POISON)}
          physicalDown={StatObject.format(stat, StatEnum.AIL_DOWN)}
        />
        <EnvironmentGroup
          harshEnvironment={StatObject.format(
            stat,
            StatEnum.HARSH_COLD,
          )}
        />
        <AdvHPGroup
          boost={StatObject.format(stat, StatEnum.ADV_HP_BOOST)}
        />
        <AdvPPGroup
          usage={StatObject.format(stat, StatEnum.ADV_PP_USAGE)}
          naturalRecovery={StatObject.format(
            stat,
            StatEnum.ADV_PP_NATURAL_RECOVERY,
          )}
          activeRecovery={StatObject.format(
            stat,
            StatEnum.ADV_PP_ACTIVE_RECOVERY,
          )}
        />
        <AdvOffensiveGroup
          floorPotency={StatObject.format(
            stat,
            StatEnum.ADV_OFF_FLOOR,
          )}
          damageUp={StatObject.format(
            stat,
            StatEnum.ADV_OFF_DAMAGE_UP,
          )}
          critChance={StatObject.format(
            stat,
            StatEnum.ADV_OFF_CRIT_CHANCE,
          )}
          critDamage={StatObject.format(
            stat,
            StatEnum.ADV_OFF_CRIT_DAMAGE,
          )}
          pbRecovery={StatObject.format(
            stat,
            StatEnum.ADV_OFF_PB_RECOVERY,
          )}
        />
        <AdvDefensiveGroup
          healingUp={StatObject.format(
            stat,
            StatEnum.ADV_DEF_HEALING_UP,
          )}
          damageResist={StatObject.format(
            stat,
            StatEnum.ADV_DEF_DAMAGE_RES,
          )}
          ailmentDuration={StatObject.format(
            stat,
            StatEnum.ADV_DEF_AILMENT_DURATION,
          )}
        />
      </Stack>
    </Box>
  );
};
