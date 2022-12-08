import { StatEnum } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 25],
  [30, 55],
  [40, 85],
  [50, 125],
  [60, 183],
];

const makeWeaponRSix = (
  name: string,
  potential: Potential,
  stats: Partial<{ [K in StatEnum]: number }>,
  inactive: boolean = true,
): Weapon => {
  let _name = name;
  if (inactive) {
    _name = `${name} (Inactive)`;
  }
  return weapon(
    _name,
    GroupEnum.R_SIX,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRSix("Evoleclipse Series", AssetPotentials.ELUSIVE_UNIT, {
    [StatEnum.CORE_ATTACK]: 346,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Sechetyl Series", AssetPotentials.TRAMPLE_UNIT, {
    [StatEnum.CORE_ATTACK]: 350,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix(
    "Rokz Roughewn Series",
    AssetPotentials.REVOLUTIONARY_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 353,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRSix(
    "Rokz Sixiemes Series",
    AssetPotentials.DESPERATION_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 353,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRSix("Rokz Curva Series", AssetPotentials.STACCATO_UNIT, {
    [StatEnum.CORE_ATTACK]: 353,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Evolorbit Series", AssetPotentials.ILLUSORY_UNIT, {
    [StatEnum.CORE_ATTACK]: 355,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Codeck Series", AssetPotentials.IMPERVIOUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 351,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

export default data;
