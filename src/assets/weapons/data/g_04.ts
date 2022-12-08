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
  [50, 108],
  [60, 267],
];

const makeWeaponRFour = (
  name: string,
  potential: Potential,
  stats: Partial<{ [K in StatEnum]: number }>,
  inactive: boolean = false,
): Weapon => {
  let _name = name;
  if (inactive) {
    _name = `${name} (Inactive)`;
  }
  return weapon(
    _name,
    GroupEnum.R_FOUR,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRFour("Resurgia Series", AssetPotentials.DYNAMO_UNIT, {
    [StatEnum.CORE_ATTACK]: 240,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour(
    "Cattleya Series",
    AssetPotentials.MUSTERED_MIGHT_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 242,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRFour("Foursis Series", AssetPotentials.BASTION_UNIT, {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Vialto Series", AssetPotentials.MEDITATION_UNIT, {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Straga Series", AssetPotentials.BERSERK_UNIT, {
    [StatEnum.CORE_ATTACK]: 243,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour(
    "Evolcoat Series",
    AssetPotentials.SOULSPRING_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 242,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRFour("Flamel Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 240,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFour(
    "Flamel Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 240,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
    true,
  ),
);

export default data;
