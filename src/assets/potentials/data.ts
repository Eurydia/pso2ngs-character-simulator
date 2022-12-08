import { StatEnum } from "../stat";
import potential from "./potential";

const makePotency = (
  potency_value: number,
): Partial<{ [K in StatEnum]: number }> => {
  return {
    [StatEnum.WEAPON_MELEE]: potency_value,
    [StatEnum.WEAPON_RANGED]: potency_value,
    [StatEnum.WEAPON_TECHNIQUE]: potency_value,
  };
};

export const RECYCLER_UNIT = potential("Recycler Unit", [
  makePotency(1.18),
  makePotency(1.2),
  makePotency(1.23),
  makePotency(1.24),
  makePotency(1.25),
]);

export const INDOMITABLE_UNIT = potential("Indomitable Unit", [
  {
    ...makePotency(1.18),
    [StatEnum.AIL_BLIND]: 1.1,
    [StatEnum.AIL_BURN]: 1.1,
    [StatEnum.AIL_FREEZE]: 1.1,
    [StatEnum.AIL_PANIC]: 1.1,
    [StatEnum.AIL_PHYDOWN]: 1.1,
    [StatEnum.AIL_POISON]: 1.1,
    [StatEnum.AIL_SHOCK]: 1.1,
  },
  {
    ...makePotency(1.2),
    [StatEnum.AIL_BLIND]: 1.1,
    [StatEnum.AIL_BURN]: 1.1,
    [StatEnum.AIL_FREEZE]: 1.1,
    [StatEnum.AIL_PANIC]: 1.1,
    [StatEnum.AIL_PHYDOWN]: 1.1,
    [StatEnum.AIL_POISON]: 1.1,
    [StatEnum.AIL_SHOCK]: 1.1,
  },
  {
    ...makePotency(1.23),
    [StatEnum.AIL_BLIND]: 1.1,
    [StatEnum.AIL_BURN]: 1.1,
    [StatEnum.AIL_FREEZE]: 1.1,
    [StatEnum.AIL_PANIC]: 1.1,
    [StatEnum.AIL_PHYDOWN]: 1.1,
    [StatEnum.AIL_POISON]: 1.1,
    [StatEnum.AIL_SHOCK]: 1.1,
  },
  {
    ...makePotency(1.24),
    [StatEnum.AIL_BLIND]: 1.2,
    [StatEnum.AIL_BURN]: 1.2,
    [StatEnum.AIL_FREEZE]: 1.2,
    [StatEnum.AIL_PANIC]: 1.2,
    [StatEnum.AIL_PHYDOWN]: 1.2,
    [StatEnum.AIL_POISON]: 1.2,
    [StatEnum.AIL_SHOCK]: 1.2,
  },
  {
    ...makePotency(1.25),
    [StatEnum.AIL_BLIND]: 1.4,
    [StatEnum.AIL_BURN]: 1.4,
    [StatEnum.AIL_FREEZE]: 1.4,
    [StatEnum.AIL_PANIC]: 1.4,
    [StatEnum.AIL_PHYDOWN]: 1.4,
    [StatEnum.AIL_POISON]: 1.4,
    [StatEnum.AIL_SHOCK]: 1.4,
  },
]);

export const DEFENSIVE_FORMATION = potential(
  "Defensive Formation",
  [
    { ...makePotency(1.17), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.19), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.22), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.22), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.18 },
    { ...makePotency(1.23), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.27 },
  ],
  [
    makePotency(1.17),
    makePotency(1.19),
    makePotency(1.22),
    makePotency(1.22),
    makePotency(1.23),
  ],
);

export const OFFENSIVE_FORMATION = potential(
  "Offensive Formation",
  [
    { ...makePotency(1.17), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.19), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.22), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.22), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.18 },
    { ...makePotency(1.23), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.27 },
  ],
  [
    makePotency(1.17),
    makePotency(1.19),
    makePotency(1.22),
    makePotency(1.22),
    makePotency(1.23),
  ],
);

export const VALOROUS_UNIT = potential("Valorous Unit", [
  makePotency(1.16),
  makePotency(1.18),
  makePotency(1.21),
  makePotency(1.21),
  makePotency(1.22),
]);

export const DYNAMO_UNIT = potential(
  "Dynamo Unit",
  [
    { ...makePotency(1.16), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.18), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.21), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.21), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.18 },
    { ...makePotency(1.22), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.25 },
  ],
  [
    makePotency(1.16),
    makePotency(1.18),
    makePotency(1.21),
    makePotency(1.21),
    makePotency(1.22),
  ],
);

