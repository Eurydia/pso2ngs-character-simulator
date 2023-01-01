import { StatEnum, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import { GroupEnumWeapon } from "../groupEnum";
import { weapon, Weapon } from "../weapon";

export const g_seven: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
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
    GroupEnumWeapon.R_SEVEN,
    potential,
    GROWTH_RATE,
    (_) => statObject(stat),
  );
};

// -----------------------
g_seven.push(
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
g_seven.push(
  makeWeaponSeven("Crystia Series", AssetPotentials.ABSORPTION_UNIT, {
    [StatEnum.CORE_ATTACK]: 473,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
g_seven.push(
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
g_seven.push(
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
g_seven.push(
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
g_seven.push(
  makeWeaponSeven("Kaizaar Series", AssetPotentials.TEMPERED_FORM, {
    [StatEnum.CORE_ATTACK]: 485,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
g_seven.push(
  makeWeaponSeven(
    "Obsidia Series",
    AssetPotentials.CORUSCATING_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 488,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);
