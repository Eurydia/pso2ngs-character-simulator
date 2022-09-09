import { FC } from "react";

import FieldWeapon from "./subcomponents/FieldWeapon";
import FieldEnhancement from "../FieldEnhancement";
import FieldFixa from "../FieldFixa";

import FormAugment from "../FormAugment";
import FormCard from "../FormCard/FormCard";
import FormLayout from "../FormLayout";

interface FormWeaponProps {}
const FormWeapon: FC<FormWeaponProps> = () => {
  const handleCopy = () => {};
  const handlePaste = () => {};
  const handleClear = () => {};

  return (
    <FormCard
      cardTitle="Weapon"
      cardContent={
        <FormLayout
          equipmentSlot={<FieldWeapon />}
          enhancementSlot={<FieldEnhancement />}
          fixaSlot={<FieldFixa />}
          augmentSlot={<FormAugment />}
        />
      }
      onCopy={handleCopy}
      onPaste={handlePaste}
      onClear={handleClear}
    />
  );
};

export default FormWeapon;
