import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";

import FieldAugment from "../FieldAugment";
import { Augment } from "../../assets";
import { doConflict } from "./helper";

interface AugmentFormProps {}
const AugmentForm: FC<AugmentFormProps> = () => {
  const [augments, setAugments] = useState<(Augment | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);

  const [conflicting, setConflicting] = useState<Set<number>>(
    new Set(),
  );

  useEffect(() => {
    setConflicting(doConflict(augments));
  }, augments);

  const handleAugmentChange = (
    index: number,
    new_augment: Augment | null,
  ) => {
    setAugments((prev) => {
      const next = [...prev];
      next[index] = new_augment;
      return next;
    });
  };

  return (
    <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
      {augments.map((augment, index) => (
        <Grid key={`aug-${index}`} item xs={1}>
          <FieldAugment
            error={conflicting.has(index)}
            value={augment}
            onChange={(aug) => handleAugmentChange(index, aug)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AugmentForm;
