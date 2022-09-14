import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.FUSIA;
const CONFLICT: GroupEnum[] = [GroupEnum.FUSIA];

let data: Augment[] = [];

// --------------------------------------
// fusia
data.push(
  augment("megas fusia", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 4),
    stat(StatEnum.WEAPON_MELEE, 1.01),
    stat(StatEnum.WEAPON_RANGED, 1.01),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.01),
  ]),
);

export default data;