export const MUSTERED_MIGHT_UNIT = potential(
  "Mustered Might Unit",
  [
    makePotency(1.2),
    makePotency(1.22),
    makePotency(1.25),
    makePotency(1.26),
    makePotency(1.3),
  ],
  [
    makePotency(1.15),
    makePotency(1.17),
    makePotency(1.2),
    makePotency(1.21),
    makePotency(1.22),
  ],
);

export const BASTION_UNIT = potential(
  "Bastion Unit",
  [
    { ...makePotency(1.18), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4 },
    { ...makePotency(1.2), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4 },
    { ...makePotency(1.23), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4 },
    { ...makePotency(1.24), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5 },
    { ...makePotency(1.25), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5 },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.23),
    makePotency(1.24),
    makePotency(1.25),
  ],
);

export const MEDITATION_UNIT = potential(
  "Meditation Unit",
  [
    {
      ...makePotency(1.18),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.1,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.1,
    },
    {
      ...makePotency(1.2),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.1,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.1,
    },
    {
      ...makePotency(1.23),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.1,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.1,
    },
    {
      ...makePotency(1.24),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.15,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.15,
    },
    {
      ...makePotency(1.25),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.2,
    },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.23),
    makePotency(1.24),
    makePotency(1.25),
  ],
);

export const BERSERK_UNIT = potential("Berserk Unit", [
  { ...makePotency(1.21), [StatEnum.ADV_DEF_DAMAGE_RES]: 0.9 },
  { ...makePotency(1.23), [StatEnum.ADV_DEF_DAMAGE_RES]: 0.9 },
  { ...makePotency(1.26), [StatEnum.ADV_DEF_DAMAGE_RES]: 0.9 },
  { ...makePotency(1.27), [StatEnum.ADV_DEF_DAMAGE_RES]: 0.92 },
  { ...makePotency(1.31), [StatEnum.ADV_DEF_DAMAGE_RES]: 0.95 },
]);

export const SOULSPRING_UNIT = potential(
  "Soulspring Unit",
  [
    { ...makePotency(1.2), [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2 },
    { ...makePotency(1.22), [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2 },
    { ...makePotency(1.25), [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2 },
    { ...makePotency(1.26), [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2 },
    { ...makePotency(1.27), [StatEnum.ADV_OFF_PB_RECOVERY]: 1.4 },
  ],
  [
    makePotency(1.2),
    makePotency(1.22),
    makePotency(1.25),
    makePotency(1.26),
    makePotency(1.27),
  ],
);

export const FORTRESS_UNIT = potential(
  "Fortress Unit",
  [
    { ...makePotency(1.17), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5 },
    { ...makePotency(1.19), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5 },
    { ...makePotency(1.22), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5 },
    { ...makePotency(1.23), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5 },
    { ...makePotency(1.24), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5 },
  ],
  [
    makePotency(1.17),
    makePotency(1.19),
    makePotency(1.22),
    makePotency(1.23),
    makePotency(1.24),
  ],
);

export const REINVIGORATING_UNIT = potential("Reinvigorating Unit", [
  makePotency(1.17),
  makePotency(1.19),
  makePotency(1.22),
  makePotency(1.23),
  makePotency(1.24),
]);

export const FOCUSED_UNIT = potential(
  "Focused Unit",
  [
    { ...makePotency(1.15), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.22 },
    { ...makePotency(1.17), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.22 },
    { ...makePotency(1.2), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.22 },
    { ...makePotency(1.21), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.22 },
    { ...makePotency(1.22), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.3 },
  ],
  [
    makePotency(1.15),
    makePotency(1.17),
    makePotency(1.2),
    makePotency(1.21),
    makePotency(1.22),
  ],
);

export const FIGHTING_SPIRIT_UNIT = potential(
  "Fighting Spirit Unit",
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.23),
    makePotency(1.24),
    makePotency(1.31),
  ],
  [
    makePotency(1.14),
    makePotency(1.16),
    makePotency(1.19),
    makePotency(1.2),
    makePotency(1.21),
  ],
);

export const VIGOROUS_UNIT = potential("Vigorous Unit", [
  {
    ...makePotency(1.21),
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.1,
    [StatEnum.ADV_DEF_HEALING]: 1.2,
  },
  {
    ...makePotency(1.2),
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.1,
    [StatEnum.ADV_DEF_HEALING]: 1.2,
  },
  {
    ...makePotency(1.23),
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.1,
    [StatEnum.ADV_DEF_HEALING]: 1.2,
  },
  {
    ...makePotency(1.24),
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.1,
    [StatEnum.ADV_DEF_HEALING]: 1.2,
  },
  {
    ...makePotency(1.31),
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.2,
    [StatEnum.ADV_DEF_HEALING]: 1.25,
  },
]);

export const EXPLOSIVE_UNIT = potential("Explosive Unit", [
  makePotency(1.15),
  makePotency(1.17),
  makePotency(1.2),
  makePotency(1.21),
  makePotency(1.22),
]);

export const HARMONIOUS_UNIT = potential(
  "Harmonious Unit",
  [
    { ...makePotency(1.12), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.25 },
    { ...makePotency(1.14), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.25 },
    { ...makePotency(1.17), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.25 },
    { ...makePotency(1.18), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.25 },
    { ...makePotency(1.19), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.3 },
  ],
  [
    { ...makePotency(1.12), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.14), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.17), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.18), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
    { ...makePotency(1.19), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.15 },
  ],
);

