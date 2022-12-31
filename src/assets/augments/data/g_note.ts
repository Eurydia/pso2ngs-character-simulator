import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

const data: Augment[] = [];

const makeAugmentNote = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.NOTE,
    [GroupEnumAugment.NOTE],
    (_) => statObject(stat),
  );
};

// --------------------------------------
// ael
// exploration
// a | b | c | d
(() => {
  // a
  data.push(
    makeAugmentNote("Ael Note A", 0, {
      [StatEnum.CORE_BP]: 5,
      [StatEnum.CORE_HP]: 5,
      [StatEnum.CORE_PP]: 3,
    }),
  );

  // b | c | d
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["B", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["C", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["D", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.01;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentNote(`Ael Note ${name}`, 0, {
        [StatEnum.CORE_BP]: 4,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );
  }
})();

// combat
// magnus | lab | resola
(() => {
  const data_stats: [string, StatEnum][] = [
    ["Magnus", StatEnum.WEAPON_MELEE],
    ["Lab", StatEnum.WEAPON_RANGED],
    ["Resola", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.015;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data.push(
      makeAugmentNote(`${name} Note`, 0, {
        [StatEnum.CORE_BP]: 5,
        [weapon_up]: weapon_up_value,
      }),
    );
  }
})();

// --------------------------------------
// ret
// exploration
// a | b | c | d
(() => {
  // a
  data.push(
    makeAugmentNote("Ret Note A", 0, {
      [StatEnum.CORE_BP]: 5,
      [StatEnum.CORE_HP]: 10,
    }),
  );

  // b | c | d
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["B", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["C", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["D", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.0075;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentNote(`Ret Note ${name}`, 0, {
        [StatEnum.CORE_BP]: 4,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );
  }
})();

// combat
// alno
data.push(
  makeAugmentNote(`Alno Note`, 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_PP]: 3,
    [StatEnum.ADV_OFF_FLOOR]: 1.02,
  }),
);
// maqea
data.push(
  makeAugmentNote(`Maqea Note`, 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.WEAPON_MELEE]: 1.0125,
    [StatEnum.WEAPON_RANGED]: 1.0125,
    [StatEnum.WEAPON_TECHNIQUE]: 1.0125,
  }),
);

// --------------------------------------
// kvar
// exploration
// a | b | c | d
(() => {
  // a
  data.push(
    makeAugmentNote("Kvar Note A", 0, {
      [StatEnum.CORE_BP]: 5,
      [StatEnum.CORE_HP]: 10,
      [StatEnum.CORE_PP]: 5,
    }),
  );

  // b | c | d
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["B", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["C", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["D", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.02;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentNote(`Kvar Note ${name}`, 0, {
        [StatEnum.CORE_BP]: 4,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 0.98,
      }),
    );
  }
})();

// combat
// lostral
data.push(
  makeAugmentNote("Lostral Note", 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.025,
    [StatEnum.WEAPON_RANGED]: 1.025,
    [StatEnum.WEAPON_TECHNIQUE]: 1.025,
  }),
);
// belgan
data.push(
  makeAugmentNote("Belgan Note", 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.CORE_PP]: 3,
    [StatEnum.WEAPON_MELEE]: 1.025,
    [StatEnum.WEAPON_RANGED]: 1.025,
    [StatEnum.WEAPON_TECHNIQUE]: 1.025,
  }),
);

// --------------------------------------
// stia
// exploration
// a | b | c | d
(() => {
  // a
  data.push(
    makeAugmentNote("Stia Note A", 0, {
      [StatEnum.CORE_BP]: 5,
      [StatEnum.CORE_HP]: 15,
      [StatEnum.CORE_PP]: 5,
    }),
  );

  // b | c | d
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["B", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["C", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["D", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.02;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentNote(`Stia Note ${name}`, 0, {
        [StatEnum.CORE_BP]: 4,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.AIL_BLIND]: 1.1,
        [StatEnum.AIL_BURN]: 1.1,
        [StatEnum.AIL_FREEZE]: 1.1,
        [StatEnum.AIL_PANIC]: 1.1,
        [StatEnum.AIL_PHYDOWN]: 1.1,
        [StatEnum.AIL_POISON]: 1.1,
        [StatEnum.AIL_SHOCK]: 1.1,
      }),
    );
  }
})();

// combat
// dext
data.push(
  makeAugmentNote("Dexta  Note", 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.02,
    [StatEnum.WEAPON_RANGED]: 1.02,
    [StatEnum.WEAPON_TECHNIQUE]: 1.02,
    [StatEnum.AIL_BLIND]: 1.1,
    [StatEnum.AIL_BURN]: 1.1,
    [StatEnum.AIL_FREEZE]: 1.1,
    [StatEnum.AIL_PANIC]: 1.1,
    [StatEnum.AIL_PHYDOWN]: 1.1,
    [StatEnum.AIL_POISON]: 1.1,
    [StatEnum.AIL_SHOCK]: 1.1,
  }),
);

export default data;
