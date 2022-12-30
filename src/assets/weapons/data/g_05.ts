import { StatEnum } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 92],
  [60, 238],
];

const makeWeaponFive = (
  name: string,
  potential: Potential,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    GroupEnum.R_FIVE,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponFive("Quintel Series", AssetPotentials.FORTRESS_UNIT, {
    [StatEnum.CORE_ATTACK]: 277,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFive(
    "Gothica Series",
    AssetPotentials.REINVIGORATING_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 277,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponFive("Fivla Series", AssetPotentials.FOCUSED_UNIT, {
    [StatEnum.CORE_ATTACK]: 277,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFive(
    "Greaga Series",
    AssetPotentials.FIGHTING_SPIRIT_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 280,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponFive(
    "Kukuhroziat Series",
    AssetPotentials.UNASSAILABLE_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 280,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponFive(
    "Relik Vigorous Series",
    AssetPotentials.VIGOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 284,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponFive(
    "Relik Explosive Series",
    AssetPotentials.EXPLOSIVE_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 284,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponFive(
    "Relik Harmonious Series",
    AssetPotentials.HARMONIOUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 284,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponFive("Relik Imbued Series", AssetPotentials.IMBUED_UNIT, {
    [StatEnum.CORE_ATTACK]: 284,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFive("Cinquem Series", AssetPotentials.VIRTUOSO_UNIT, {
    [StatEnum.CORE_ATTACK]: 293,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFive("Tempesta Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_DARK_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_FIRE_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_ICE_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_LIGHTNING_WEAK]: 1.15,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_LIGHT_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_WIND_WEAK]: 1.1,
  }),
);

// -----------------------
data.push(
  makeWeaponFive("Lumiere Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_DARK_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_FIRE_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_ICE_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_LIGHTNING_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_LIGHT_WEAK]: 1.15,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_WIND_WEAK]: 1.1,
  }),
);

// -----------------------
data.push(
  makeWeaponFive("Obscura Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_DARK_WEAK]: 1.15,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_FIRE_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_ICE_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_LIGHTNING_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_LIGHT_WEAK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_AGAINST_WIND_WEAK]: 1.1,
  }),
);

export default data;
