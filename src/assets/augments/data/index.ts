import { Augment } from "../augment";
import { G_ADDI } from "./g_addi";
import { G_BASIC } from "./g_basic";
import { G_DOMINA } from "./g_domina";
import { G_DREAD } from "./g_dread";
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
import { G_DECOLD } from "./g_decold";
import { g_sezun } from "./g_sezun";
import { g_super } from "./g_super";

export const AssetAugments: Augment[] = [
  ...G_ADDI,
  ...G_BASIC,
  ...G_DOMINA,
  ...G_DREAD,
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
  ...G_DECOLD,
  ...g_sezun,
  ...g_super,
];
