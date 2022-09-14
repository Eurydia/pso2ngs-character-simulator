import stat, { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const GROUP = GroupEnum.SECRETA;
const CONFLICT: GroupEnum[] = [GroupEnum.SECRETA];

let data: Augment[] = [];

// --------------------------------------
// alt
(() => {
  const data_bp = [3, 4, 5];
  const data_hp = [-10, -10, -10];
  const data_weapon_up = [1.01, 1.015, 1.02];
  const data_floor = [1.01, 1.015, 1.02];
  const data_damage_res = [0.985, 0.985, 0.985];

  for (let i = 0; i < data_bp.length; i++) {
    data.push(
      augment("alts secreata", i + 1, GROUP, CONFLICT, [
        stat(StatEnum.CORE_BP, data_bp[i]),
        stat(StatEnum.CORE_HP, data_hp[i]),
        stat(StatEnum.WEAPON_MELEE, data_weapon_up[i]),
        stat(StatEnum.WEAPON_RANGED, data_weapon_up[i]),
        stat(StatEnum.WEAPON_TECHNIQUE, data_weapon_up[i]),
        stat(StatEnum.ADV_OFF_FLOOR, data_floor[i]),
        stat(StatEnum.ADV_DEF_DAMAGE_RES, data_damage_res[i]),
      ]),
    );
  }
})();

export default data;
