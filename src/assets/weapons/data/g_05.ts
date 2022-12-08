import { StatEnum } from "../../stat";
import {
  AssetPotentials,
  WeaponPotential,
} from "../../weaponPotentials";
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

const makeWeaponRFive = (
  name: string,
  potential: WeaponPotential,
  stats: Partial<{ [K in StatEnum]: number }>,
  inactive: boolean = false,
): Weapon => {
  let _name = name;
  if (inactive) {
    _name = `${name} (Inactive)`;
  }
  return weapon(
    _name,
    GroupEnum.R_FIVE,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRFive("Quintel Series", AssetPotentials.FORTRESS_UNIT, {
    [StatEnum.CORE_ATTACK]: 277,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive(
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
  makeWeaponRFive("Fivla Series", AssetPotentials.FOCUSED_UNIT, {
    [StatEnum.CORE_ATTACK]: 277,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive(
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
  makeWeaponRFive(
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
  makeWeaponRFive(
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
  makeWeaponRFive(
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
  makeWeaponRFive(
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
  makeWeaponRFive(
    "Relik Imbued Series",
    AssetPotentials.IMBUED_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 284,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRFive("Cinquem Series", AssetPotentials.VIRTUOSO_UNIT, {
    [StatEnum.CORE_ATTACK]: 293,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Tempesta Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive(
    "Tempesta Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 263,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
    true,
  ),
);

// -----------------------
data.push(
  makeWeaponRFive("Lumiere Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive(
    "Lumiere Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 263,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
    true,
  ),
);

// -----------------------
data.push(
  makeWeaponRFive("Obscura Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive(
    "Obscura Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 263,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
    true,
  ),
);

export default data;
