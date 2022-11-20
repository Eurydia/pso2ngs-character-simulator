import { StatEnum } from "./assets";

export type StatObject = Partial<{ [K in StatEnum]: number }>;
