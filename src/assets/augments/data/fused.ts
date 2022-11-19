import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

let data: Augment[] = [];

const makeFused = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.FUSED,
    [GroupEnum.BASIC, GroupEnum.FUSED],
    stats,
  );
};

// --------------------------------------
// fused
(() => {
  const data_arr: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.02;

  for (const _data of data_arr) {
    const [name, weapon_up] = _data;

    data.push(
      makeFused(`sta ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_HP]: 15,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeFused(`spi ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_PP]: 5,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeFused(`deft ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.02,
      }),
    );

    data.push(
      makeFused(`gua ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.02,
      }),
    );
  }
})();

export default data;
