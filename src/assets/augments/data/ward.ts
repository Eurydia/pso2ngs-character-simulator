import { Fragment } from "react";
import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.WARD;
const CONFLICT: GroupEnum[] = [GroupEnum.WARD];

let data: Augment[] = [];

// --------------------------------------
// ward
(() => {
  const data_bp = [4, 5, 6];
  const data_ail_res = [1.2, 1.25, 1.3];

  const data_arr: [string, StatEnum][] = [
    ["burn", StatEnum.AIL_BURN],
    ["freeze", StatEnum.AIL_FREEZE],
    ["shock", StatEnum.AIL_SHOCK],
    ["blind", StatEnum.AIL_BLIND],
    ["panic", StatEnum.AIL_PANIC],
    ["poison", StatEnum.AIL_POISON],
    ["pain", StatEnum.AIL_PHYDOWN],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    for (let i = 0; i < data_bp.length; i++) {
      data.push(
        augment(`${name} ward`, i + 1, GROUP, CONFLICT, [
          stat(StatEnum.CORE_BP, data_bp[i]),
          stat(stat_type, data_ail_res[i]),
        ]),
      );
    }
  }
})();

// --------------------------------------
// sovereign ward
(() => {
  const data_bp = [6, 8, 10];
  const data_ail_res = [1.2, 1.25, 1.3];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("sovereign ward", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.AIL_BURN, data_ail_res[i]),
        stat(StatEnum.AIL_FREEZE, data_ail_res[i]),
        stat(StatEnum.AIL_SHOCK, data_ail_res[i]),
        stat(StatEnum.AIL_BLIND, data_ail_res[i]),
        stat(StatEnum.AIL_PANIC, data_ail_res[i]),
        stat(StatEnum.AIL_POISON, data_ail_res[i]),
        stat(StatEnum.AIL_PHYDOWN, data_ail_res[i]),
      ]),
    );
  }
})();

export default data;
