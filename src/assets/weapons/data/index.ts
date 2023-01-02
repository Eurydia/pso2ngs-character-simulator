import { Weapon } from "../weapon";
import { G_ONE } from "./g_01";
import { G_TWO } from "./g_02";
import { G_THREE } from "./g_03";
import { g_four } from "./g_04";
import { g_five } from "./g_05";
import { g_six } from "./g_06";
import { g_seven } from "./g_07";

export const AssetWeapons: Weapon[] = [
  ...G_ONE,
  ...G_TWO,
  ...G_THREE,
  ...g_four,
  ...g_five,
  ...g_six,
  ...g_seven,
];
