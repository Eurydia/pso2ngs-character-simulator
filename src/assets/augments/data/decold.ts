import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.DECOLD;
const CONFLICT: GroupEnum[] = [GroupEnum.DECOLD];

let data: Augment[] = [];

// --------------------------------------
// standard
(() => {
  const data_bp = [1, 3, 5];
  const data_cold_res = [0.05, 0.15, 0.25];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("decold standard", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.HARSH_COLD, data_cold_res[i]),
      ]),
    );
  }
})();

// --------------------------------------
// might | precicion | technique
(() => {
  const data_arr: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    data.push(
      augment(`decold ${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 9),
        stat(stat_type, 1.025),
        stat(StatEnum.HARSH_COLD, 0.25),
      ]),
    );
  }
})();

export default data;
