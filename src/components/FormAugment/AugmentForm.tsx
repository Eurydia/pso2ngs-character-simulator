import { FC } from "react";
import { Grid } from "@mui/material";
import FieldAugment from "../FieldAugment";
import { Augment } from "../../assets";
import { doConflict } from "./helper";

interface AugmentFormProps {
  values: (Augment | null)[];
  conflict: Set<number>;
  onChange: (value: Augment | null, index: number) => void;
}
const AugmentForm: FC<AugmentFormProps> = (props) => {
  return (
    <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
      {props.values.map((augment, index) => (
        <Grid key={`aug-${index}`} item xs={1}>
          <FieldAugment
            error={props.conflict.has(index)}
            value={augment}
            onChange={(aug) => props.onChange(aug, index)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AugmentForm;
