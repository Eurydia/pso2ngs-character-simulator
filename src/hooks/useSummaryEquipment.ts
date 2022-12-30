import { useState } from "react";
import { SummaryEquipment } from "../types";

export const useSummaryEquipment = (): [
  SummaryEquipment,
  (summary: SummaryEquipment) => void,
] => {
  const [value, setValue] = useState<SummaryEquipment>({
    equipment: null,
    fixa: null,
    augments: [],
  });

  return [value, setValue];
};
