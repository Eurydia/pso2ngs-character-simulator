import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.DREAD;
const CONFLICT: GroupEnum[] = [GroupEnum.DREAD];

let data: Augment[] = [];

// --------------------------------------
// dread keeper
(() => {
  const data_bp = [7, 7.5, 10];
  const data_hp = [10, 15, 30];
  const data_pp = [3, 4, 7];
  const data_floor = [1.01, 1.015, 1.02];
  const data_damage_res = [1.01, 1.015, 1.02];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("dread keeper", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.CORE_HP, data_hp[i]),
        stat(StatEnum.CORE_PP, data_pp[i]),
        stat(StatEnum.ADV_OFF_FLOOR, data_floor[i]),
        stat(StatEnum.ADV_DEF_DAMAGE_RES, data_damage_res[i]),
      ]),
    );
  }
})();

export default data;
