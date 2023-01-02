import { Augment } from "../augment";
import { G_ADDI } from "./g_addi";
import { G_BASIC } from "./g_basic";
import { G_DOMINA } from "./g_domina";
import { G_DREAD } from "./g_dread";
import { G_DUALBLE } from "./g_dualble";
import { G_EXPLOIT } from "./g_exploit";
import { G_FUSED } from "./g_fused";
import { G_FUSIA } from "./g_fusia";
import { G_GIGAS } from "./g_gigas";
import { G_NOTE } from "./g_note";
import { G_SECRETA } from "./g_secreta";
import { g_soul } from "./g_soul";
import { g_tria } from "./g_tria";
import { g_ward } from "./g_ward";
import { G_DECOLD } from "./g_decold";
import { G_SEZUN } from "./g_sezun";
import { g_super } from "./g_super";

export const AssetAugments: Augment[] = [
  ...G_ADDI,
  ...G_BASIC,
  ...G_DOMINA,
  ...G_DREAD,
  ...G_DUALBLE,
  ...G_EXPLOIT,
  ...G_FUSED,
  ...G_FUSIA,
  ...G_GIGAS,
  ...G_NOTE,
  ...G_SECRETA,
  ...g_soul,
  ...g_tria,
  ...g_ward,
  ...G_DECOLD,
  ...G_SEZUN,
  ...g_super,
];
