import StatEnum from "./statEnum";

export type TStat = {
  type: StatEnum;
  quantity: number;
};

const Stat = (t: StatEnum, q: number): TStat => {
  return { type: t, quantity: q };
};

export default Stat;

Number;
