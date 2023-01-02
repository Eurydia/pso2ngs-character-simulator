import { Augment } from "../augment";
import { g_addi } from "./g_addi";
import { G_BASIC } from "./g_basic";
import { g_domina } from "./g_domina";
import { g_dread } from "./g_dread";
import { g_dualble } from "./g_dualble";
import { g_exploit } from "./g_exploit";
import { g_fused } from "./g_fused";
import { g_fusia } from "./g_fusia";
import { g_gigas } from "./g_gigas";
import { g_note } from "./g_note";
import { g_secreta } from "./g_secreta";
import { g_soul } from "./g_soul";
import { g_tria } from "./g_tria";
import { g_ward } from "./g_ward";
import { g_decold } from "./g_decold";
import { g_sezun } from "./g_sezun";
import { g_super } from "./g_super";

export const AssetAugments: Augment[] = [
  ...g_addi,
  ...G_BASIC,
  ...g_domina,
  ...g_dread,
  ...g_dualble,
  ...g_exploit,
  ...g_fused,
  ...g_fusia,
  ...g_gigas,
  ...g_note,
  ...g_secreta,
  ...g_soul,
  ...g_tria,
  ...g_ward,
  ...g_decold,
  ...g_sezun,
  ...g_super,
];
