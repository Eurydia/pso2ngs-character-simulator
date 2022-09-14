import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.TRIA;
const CONFLICT: GroupEnum[] = [GroupEnum.TRIA];

let data: Augment[] = [];

// --------------------------------------
(() => {
  const data_arr: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    const weapon_up = stat(stat_type, 1.0225);

    // sta
    data.push(
      augment(`tria staro${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 6),
        stat(StatEnum.CORE_HP, -5),
        weapon_up,
      ]),
    );

    // spi
    data.push(
      augment(`tria spiro${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 6),
        stat(StatEnum.CORE_PP, -3),
        weapon_up,
      ]),
    );

    // deft
    data.push(
      augment(`tria deftro${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 6),
        weapon_up,
        stat(StatEnum.ADV_OFF_FLOOR, 0.99),
      ]),
    );

    // gua
    data.push(
      augment(`tria guaro${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 6),
        weapon_up,
        stat(StatEnum.ADV_DEF_DAMAGE_RES, 0.99),
      ]),
    );
  }
})();

export default data;
