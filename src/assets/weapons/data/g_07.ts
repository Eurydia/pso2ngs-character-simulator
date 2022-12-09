import { StatEnum } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 30],
  [20, 60],
  [30, 90],
  [40, 136],
  [50, 186],
];

const makeWeaponRSeven = (
  name: string,
  potential: Potential,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    GroupEnum.R_SEVEN,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRSeven(
    "Kaizaar Mk. I Series",
    AssetPotentials.TEMPERED_FORM,
    {
      [StatEnum.CORE_ATTACK]: 465,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRSeven(
    "Crystia Series",
    AssetPotentials.ABSORPTION_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 473,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRSeven(
    "Rugged Pursuit Series",
    AssetPotentials.PURSUIT_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 490,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRSeven(
    "Rugged Citadel Series",
    AssetPotentials.CITADEL_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 490,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRSeven(
    "Rugged Gyrating Series",
    AssetPotentials.GYRATING_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 490,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRSeven("Kaizaar Series", AssetPotentials.TEMPERED_FORM, {
    [StatEnum.CORE_ATTACK]: 485,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven(
    "Obsidia Series",
    AssetPotentials.CORUSCATING_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 488,
      [StatEnum.ADV_OFF_FLOOR]: 1.5,
    },
  ),
);

export default data;