export const IMBUED_UNIT = potential(
  "Imbued Unit",
  [
    {
      ...makePotency(1.17),
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.23),
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.26),
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.27),
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.28),
      [StatEnum.ADV_PP_USAGE]: 0.85,
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.3,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
  ],
  [
    { ...makePotency(1.17), [StatEnum.ADV_PP_USAGE]: 0.9 },
    { ...makePotency(1.23), [StatEnum.ADV_PP_USAGE]: 0.9 },
    { ...makePotency(1.26), [StatEnum.ADV_PP_USAGE]: 0.9 },
    { ...makePotency(1.27), [StatEnum.ADV_PP_USAGE]: 0.9 },
    { ...makePotency(1.28), [StatEnum.ADV_PP_USAGE]: 0.85 },
  ],
);

export const VIRTUOSO_UNIT = potential(
  "Virtuoso Unit",
  [
    {
      ...makePotency(1.18),
      [StatEnum.ADV_DEF_HEALING]: 1.15,
      [StatEnum.ADV_PP_USAGE]: 1.15,
    },
    {
      ...makePotency(1.2),
      [StatEnum.ADV_DEF_HEALING]: 1.15,
      [StatEnum.ADV_PP_USAGE]: 1.15,
    },
    {
      ...makePotency(1.22),
      [StatEnum.ADV_DEF_HEALING]: 1.15,
      [StatEnum.ADV_PP_USAGE]: 1.15,
    },
    {
      ...makePotency(1.26),
      [StatEnum.ADV_DEF_HEALING]: 1.2,
      [StatEnum.ADV_PP_USAGE]: 1.2,
    },
    {
      ...makePotency(1.27),
      [StatEnum.ADV_DEF_HEALING]: 1.2,
      [StatEnum.ADV_PP_USAGE]: 1.2,
    },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.22),
    makePotency(1.26),
    makePotency(1.27),
  ],
);

export const UNASSAILABLE_UNIT = potential(
  "Unassailable Unit",
  [
    makePotency(1.15),
    makePotency(1.18),
    makePotency(1.21),
    makePotency(1.22),
    makePotency(1.23),
  ],
  [
    {
      ...makePotency(1.2),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5,
    },
    {
      ...makePotency(1.23),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5,
    },
    {
      ...makePotency(1.26),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5,
    },
    {
      ...makePotency(1.27),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5,
    },
    {
      ...makePotency(1.33),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.5,
    },
  ],
);

export const ELUSIVE_UNIT = potential(
  "Elusive Unit",
  [
    {
      ...makePotency(1.16),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.18),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.21),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.22),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.23),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2.5,
    },
  ],
  [
    makePotency(1.16),
    makePotency(1.18),
    makePotency(1.21),
    makePotency(1.22),
    makePotency(1.23),
  ],
);

export const TRAMPLE_UNIT = potential(
  "Trample Unit",
  [
    makePotency(1.21),
    makePotency(1.23),
    makePotency(1.26),
    makePotency(1.28),
    makePotency(1.31),
  ],
  [
    makePotency(1.15),
    makePotency(1.17),
    makePotency(1.2),
    makePotency(1.22),
    makePotency(1.23),
  ],
);

export const STACCATO_UNIT = potential(
  "Staccato Unit",
  [
    {
      ...makePotency(1.18),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.2),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.22),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.27),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.23),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.3,
    },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.22),
    makePotency(1.23),
    makePotency(1.24),
  ],
);

