import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.SOUL;
const CONFLICT: GroupEnum[] = [GroupEnum.SOUL];

let data: Augment[] = [];

// --------------------------------------
// alt
(() => {
  const data_bp = [5, 7, 9];
  const data_hp = [5, 10, 15];
  const data_damage_res = [1.01, 1.02, 1.025];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("alts soul", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.CORE_HP, data_hp[i]),
        stat(StatEnum.ADV_DEF_DAMAGE_RES, data_damage_res[i]),
      ]),
    );
  }
})();

// --------------------------------------
// dolz
(() => {
  const data_bp = [5, 6, 7];
  const data_pp = [5, 5, 5];
  const data_floor = [1.01, 1.02, 1.025];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("dolz soul", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.CORE_HP, data_pp[i]),
        stat(StatEnum.ADV_OFF_FLOOR, data_floor[i]),
      ]),
    );
  }
})();

// --------------------------------------
// form | form machini | form sand
(() => {
  const data_bp = [6, 8, 9];
  const data_weapon_up = [1.02, 1.02, 1.02];
  const data_damage_res = [1, 1.02, 1.025];

  const data_arr: [string, StatEnum][] = [
    ["forms", StatEnum.WEAPON_MELEE],
    ["forms machini", StatEnum.WEAPON_RANGED],
    ["forms sand", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    for (let i = 0; i < data_bp.length; i++) {
      data.push(
        augment(`${name} soul`, i + 1, GROUP, CONFLICT, [
          stat(StatEnum.CORE_BP, data_bp[i]),
          stat(stat_type, data_weapon_up[i]),
          stat(StatEnum.ADV_DEF_DAMAGE_RES, data_damage_res[i]),
        ]),
      );
    }
  }
})();

// --------------------------------------
// daityl | pettas | nex
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_pp = [5, 5, 5, 5];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_arr: [string, StatEnum][] = [
    ["daityl", StatEnum.WEAPON_MELEE],
    ["pettas", StatEnum.WEAPON_RANGED],
    ["nex", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    for (let i = 0; i < data_bp.length; i++) {
      data.push(
        augment(`${name} soul`, i + 1, GROUP, CONFLICT, [
          stat(StatEnum.CORE_BP, data_bp[i]),
          stat(StatEnum.CORE_HP, data_pp[i]),
          stat(stat_type, data_weapon_up[i]),
        ]),
      );
    }
  }
})();

// --------------------------------------
// dust | ragras | renus
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [15, 15, 15, 15];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_arr: [string, StatEnum][] = [
    ["dust", StatEnum.WEAPON_MELEE],
    ["ragras", StatEnum.WEAPON_RANGED],
    ["renus", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    for (let i = 0; i < data_bp.length; i++) {
      data.push(
        augment(`${name} soul`, i, GROUP, CONFLICT, [
          stat(StatEnum.CORE_BP, data_bp[i]),
          stat(StatEnum.CORE_HP, data_hp[i]),
          stat(stat_type, data_weapon_up[i]),
        ]),
      );
    }
  }
})();

// --------------------------------------
// eradi
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [10, 10, 10, 10];
  const data_pp = [4, 4, 4, 4];
  const data_weapon_up = [1.0125, 1.0175, 1.0225, 1.0275];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("eradi soul", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.CORE_HP, data_hp[i]),
        stat(StatEnum.CORE_PP, data_pp[i]),
        stat(StatEnum.WEAPON_MELEE, data_weapon_up[i]),
        stat(StatEnum.WEAPON_RANGED, data_weapon_up[i]),
        stat(StatEnum.WEAPON_TECHNIQUE, data_weapon_up[i]),
      ]),
    );
  }
})();

// --------------------------------------
// frostyl | crocys | ams
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [10, 10, 10, 10];
  const data_pp = [3, 3, 3, 3];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_arr: [string, StatEnum][] = [
    ["frostyl", StatEnum.WEAPON_MELEE],
    ["crocys", StatEnum.WEAPON_RANGED],
    ["ams", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    for (let i = 0; i < data_bp.length; i++) {
      data.push(
        augment(`${name} soul`, i + 1, GROUP, CONFLICT, [
          stat(StatEnum.CORE_BP, data_bp[i]),
          stat(StatEnum.CORE_HP, data_hp[i]),
          stat(StatEnum.CORE_PP, data_pp[i]),
          stat(stat_type, data_weapon_up[i]),
        ]),
      );
    }
  }
})();

// --------------------------------------
// aglai P | H | X
data.push(
  augment("aglai soul p", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_PP, 5),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_RANGED, 1.025),
  ]),
);
data.push(
  augment("aglai soul h", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 15),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_RANGED, 1.025),
  ]),
);
data.push(
  augment("aglai soul x", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 10),
    stat(StatEnum.CORE_PP, 3),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_RANGED, 1.025),
  ]),
);

// --------------------------------------
// euphroy P | H | X
data.push(
  augment("euphroy soul p", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_PP, 5),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);
data.push(
  augment("euphroy soul h", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 15),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);
data.push(
  augment("euphroy soul x", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 10),
    stat(StatEnum.CORE_PP, 3),
    stat(StatEnum.WEAPON_MELEE, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);

// --------------------------------------
// thali P | H | X
data.push(
  augment("thali soul p", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_PP, 5),
    stat(StatEnum.WEAPON_RANGED, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);
data.push(
  augment("thali soul h", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 15),
    stat(StatEnum.WEAPON_RANGED, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);
data.push(
  augment("thali soul x", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 11),
    stat(StatEnum.CORE_HP, 10),
    stat(StatEnum.CORE_PP, 3),
    stat(StatEnum.WEAPON_RANGED, 1.025),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.025),
  ]),
);

export default data;
