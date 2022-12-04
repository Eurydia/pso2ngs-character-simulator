import { FC } from "react";
import { Stack } from "@mui/material";

import { Augment } from "../../assets";

import FieldAugment from "../FieldAugment";
import { getConflict } from "./helper";
interface AugmentFormProps {
  values: (Augment | null)[];
  onChange: (value: Augment | null, index: number) => void;
  showConflict?: boolean;
}
const AugmentForm: FC<AugmentFormProps> = (props) => {
  const { showConflict } = props;

  let conflict: Set<number> = new Set();
  if (showConflict === true) {
    conflict = getConflict(props.values);
  }

  return (
    <Stack>
      {props.values.map((augment, index) => (
        <FieldAugment
          key={`aug-${index}`}
          error={conflict.has(index)}
          value={augment}
          onChange={(aug) => props.onChange(aug, index)}
        />
      ))}
    </Stack>
  );
};

export default AugmentForm;
