import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.SUPER;
const CONFLICT = [GroupEnum.SUPER];

let data: Augment[] = [];

// --------------------------------------
// might | precision | technique
(() => {
  const data_arr: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    data.push(
      augment(`super ${name}`, 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 8),
        stat(stat_type, 1.0225),
      ]),
    );
  }
})();

// --------------------------------------
// sta | spi
(() => {
  const data_arr: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    const weapon_up = stat(stat_type, 1.02);

    data.push(
      augment(`super sta${name}`, 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 8),
        stat(StatEnum.CORE_HP, 15),
        weapon_up,
      ]),
    );

    data.push(
      augment(`super spi${name}`, 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 8),
        stat(StatEnum.CORE_PP, 5),
        weapon_up,
      ]),
    );
  }
})();

export default data;
