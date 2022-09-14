import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.FUSED;
const CONFLICT = [GroupEnum.FUSED, GroupEnum.BASIC];

let data: Augment[] = [];

// --------------------------------------
// fused
(() => {
  const data_arr = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data in data_arr) {
    const [name, stat_type] = _data;
    const weapon_up = stat(stat_type as StatEnum, 1.02);

    data.push(
      augment(`sta ${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 8),
        stat(StatEnum.CORE_HP, 15),
        weapon_up,
      ]),
    );

    data.push(
      augment(`spi ${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 8),
        stat(StatEnum.CORE_PP, 5),
        weapon_up,
      ]),
    );

    data.push(
      augment(`deft ${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 8),
        weapon_up,
        stat(StatEnum.ADV_OFF_FLOOR, 1.02),
      ]),
    );

    data.push(
      augment(`gua ${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 8),
        weapon_up,
        stat(StatEnum.ADV_DEF_DAMAGE_RES, 1.02),
      ]),
    );
  }
})();

export default data;
