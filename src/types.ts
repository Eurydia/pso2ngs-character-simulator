import { Augment, Fixa, StatEnum, Unit } from "./assets";

// export type SummaryEquipment = {
//   equipment: string | null;
//   fixa: string | null;
//   augments: string[];
// };

// export type SummaryFood = {
//   level: number;
//   label: string;
// };

export type Nullable<T> = { [P in keyof T]: T[P] | null };

// export type FormDataUnit = {
//   unit: Unit | null;
//   unit_level: number;
//   fixa: Fixa | null;
//   augments: (Augment | null)[];
// };

// export type FormDataUnitSetter = {
//   setUnit: (unit: Unit | null) => void;
//   setUnitLevel: (level: number) => void;
//   setFixa: (fixa: Fixa | null) => void;
//   setAugments: (augment: Augment | null, index: number) => void;
// };
