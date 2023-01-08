import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/material";
import { FC } from "react";
import { ActionContext } from "../../assets";
import { CustomSwitch } from "./CustomSwitch";

type FormContextEditorProps = {
  formValue: ActionContext;
  onFormValueChange: (
    value: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
export const FormContextEditor: FC<FormContextEditorProps> = (
  props,
) => {
  const { formValue, onFormValueChange } = props;

  const handleTimeDaytimeChange = () => {
    onFormValueChange(({ time, ...rest }) => {
      return {
        ...rest,
        time: { ...time, isNightTime: false, isDayTime: true },
      };
    });
  };
  const handleTimeNightTimeChange = () => {
    onFormValueChange(({ time, ...rest }) => {
      return {
        ...rest,
        time: { ...time, isNightTime: true, isDayTime: false },
      };
    });
  };
  const handleTimeSezunChange = () => {
    onFormValueChange(({ time, ...rest }) => {
      return {
        ...rest,
        time: { ...time, isDuringSezunEvent: true },
      };
    });
  };

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
      <CardContent>
        <Box>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Time</FormLabel>
              <CustomSwitch
                slotLabel="Is daytime"
                slotTooltip=""
                checked={formValue.time && formValue.time.isDayTime}
                onClick={handleTimeDaytimeChange}
              />
              <CustomSwitch
                slotLabel="Is nighttime"
                slotTooltip=""
                checked={formValue.time && formValue.time.isNightTime}
                onClick={handleTimeNightTimeChange}
              />
              <CustomSwitch
                slotLabel="Is during Sezun"
                slotTooltip=""
                checked={
                  formValue.time && formValue.time.isDuringSezunEvent
                }
                onClick={handleTimeSezunChange}
              />
            </FormControl>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
