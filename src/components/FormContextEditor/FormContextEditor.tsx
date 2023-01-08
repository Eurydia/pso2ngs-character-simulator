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
import {
  ActionContext,
  LocationContext,
  TimeContext,
} from "../../assets";
import { CustomSwitch } from "./CustomSwitch";

type ContextEditorTimeProps = {
  value: TimeContext;
  onValueChange: (
    value: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorTime: FC<ContextEditorTimeProps> = (props) => {
  const { value, onValueChange } = props;
  const { isDayTime, isDuringSezunEvent, isNightTime } = value;

  const handleDayTimeChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.time = { ...next.time, isDayTime: !next.time.isDayTime };
      if (next.time.isDayTime) {
        next.time.isNightTime = false;
      }
      return next;
    });
  };
  const handleNightTimeChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.time = {
        ...next.time,
        isNightTime: !next.time.isNightTime,
      };
      if (next.time.isNightTime) {
        next.time.isDayTime = false;
      }
      return next;
    });
  };
  const handleSezunChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.time = {
        ...next.time,
        isDuringSezunEvent: !next.time.isDuringSezunEvent,
      };
      return next;
    });
  };
  return (
    <FormControl>
      <FormLabel>Time</FormLabel>
      <CustomSwitch
        slotLabel="Is daytime"
        slotTooltip=""
        checked={isDayTime}
        onClick={handleDayTimeChange}
      />
      <CustomSwitch
        slotLabel="Is nighttime"
        slotTooltip=""
        checked={isNightTime}
        onClick={handleNightTimeChange}
      />
      <CustomSwitch
        slotLabel="Is during Sezun"
        slotTooltip=""
        checked={isDuringSezunEvent}
        onClick={handleSezunChange}
      />
    </FormControl>
  );
};

type ContextEditorLocationProps = {
  value: LocationContext;
  onValueChange: (
    value: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorLocation: FC<ContextEditorLocationProps> = (
  props,
) => {
  const { value, onValueChange } = props;
  const { kvaris, geometricLabyrinth } = value;

  const handleKvarisChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.location = {
        ...next.location,
        kvaris: !next.location.kvaris,
      };
      if (next.location.kvaris) {
        next.location.geometricLabyrinth = false;
      }
      return next;
    });
  };
  const handleGeoChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.location = {
        ...next.location,
        geometricLabyrinth: !next.location.geometricLabyrinth,
      };
      if (next.location.geometricLabyrinth) {
        next.location.kvaris = false;
      }
      return next;
    });
  };
  return (
    <FormControl>
      <FormLabel>Location</FormLabel>
      <CustomSwitch
        slotLabel="In Kvaris"
        slotTooltip=""
        checked={kvaris}
        onClick={handleKvarisChange}
      />
      <CustomSwitch
        slotLabel="In Geometric Labyrinth"
        slotTooltip=""
        checked={geometricLabyrinth}
        onClick={handleGeoChange}
      />
    </FormControl>
  );
};

type FormContextEditorProps = {
  formData: ActionContext;
  onFormDataChange: (
    data: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
export const FormContextEditor: FC<FormContextEditorProps> = (
  props,
) => {
  const { formData, onFormDataChange } = props;
  const { location, character, time, target } = formData;

  return (
    <Card variant="outlined" sx={{ padding: 1 }}>
      <CardHeader
        title="Context"
        titleTypographyProps={{
          fontWeight: "bold",
          fontSize: "x-large",
        }}
      />
      <CardContent>
        <Box>
          <Stack spacing={2}>
            <ContextEditorTime
              value={time}
              onValueChange={onFormDataChange}
            />
            <ContextEditorLocation
              value={location}
              onValueChange={onFormDataChange}
            />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
