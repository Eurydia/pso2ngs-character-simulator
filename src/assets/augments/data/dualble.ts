import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.DUALBLE;
const CONFLICT: GroupEnum[] = [GroupEnum.DUALBLE];

let data: Augment[] = [];

// --------------------------------------
// melra
(() => {
  const data_bp = [4, 5, 6];
  const data_weapon_up = [1.0075, 1.0125, 1.0175];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("melra dualble", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.WEAPON_MELEE, data_weapon_up[i]),
        stat(StatEnum.WEAPON_RANGED, data_weapon_up[i]),
      ]),
    );
  }
})();

// --------------------------------------
// meltech
(() => {
  const data_bp = [4, 5, 6];
  const data_weapon_up = [1.0075, 1.0125, 1.0175];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("meltech dualble", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.WEAPON_MELEE, data_weapon_up[i]),
        stat(StatEnum.WEAPON_TECHNIQUE, data_weapon_up[i]),
      ]),
    );
  }
})();

// --------------------------------------
// ratech
(() => {
  const data_bp = [4, 5, 6];
  const data_weapon_up = [1.0075, 1.0125, 1.0175];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("ratech dualble", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.WEAPON_RANGED, data_weapon_up[i]),
        stat(StatEnum.WEAPON_TECHNIQUE, data_weapon_up[i]),
      ]),
    );
  }
})();

// --------------------------------------
// triplble
data.push(
  augment("triplble", 0, GROUP, CONFLICT, [
    stat(StatEnum.CORE_BP, 8),
    stat(StatEnum.WEAPON_MELEE, 1.02),
    stat(StatEnum.WEAPON_RANGED, 1.02),
    stat(StatEnum.WEAPON_TECHNIQUE, 1.02),
  ]),
);

export default data;
