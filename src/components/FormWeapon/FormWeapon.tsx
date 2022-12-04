import { Box, Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Augment, Weapon } from "../../assets";
import FieldWeapon from "../FieldWeapon";
import FormAugment from "../FormAugment";

interface FormWeaponProps {
  title: string;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
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
    <Stack>
      <Typography fontWeight="bold" fontSize="large">
        {props.title}
      </Typography>
      <FieldWeapon value={valueWeapon} onChange={setValueWeapon} />
      <FormAugment
        showConflict
        values={valueAugments}
        onChange={handleAugmentChange}
      />
    </Stack>
  );
};

export default FormWeapon;