export const DESPERATION_UNIT = potential(
  "Desperation Unit",
  [
    {
      ...makePotency(1.12),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 1.3,
    },
    {
      ...makePotency(1.14),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 1.3,
    },
    {
      ...makePotency(1.17),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 1.3,
    },
    {
      ...makePotency(1.18),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 1.3,
    },
    {
      ...makePotency(1.19),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 1.3,
    },
  ],
  [
    makePotency(1.12),
    makePotency(1.14),
    makePotency(1.17),
    makePotency(1.18),
    makePotency(1.19),
  ],
);

export const REVOLUTIONARY_UNIT = potential(
  "Revolutionary Unit",
  [
    {
      ...makePotency(1.18),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.3,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
    {
      ...makePotency(1.2),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.3,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
    {
      ...makePotency(1.23),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.3,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
    {
      ...makePotency(1.24),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.3,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
    {
      ...makePotency(1.25),
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: 1.3,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.23),
    makePotency(1.24),
    makePotency(1.25),
  ],
);

export const ILLUSORY_UNIT = potential(
  "Illurosy Unit",
  [
    {
      ...makePotency(1.18),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.2),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.23),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.24),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2,
    },
    {
      ...makePotency(1.25),
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 2.5,
    },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.23),
    makePotency(1.24),
    makePotency(1.25),
  ],
);

export const IMPERVIOUS_UNIT = potential(
  "Impervious Unit",
  [
    {
      ...makePotency(1.19),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4,
    },
    {
      ...makePotency(1.21),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4,
    },
    {
      ...makePotency(1.24),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4,
    },
    {
      ...makePotency(1.25),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4,
    },
    {
      ...makePotency(1.26),
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4,
    },
  ],
  [
    makePotency(1.19),
    makePotency(1.21),
    makePotency(1.24),
    makePotency(1.25),
    makePotency(1.26),
  ],
);

export const PURSUIT_UNIT = potential("Pursuit Unit", [
  makePotency(1.12),
  makePotency(1.14),
  makePotency(1.17),
  makePotency(1.19),
]);

export const CITADEL_UNIT = potential(
  "Citadel Unit",
  [
    { ...makePotency(1.18), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4 },
    { ...makePotency(1.2), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4 },
    { ...makePotency(1.23), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4 },
    { ...makePotency(1.25), [StatEnum.ADV_DEF_DAMAGE_RES]: 1.4 },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.23),
    makePotency(1.25),
  ],
);

export const GYRATING_UNIT = potential(
  "Gyrating Unit",
  [
    { ...makePotency(1.18), [StatEnum.ADV_PP_USAGE]: 0.7 },
    { ...makePotency(1.2), [StatEnum.ADV_PP_USAGE]: 0.7 },
    { ...makePotency(1.23), [StatEnum.ADV_PP_USAGE]: 0.7 },
    { ...makePotency(1.25), [StatEnum.ADV_PP_USAGE]: 0.7 },
  ],
  [
    makePotency(1.18),
    makePotency(1.2),
    makePotency(1.23),
    makePotency(1.25),
  ],
);

export const TEMPERED_FORM = potential(
  "Tempered Form",
  [
    {
      ...makePotency(1.12),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.14),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.16),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2,
    },
    {
      ...makePotency(1.17),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
      [StatEnum.ADV_OFF_PB_RECOVERY]: 1.2,
    },
  ],
  [
    {
      ...makePotency(1.12),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
    },
    {
      ...makePotency(1.14),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
    },
    {
      ...makePotency(1.16),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
    },
    {
      ...makePotency(1.17),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_PP_USAGE]: 0.9,
    },
  ],
);

export const CORUSCATING_UNIT = potential(
  "Coruscating Unit",
  [
    {
      ...makePotency(1.12),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
    {
      ...makePotency(1.14),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
    {
      ...makePotency(1.17),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
    {
      ...makePotency(1.18),
      [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.2,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: 1.3,
    },
  ],
  [
    { ...makePotency(1.12), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1 },
    { ...makePotency(1.14), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1 },
    { ...makePotency(1.17), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1 },
    { ...makePotency(1.18), [StatEnum.ADV_OFF_CRIT_CHANCE]: 0.1 },
  ],
);

export const ABSORPTION_UNIT = potential("Absorption Unit", [
  makePotency(1.19),
  makePotency(1.21),
  makePotency(1.24),
  makePotency(1.25),
]);
