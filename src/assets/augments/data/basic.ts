import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.BASIC;
const CONFLICT: GroupEnum[] = [GroupEnum.FUSED];

let data: Augment[] = [];
// --------------------------------------
// stamina
(() => {
  const data_bp = [3, 4, 5];
  const data_hp = [5, 10, 15];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("stamina", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.CORE_HP, data_hp[i]),
      ]),
    );
  }
})();

// --------------------------------------
// spirit
(() => {
  const data_bp = [2, 3, 4];
  const data_pp = [3, 4, 5];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("spirit", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.CORE_PP, data_pp[i]),
      ]),
    );
  }
})();

// --------------------------------------
// might | precision | technique
(() => {
  const data_bp = [4, 5, 6];
  const data_weapon_up = [1.01, 1.015, 1.02];

  const data_arr = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data in data_arr) {
    const [name, stat_type] = _data;

    for (let i = 0; i < data_bp.length; i++) {
      data.push(
        augment(name, i + 1, GROUP, CONFLICT, [
          stat(StatEnum.CORE_BP, data_bp[i]),
          stat(stat_type as StatEnum, data_weapon_up[i]),
        ]),
      );
    }
  }
})();

// --------------------------------------
// deftness
(() => {
  const data_bp = [3, 4, 5];
  const data_floor = [1.01, 1.015, 1.02];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("deftness", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.ADV_OFF_FLOOR, data_floor[i]),
      ]),
    );
  }
})();

// --------------------------------------
// guard
(() => {
  const data_bp = [2, 3, 4];
  const data_damage_res = [1.01, 1.015, 1.02];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("guard", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.ADV_DEF_DAMAGE_RES, data_damage_res[i]),
      ]),
    );
  }
})();

// --------------------------------------
// mastery
(() => {
  const data_bp = [6, 8, 10, 12];
  const data_weapon_up = [1.01, 1.015, 1.02, 1.025];
  const data_floor = [1.01, 1.015, 1.02, 1.025];
  const data_damage_res = [1.01, 1.015, 1.02, 1.025];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("mastery", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.WEAPON_MELEE, data_weapon_up[i]),
        stat(StatEnum.WEAPON_RANGED, data_weapon_up[i]),
        stat(StatEnum.WEAPON_TECHNIQUE, data_weapon_up[i]),
        stat(StatEnum.ADV_OFF_FLOOR, data_floor[i]),
        stat(StatEnum.ADV_DEF_DAMAGE_RES, data_damage_res[i]),
      ]),
    );
  }
})();

export default data;
