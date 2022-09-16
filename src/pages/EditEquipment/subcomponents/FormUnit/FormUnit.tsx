import { FC } from "react";

import FieldUnit from "./subcomponents/FieldUnit";
import FieldFixa from "../FieldFixa/FieldFixa";
import FieldEnhancement from "../FieldEnhancement";

import FormAugment from "../../../../components/FormAugment";
import FormLayout from "../FormLayout";
import FormCard from "../FormCard";

interface FormUnitProps {
  index: number | string;
}
const FormUnit: FC<FormUnitProps> = (props) => {
  const handleCopy = () => {};
  const handlePaste = () => {};
  const handleClear = () => {};
  return (
    <FormCard
      cardTitle={`Unit ${props.index}`}
      cardContent={
        <FormLayout
          equipmentSlot={<FieldUnit />}
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

export default FormUnit;
