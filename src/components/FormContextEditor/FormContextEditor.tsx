import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import {
  ActionContext,
  CharacterContext,
  LocationContext,
  TargetContext,
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
  const { isDayTime, isDuringSezunEvent } = value;

  const handleDayTimeChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.time.isDayTime = !prev.time.isDayTime;
      return next;
    });
  };
  const handleSezunChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.time.isDuringSezunEvent = !prev.time.isDuringSezunEvent;
      return next;
    });
  };
  return (
    <FormControl>
      <FormLabel>Time</FormLabel>
      <CustomSwitch
        slotLabel="Sezun event"
        slotTooltip=""
        checked={isDuringSezunEvent}
        onClick={handleSezunChange}
      />
      <Stack spacing={1} alignItems="center" direction="row">
        <Typography>Night time</Typography>
        <CustomSwitch
          slotLabel=""
          slotTooltip=""
          checked={isDayTime}
          onClick={handleDayTimeChange}
        />
        <Typography>Day time</Typography>
      </Stack>
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
      next.location.kvaris = !prev.location.kvaris;
      if (next.location.kvaris) {
        next.location.geometricLabyrinth = false;
      }
      return next;
    });
  };
  const handleGeoChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.location.geometricLabyrinth =
        !prev.location.geometricLabyrinth;
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
        slotLabel="in Kvaris region"
        slotTooltip=""
        checked={kvaris}
        onClick={handleKvarisChange}
      />
      <CustomSwitch
        slotLabel="in Geometric Labyrinth"
        slotTooltip=""
        checked={geometricLabyrinth}
        onClick={handleGeoChange}
      />
    </FormControl>
  );
};

