import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.ADDI;
const CONFLICT: GroupEnum[] = [GroupEnum.ADDI];

let data: Augment[] = [];

// --------------------------------------
// addi
(() => {
  const data_arr: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const _data of data_arr) {
    const [name, stat_type] = _data;

    const weapon_up = stat(stat_type, 1.025);

    data.push(
      augment(`addi sta${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 10),
        stat(StatEnum.CORE_HP, 20),
        weapon_up,
      ]),
    );

    data.push(
      augment(`addi spi${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 10),
        weapon_up,
        stat(StatEnum.ADV_OFF_FLOOR, 1.025),
      ]),
    );

    data.push(
      augment(`addi deft${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 10),
        stat(StatEnum.CORE_PP, 6),
        weapon_up,
      ]),
    );

    data.push(
      augment(`addi guard${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 10),
        weapon_up,
        stat(StatEnum.ADV_DEF_DAMAGE_RES, 1.025),
      ]),
    );

    data.push(
      augment(`add staspi${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 10),
        stat(StatEnum.CORE_HP, 10),
        stat(StatEnum.CORE_PP, 3),
        weapon_up,
      ]),
    );

    data.push(
      augment(`addi ward${name}`, 0, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, 10),
        weapon_up,
        stat(StatEnum.AIL_BLIND, 1.2),
        stat(StatEnum.AIL_BURN, 1.2),
        stat(StatEnum.AIL_FREEZE, 1.2),
        stat(StatEnum.AIL_PANIC, 1.2),
        stat(StatEnum.AIL_PHYDOWN, 1.2),
        stat(StatEnum.AIL_POISON, 1.2),
        stat(StatEnum.AIL_SHOCK, 1.2),
      ]),
    );
  }
})();

export default data;
