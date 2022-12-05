import { FC, Fragment } from "react";

import FieldAugment from "../FieldAugment";

import { Augment } from "../../assets";

interface AugmentFormProps {
  values: (Augment | null)[];
  onChange: (value: Augment | null, index: number) => void;
}
const AugmentForm: FC<AugmentFormProps> = (props) => {
  return (
    <Fragment>
      {props.values.map((augment, index) => (
        <FieldAugment
          key={`aug-${index}`}
          value={augment}
          onChange={(aug) => props.onChange(aug, index)}
        />
      ))}
    </Fragment>
  );
};

export default AugmentForm;
