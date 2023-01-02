import { Unit } from "../unit";
import { G_ONE } from "./g_01";
import { G_TWO } from "./g_02";
import { G_THREE } from "./g_03";
import { G_FOUR } from "./g_04";
import { g_five } from "./g_05";
import { g_six } from "./g_06";
import { g_seven } from "./g_07";

export const AssetUnits: Unit[] = [
  ...G_ONE,
  ...G_TWO,
  ...G_THREE,
  ...G_FOUR,
  ...g_five,
  ...g_six,
  ...g_seven,
];
