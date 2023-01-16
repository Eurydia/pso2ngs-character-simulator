import { Stack } from "@mui/material";
import { FC, useState } from "react";
import { FormBase } from "../FormBase";
import { SelectClass } from "../SelectClass";

type FormClassProps = {
  cardTitle: string;
};
export const FormClass: FC<FormClassProps> = (props) => {
  const { cardTitle } = props;

  const [main, setMain] = useState<string>("Hunter");
  const [sub, setSub] = useState<string>("Fighter");

  return (
    <FormBase
      cardTitle={cardTitle}
      slotCardHeaderAction={null}
      slotCardContent={
        <Stack>
          <SelectClass
            label="Main"
            currentClass={main}
            onCurrentClassChange={setMain}
          />
          <SelectClass
            label="Sub"
            currentClass={sub}
            onCurrentClassChange={setSub}
          />
        </Stack>
      }
    />
  );
};
