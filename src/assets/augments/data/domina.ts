import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.DOMINA;
const CONFLICT: GroupEnum[] = [GroupEnum.DOMINA];

let data: Augment[] = [];

// --------------------------------------
// ael
data.push(
  augment("ael domina", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 8),
    stat(StatEnum.CORE_HP, 5),
    stat(StatEnum.CORE_PP, 3),
    stat(StatEnum.WEAPON_MELEE, 1.015),
    stat(StatEnum.WEAPON_RANGED, 1.015),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.015),
  ]),
);

// --------------------------------------
// ret
data.push(
  augment("ret domina", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 10),
    stat(StatEnum.CORE_HP, 15),
    stat(StatEnum.WEAPON_MELEE, 1.015),
    stat(StatEnum.WEAPON_RANGED, 1.015),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.015),
  ]),
);

// --------------------------------------
// kvar
data.push(
  augment("kvar domina", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 10),
    stat(StatEnum.CORE_PP, 5),
    stat(StatEnum.WEAPON_MELEE, 1.015),
    stat(StatEnum.WEAPON_RANGED, 1.015),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.015),
    stat(StatEnum.ADV_DEF_DAMAGE_RES, 0.98),
  ]),
);

export default data;
