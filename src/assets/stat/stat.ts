import StatEnum from "./statEnum";

export type Stat = {
  stat_type: StatEnum | string;
  amount: number;

  to_string: (sep: string) => string;
};

class statClass {
  stat_type: StatEnum | string;
  amount: number;

  constructor(t: StatEnum, a: number) {
    this.stat_type = t;
    this.amount = a;
  }

  to_string(separator: string = ";"): string {
    return `${this.stat_type}${separator}${this.amount}`;
  }

  // from_string(data: string, separator: string = ";"): Stat {
  //   const [stat_type, amount] = data.split(separator, 2);

  //   return new Stat(stat_type, Number(amount));
  // }
}

const stat = (t: StatEnum, a: number): Stat => {
  return new statClass(t, a);
};

export default stat;
