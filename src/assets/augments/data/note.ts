import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentNote = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.NOTE,
    [GroupEnum.NOTE],
    stats,
  );
};

// --------------------------------------
// ael
// exploration
// a | b | c | d
(() => {
  // a
  data.push(
    makeAugmentNote("ael note a", 0, {
      [StatEnum.CORE_BP]: 5,
      [StatEnum.CORE_HP]: 5,
      [StatEnum.CORE_PP]: 3,
    }),
  );

  // b | c | d
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["b", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["c", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["d", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.01;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentNote(`ael note ${name}`, 0, {
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
    ["magnus", StatEnum.WEAPON_MELEE],
    ["lab", StatEnum.WEAPON_RANGED],
    ["resola", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.015;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;
    data.push(
      makeAugmentNote(`${name} note`, 0, {
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
    makeAugmentNote("ret note a", 0, {
      [StatEnum.CORE_BP]: 5,
      [StatEnum.CORE_HP]: 10,
    }),
  );

  // b | c | d
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["b", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["c", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["d", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.0075;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;
    data.push(
      makeAugmentNote(`ret note ${name}`, 0, {
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
  makeAugmentNote(`alno note`, 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_PP]: 3,
    [StatEnum.ADV_OFF_FLOOR]: 1.02,
  }),
);
// maqea
data.push(
  makeAugmentNote(`maqea note`, 0, {
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
    makeAugmentNote("kvar note a", 0, {
      [StatEnum.CORE_BP]: 5,
      [StatEnum.CORE_HP]: 10,
      [StatEnum.CORE_PP]: 5,
    }),
  );

  // b | c | d
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["b", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["c", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["d", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.02;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentNote(`kvar note ${name}`, 0, {
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
  makeAugmentNote("lostral note", 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.025,
    [StatEnum.WEAPON_RANGED]: 1.025,
    [StatEnum.WEAPON_TECHNIQUE]: 1.025,
  }),
);
// belgan
data.push(
  makeAugmentNote("belgan note", 0, {
    [StatEnum.CORE_BP]: 5,
    [StatEnum.CORE_PP]: 3,
    [StatEnum.WEAPON_MELEE]: 1.025,
    [StatEnum.WEAPON_RANGED]: 1.025,
    [StatEnum.WEAPON_TECHNIQUE]: 1.025,
  }),
);

export default data;
