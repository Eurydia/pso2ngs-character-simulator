import { FC } from "react";
import { Stack } from "@mui/material";

import { Augment } from "../../assets";

import FieldAugment from "../FieldAugment";
interface AugmentFormProps {
  values: (Augment | null)[];
  onChange: (value: Augment | null, index: number) => void;
}
const AugmentForm: FC<AugmentFormProps> = (props) => {
  return (
    <Stack>
      {props.values.map((augment, index) => (
        <FieldAugment
          key={`aug-${index}`}
          value={augment}
          onChange={(aug) => props.onChange(aug, index)}
        />
      ))}
    </Stack>
  );
};

export default AugmentForm;
