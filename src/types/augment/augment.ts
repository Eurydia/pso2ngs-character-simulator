import { TStat } from "./../stat/stat";
import GroupEnums from "./groupEnum";

type Augment = {
  name: string;
  level: number;
  group: GroupEnums[];
  conflict: GroupEnums[];
  stats: TStat;
};
