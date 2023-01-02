export type SummaryEquipment = {
  equipment: string | null;
  fixa: string | null;
  augments: string[];
};

export type SummaryFood = {
  level: number;
  label: string;
};

export type Nullable<T> = { [P in keyof T]: T[P] | null };
