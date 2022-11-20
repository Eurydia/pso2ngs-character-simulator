import { StatObject } from "../../types";
import { StatEnum } from "../stat";
import WeaponGroup from "./groupEnum";

export class WeaponPotential {
  name: string;
  stats: StatObject;
  stats_inactive: PStatObject;
}

const weapon = (
  name: string,
  group: WeaponGroup,
  growth_rate: [number, number][],
  stats: StatObject,
): Weapon => {
  return new Weapon(name, group, stats, growth_rate);
};

export default weapon;
