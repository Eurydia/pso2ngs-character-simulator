import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.GIGAS;
const CONFLICT: GroupEnum[] = [GroupEnum.GIGAS];

let data: Augment[] = [];

// --------------------------------------
// might | precision | technique
(() => {
  const data_bp = [6, 8, 10, 11];
  const data_hp = [5, 10, 15, 20];
  const data_weapon_up = [1.015, 1.02, 1.025, 1.03];

  const data_arr: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    for (let i = 0; i < data_bp.length; i++) {
      data.push(
        augment(`gigas ${name}`, i + 1, GROUP, CONFLICT, [
          stat(StatEnum.CORE_BP, data_bp[i]),
          stat(StatEnum.CORE_HP, data_hp[i]),
          stat(stat_type, data_weapon_up[i]),
        ]),
      );
    }
  }
})();

// --------------------------------------
// aglai
data.push(
  augment("gigas aglai", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 15),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_RANGED, 1.025),
  ]),
);

// --------------------------------------
// euphroy
data.push(
  augment("gigas euphroy", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 15),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);

// --------------------------------------
// thali
data.push(
  augment("gigas thali", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 15),
    stat(StatEnum.WEAPON_RANGED, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);
export default data;
