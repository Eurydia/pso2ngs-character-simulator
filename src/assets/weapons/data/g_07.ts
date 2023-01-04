import { StatEnum, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";

export const G_SEVEN: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 30],
  [20, 60],
  [30, 90],
  [40, 136],
  [50, 186],
];

const makeWeaponSeven = (
  name: string,
  potential: Potential,
  stat: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_SEVEN,
    potential,
    GROWTH_DATA,
    (_) => {
      return statObject(stat);
    },
  );
};

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Kaizaar Mk. I Series",
    AssetPotentials.TEMPERED_FORM,
    {
      [StatEnum.CORE_ATTACK]: 465,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven("Crystia Series", AssetPotentials.ABSORPTION_UNIT, {
    [StatEnum.CORE_ATTACK]: 473,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Pursuit Series",
    AssetPotentials.PURSUIT_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 490,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Citadel Series",
    AssetPotentials.CITADEL_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 490,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Gyrating Series",
    AssetPotentials.GYRATING_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 490,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven("Kaizaar Series", AssetPotentials.TEMPERED_FORM, {
    [StatEnum.CORE_ATTACK]: 485,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Obsidia Series",
    AssetPotentials.CORUSCATING_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 488,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);
