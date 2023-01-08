import { Card, CardContent, CardHeader } from "@mui/material";
import { FC } from "react";
import { ActionContext } from "../../assets";

type FormContextEditorProps = {
  formValue: ActionContext;
  onFormValueChange: (
    value: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
export const FormContextEditor: FC<FormContextEditorProps> = (
  props,
) => {
  return (
    <Card>
      <CardHeader
        title="Context"
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
        sx={{
          padding: 1,
        }}
      />
      <CardContent></CardContent>
    </Card>
  );
};
