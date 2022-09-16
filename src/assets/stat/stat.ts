import StatEnum from "./statEnum";

export class Stat {
  stat_type: StatEnum;
  amount: number;

  constructor(t: StatEnum, a: number) {
    this.stat_type = t;
    this.amount = a;
  }
}

const stat = (t: StatEnum, a: number): Stat => {
  return new Stat(t, a);
};

export default stat;
