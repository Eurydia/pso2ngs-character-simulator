import { FC } from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { StatEnum, StatObject } from "../../assets";

import StatList from "./List";
import StatListItem from "./ListItem";
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
    <StatList subheader="Core">
      <StatListItem label="BP" value={bp} icon={getIcon(bp)} />
      <StatListItem label="HP" value={hp} icon={getIcon(hp)} />
      <StatListItem label="PP" value={pp} icon={getIcon(pp)} />
      <StatListItem
        label="Attack"
        value={attack}
        icon={getIcon(attack)}
      />
      <StatListItem
        label="Defense"
        value={defense}
        icon={getIcon(defense)}
      />
    </StatList>
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
    <StatList subheader="Weapon up">
      <StatListItem
        label="Melee potency"
        value={melee}
        icon={getIcon(melee)}
      />
      <StatListItem
        label="Ranged potency"
        value={ranged}
        icon={getIcon(ranged)}
      />
      <StatListItem
        label="Technique potency"
        value={technique}
        icon={getIcon(technique)}
      />
    </StatList>
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
    <StatList subheader="Ailment resistance">
      <StatListItem
        label="Burn resistance"
        value={burn}
        icon={getIcon(burn)}
      />
      <StatListItem
        label="Freeze resistance"
        value={freeze}
        icon={getIcon(freeze)}
      />
      <StatListItem
        label="Shock resistance"
        value={shock}
        icon={getIcon(shock)}
      />
      <StatListItem
        label="Blind resistance"
        value={blind}
        icon={getIcon(blind)}
      />
      <StatListItem
        label="Panic resistance"
        value={panic}
        icon={getIcon(panic)}
      />
      <StatListItem
        label="Poison resistance"
        value={poison}
        icon={getIcon(poison)}
      />
      <StatListItem
        label="Physical down resistance"
        value={physicalDown}
        icon={getIcon(physicalDown)}
      />
    </StatList>
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
    <StatList subheader="Advanced: PP">
      <StatListItem
        label="PP cost"
        value={usage}
        icon={getIcon(usage, true)}
      />
      <StatListItem
        label="Active PP recovery"
        value={activeRecovery}
        icon={getIcon(activeRecovery)}
      />
      <StatListItem
        label="Natural PP recovery"
        value={naturalRecovery}
        icon={getIcon(naturalRecovery)}
      />
    </StatList>
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
    <StatList subheader="Advanced: Offensive ">
      <StatListItem
        label="Damage dealt"
        value={damageUp}
        icon={getIcon(damageUp)}
      />
      <StatListItem
        label="Floor potency"
        value={floorPotency}
        icon={getIcon(floorPotency)}
      />
      <StatListItem
        label="Critical chance"
        value={critChance}
        icon={getIcon(critChance)}
      />
      <StatListItem
        label="Critical damage"
        value={critDamage}
        icon={getIcon(critDamage)}
      />
      <StatListItem
        label="PB gauge recovery"
        value={pbGaugeRecovery}
        icon={getIcon(pbGaugeRecovery)}
      />
    </StatList>
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
    <StatList subheader="Advanced: Defensive">
      <StatListItem
        label="Damage resistance"
        value={damageResist}
        icon={getIcon(damageResist)}
      />
      <StatListItem
        label="Healing up"
        value={healingUp}
        icon={getIcon(healingUp)}
      />
      <StatListItem
        label="Ailment effect duration"
        value={ailmentDuration}
        icon={getIcon(ailmentDuration, true)}
      />
    </StatList>
  );
};

type StatViewProps = {
  disablePadding?: boolean;
  title?: string;
  stat: StatObject;
};
const StatView: FC<StatViewProps> = (props) => {
  const { stat, disablePadding } = props;

  let padding: number = 4;
  if (disablePadding) {
    padding = 0;
  }

  const _envCold = stat.getFormattedStat(StatEnum.HARSH_COLD);

  return (
    <Box padding={padding} borderColor="red">
      <Stack>
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
        <StatList subheader="Enviroment resistence">
          <StatListItem
            label="Harsh environment resistance"
            value={_envCold}
            icon={getIcon(_envCold)}
          />
        </StatList>
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
      </Stack>
    </Box>
  );
};

export default StatView;