type ContextEditorTargetProps = {
  value: TargetContext;
  onValueChange: (
    value: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorTarget: FC<ContextEditorTargetProps> = (props) => {
  const { value, onValueChange } = props;
  const {
    isBoss,
    isDolls,
    isDowned,
    isWeakToDark,
    isWeakToFire,
    isWeakToIce,
    isWeakToLight,
    isWeakToLightning,
    isWeakToWind,
  } = value;

  const handleBossChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isBoss = !prev.target.isBoss;
      return next;
    });
  };
  const handleDollsChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isDolls = !prev.target.isDolls;
      return next;
    });
  };
  const handleDownedChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isDowned = !prev.target.isDowned;
      return next;
    });
  };
  const handleWeakFireChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToFire = !prev.target.isWeakToFire;
      return next;
    });
  };
  const handleWeakDarkChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToDark = !prev.target.isWeakToDark;
      return next;
    });
  };
  const handleWeakIceChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToIce = !prev.target.isWeakToIce;
      return next;
    });
  };
  const handleWeakWindChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToWind = !prev.target.isWeakToWind;
      return next;
    });
  };
  const handleWeakLightningChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToLightning = !prev.target.isWeakToLightning;
      return next;
    });
  };
  const handleWeakLightChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToLight = !prev.target.isWeakToLight;
      return next;
    });
  };
  return (
    <FormControl>
      <FormLabel>Target</FormLabel>
      <Stack spacing={1} direction="row" alignItems="center">
        <Typography>Non-boss enemy</Typography>
        <CustomSwitch
          slotLabel=""
          slotTooltip=""
          checked={isBoss}
          onClick={handleBossChange}
        />
        <Typography>Boss enemy</Typography>
      </Stack>
      <CustomSwitch
        slotLabel="is DOLLS"
        slotTooltip=""
        checked={isDolls}
        onClick={handleDollsChange}
      />
      <CustomSwitch
        slotLabel="is downed"
        slotTooltip=""
        checked={isDowned}
        onClick={handleDownedChange}
      />
      <Grid container columns={{ xs: 1, sm: 2 }}>
        <Grid item xs={1}>
          <CustomSwitch
            slotLabel="is weak to FIRE"
            slotTooltip=""
            checked={isWeakToFire}
            onClick={handleWeakFireChange}
          />
        </Grid>
        <Grid item xs={1}>
          <CustomSwitch
            slotLabel="is weak to ICE"
            slotTooltip=""
            checked={isWeakToIce}
            onClick={handleWeakIceChange}
          />
        </Grid>
        <Grid item xs={1}>
          <CustomSwitch
            slotLabel="is weak to LIGHTNING"
            slotTooltip=""
            checked={isWeakToLightning}
            onClick={handleWeakLightningChange}
          />
        </Grid>
        <Grid item xs={1}>
          <CustomSwitch
            slotLabel="is weak to WIND"
            slotTooltip=""
            checked={isWeakToWind}
            onClick={handleWeakWindChange}
          />
        </Grid>
        <Grid item xs={1}>
          <CustomSwitch
            slotLabel="is weak to LIGHT"
            slotTooltip=""
            checked={isWeakToLight}
            onClick={handleWeakLightChange}
          />
        </Grid>
        <Grid item xs={1}>
          <CustomSwitch
            slotLabel="is weak to DARK"
            slotTooltip=""
            checked={isWeakToDark}
            onClick={handleWeakDarkChange}
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

type ContextEditorCharacterProps = {
  value: CharacterContext;
  onValueChange: (
    value: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorCharacter: FC<ContextEditorCharacterProps> = (
  props,
) => {
  const { value, onValueChange } = props;
  const {
    isAttacking,
    isAttackingBlight,
    isAttackingWeakPoint,
    hasActiveBarrier,
    hasCriticallyHit,
    hasTakenDamage,
    hasDodgedAttack,
  } = value;

  const handleAttackChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.character.isAttacking = !prev.character.isAttacking;
      return next;
    });
  };
  const handleAttackBlightChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.character.isAttackingBlight =
        !prev.character.isAttackingBlight;
      if (next.character.isAttackingBlight) {
        next.character.isAttacking = true;
      }
      return next;
    });
  };
  const handleAttackWeakPointChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.character.isAttackingWeakPoint =
        !prev.character.isAttackingWeakPoint;
      if (next.character.isAttackingWeakPoint) {
        next.character.isAttacking = true;
      }
      return next;
    });
  };
  const handleCriticallyHitChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.character.hasCriticallyHit =
        !prev.character.hasCriticallyHit;
      if (next.character.hasCriticallyHit) {
        next.character.isAttacking = true;
      }
      return next;
    });
  };
  const handleDodgedChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.character.hasDodgedAttack =
        !prev.character.hasDodgedAttack;
      return next;
    });
  };
  const handleDamagedChange = () => {
    onValueChange((prev) => {
      const next = { ...prev };
      next.character.hasTakenDamage = !prev.character.hasTakenDamage;
      return next;
    });
  };

  return (
    <FormControl>
      <FormLabel>Character</FormLabel>
      <CustomSwitch
        slotLabel="is in combat"
        slotTooltip=""
        checked={isAttacking}
        onClick={handleAttackChange}
      />
      <CustomSwitch
        slotLabel="is attacking blight mark"
        slotTooltip=""
        checked={isAttackingBlight}
        onClick={handleAttackBlightChange}
      />
      <CustomSwitch
        slotLabel="is attacking weak point"
        slotTooltip=""
        checked={isAttackingWeakPoint}
        onClick={handleAttackWeakPointChange}
      />
      <CustomSwitch
        slotLabel="has critically hit"
        slotTooltip=""
        checked={hasCriticallyHit}
        onClick={handleCriticallyHitChange}
      />
      <CustomSwitch
        slotLabel="has taken damage"
        slotTooltip=""
        checked={hasTakenDamage}
        onClick={handleDamagedChange}
      />
      <CustomSwitch
        slotLabel="has dodged an attack"
        slotTooltip=""
        checked={hasDodgedAttack}
        onClick={handleDodgedChange}
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
          <Stack spacing={2} divider={<Divider flexItem />}>
            <ContextEditorTime
              value={time}
              onValueChange={onFormDataChange}
            />
            <ContextEditorLocation
              value={location}
              onValueChange={onFormDataChange}
            />
            <ContextEditorTarget
              value={target}
              onValueChange={onFormDataChange}
            />
            <ContextEditorCharacter
              value={character}
              onValueChange={onFormDataChange}
            />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
