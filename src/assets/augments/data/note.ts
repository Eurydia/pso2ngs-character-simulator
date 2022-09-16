import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.NOTE;
const CONFLICT: GroupEnum[] = [GroupEnum.NOTE];

let data: Augment[] = [];

// --------------------------------------
// ael
// exploration
// a
data.push(
  augment("ael note a", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 5),
    stat(StatEnum.CORE_HP, 5),
    stat(StatEnum.CORE_PP, 3),
  ]),
);
// b
data.push(
  augment("ael note b", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_MELEE, 1.01),
    stat(StatEnum.WEAPON_RANGED, 1.01),
  ]),
);
// c
data.push(
  augment("ael note c", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_MELEE, 1.0075),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.0075),
  ]),
);
// d
data.push(
  augment("ael note d", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_RANGED, 1.0075),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.0075),
  ]),
);
// combat
// magnus | lab | resola
(() => {
  const data_arr: [string, StatEnum][] = [
    ["magnus", StatEnum.WEAPON_MELEE],
    ["lab", StatEnum.WEAPON_RANGED],
    ["resola", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;
    data.push(
      augment(`${name} note`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 5),
        stat(stat_type, 1.015),
      ]),
    );
  }
})();

// --------------------------------------
// ret
// exploration
// a
data.push(
  augment("ret note a", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 5),
    stat(StatEnum.CORE_HP, 10),
  ]),
);
// b
data.push(
  augment("ret note b", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_MELEE, 1.0075),
    stat(StatEnum.WEAPON_RANGED, 1.0075),
  ]),
);
// c
data.push(
  augment("ret note c", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_MELEE, 1.0075),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.0075),
  ]),
);
// d
data.push(
  augment("ret note d", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_RANGED, 1.0075),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.0075),
  ]),
);
// combat
// alno
data.push(
  augment(`alno note`, 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 5),
    stat(StatEnum.CORE_HP, 10),
    stat(StatEnum.CORE_PP, 3),
    stat(StatEnum.ADV_OFF_FLOOR, 1.02),
  ]),
);
// maqea
data.push(
  augment(`maqea note`, 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 5),
    stat(StatEnum.WEAPON_MELEE, 1.0125),
    stat(StatEnum.WEAPON_RANGED, 1.0125),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.0125),
  ]),
);

// --------------------------------------
// kvar
// exploration
// a
data.push(
  augment("kvar note a", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 5),
    stat(StatEnum.CORE_HP, 10),
    stat(StatEnum.CORE_PP, 5),
  ]),
);
// b
data.push(
  augment("kvar note b", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_MELEE, 1.02),
    stat(StatEnum.WEAPON_RANGED, 1.02),
    stat(StatEnum.ADV_DEF_DAMAGE_RES, 0.98),
  ]),
);
// c
data.push(
  augment("kvar note c", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_MELEE, 1.02),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.02),
    stat(StatEnum.ADV_DEF_DAMAGE_RES, 0.98),
  ]),
);
// d
data.push(
  augment("kvar note d", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_RANGED, 1.02),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.02),
    stat(StatEnum.ADV_DEF_DAMAGE_RES, 0.98),
  ]),
);
// combat
// lostral
data.push(
  augment("lostral note", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 5),
    stat(StatEnum.CORE_HP, 10),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_RANGED, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);
// belgan
data.push(
  augment("belgan note", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 5),
    stat(StatEnum.CORE_PP, 3),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_RANGED, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);

export default data;
