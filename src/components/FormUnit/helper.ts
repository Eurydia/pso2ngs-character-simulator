import {
  ActionContext,
  Augment,
  Fixa,
  statObject,
  StatObject,
  Unit,
} from "../../assets";

// export const createStat = (
//   context: ActionContext,
//   unit: Unit | null,
//   unit_level: number,
//   fixa: Fixa | null,
//   augments: (Augment | null)[],
// ): StatObject => {
//   const stat: StatObject = statObject();

//   if (unit === null) {
//     return stat;
//   }

//   const stat_unit: StatObject = unit.getterFunction(
//     context,
//     unit_level,
//   );
//   stat.mergeStat(stat_unit);

//   if (fixa !== null) {
//     const stat_fixa: StatObject = fixa.getStatObject(context);
//     stat.mergeStat(stat_fixa);
//   }

//   augments.forEach((augment) => {
//     if (augment === null) {
//       return;
//     }
//     const stat_augment: StatObject = augment.getStatObject(context);
//     stat.mergeStat(stat_augment);
//   });

//   return stat;
// };

// export const createSummary = (
//   unit: Unit | null,
//   fixa: Fixa | null,
//   augments: (Augment | null)[],
// ): SummaryEquipment => {
//   const summary: SummaryEquipment = {
//     equipment: null,
//     fixa: null,
//     augments: [],
//   };

//   if (unit === null) {
//     return summary;
//   }

//   summary.equipment = unit.label;

//   if (fixa !== null) {
//     summary.fixa = fixa.label;
//   }

//   for (const augment of augments) {
//     if (augment === null) {
//       continue;
//     }
//     summary.augments.push(augment.label);
//   }

//   return summary;
// };
