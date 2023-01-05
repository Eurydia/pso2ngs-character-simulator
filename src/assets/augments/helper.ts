const ROMAN_LOOKUP: { [key: number]: string } = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
};
export const toRoman = (num: number): string => {
  if (num < 0) {
    return "";
  }
  return ROMAN_LOOKUP[num];
};
