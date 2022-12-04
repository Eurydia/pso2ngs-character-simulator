import StatEnum, {
  StatAdd,
  StatSpecial,
  StatEnumString,
} from "./statEnum";

const format = (
  value: number,
  baseline: number,
  mode: "add" | "percent",
): string => {
  const sign = value > baseline ? "+" : "";

  let parsed_value = value - baseline;
  if (mode === "add") {
    return `${sign}${parsed_value}`;
  } else {
    return `${sign}${(parsed_value * 100).toPrecision(3)}%`;
  }
};

const formatStat = (stat: StatEnum, value: number): string => {
  let res: string = "";

  if (StatAdd.has(stat)) {
    res = format(value, 0, "add");
  } else {
    res = format(value, 1, "percent");
  }

  if (StatSpecial.has(stat)) {
    res = format(value, 0, "percent");
  }

  return res;
};

const formatStatObject = (
  object: Partial<{ [K in StatEnum]: number }>,
): [string, string][] => {
  const formatted: [string, string][] = [];

  for (const stat of Object.keys(object)) {
    const value: number | undefined = object[stat as StatEnum];

    if (value === undefined) {
      continue;
    }

    const f_label = StatEnumString[stat as StatEnum];
    const f_value = formatStat(stat as StatEnum, value);
    formatted.push([f_label, f_value]);
  }

  return formatted;
};

export class StatObject {
  stats: Partial<{ [K in StatEnum]: number }>;

  constructor(stats: Partial<{ [K in StatEnum]: number }>) {
    this.stats = stats;
  }

  get format(): [string, string][] {
    return formatStatObject(this.stats);
  }
}

const statObject = (
  stats: Partial<{ [K in StatEnum]: number }>,
): StatObject => {
  return new StatObject(stats);
};

export default statObject;
