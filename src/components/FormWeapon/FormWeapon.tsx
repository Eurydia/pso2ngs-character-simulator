import { Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Augment, Fixa, GroupEnumFixa, Weapon } from "../../assets";
import FieldEnhancement from "../FieldEnhancement";
import FieldFixa from "../FieldFixa";
import FieldWeapon from "../FieldWeapon";
import FormAugment from "../FormAugment";

interface FormWeaponProps {
  title: string;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valueEnhancement, setValueEnhancement] =
    useState<string>("");
  const [valueAugments, setValueAugments] = useState<
    (Augment | null)[]
  >([null, null, null, null, null]);

  const handleAugmentChange = (
    value: Augment | null,
    index: number,
  ) => {
    setValueAugments((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <Stack spacing={1}>
      <Typography fontWeight="bold" fontSize="large">
        {props.title}
      </Typography>
      <FieldWeapon value={valueWeapon} onChange={setValueWeapon} />
      <FieldEnhancement
        value={valueEnhancement}
        onChange={setValueEnhancement}
        valueMin={0}
        valueMax={50}
      />
      <FieldFixa
        value={valueFixa}
        onChange={setValueFixa}
        mode={GroupEnumFixa.WEAPON}
      />
      <FormAugment
        values={valueAugments}
        onChange={handleAugmentChange}
      />
    </Stack>
  );
};

export default FormWeapon;
