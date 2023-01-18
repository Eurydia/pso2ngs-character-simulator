import { FC, useCallback, useContext } from "react";
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

import {
  ActionContext,
  CharacterContext,
  LocationContext,
  TargetContext,
  TimeContext,
} from "../../assets";

import { CustomSwitch } from "./CustomSwitch";
import { AppContext } from "../../contexts";

type ContextEditorTimeProps = {};
const ContextEditorTime: FC<ContextEditorTimeProps> = (props) => {
  const { context, setContext } = useContext(AppContext);
  const { isDayTime, isDuringSezunEvent } = context.time;
  const handleDayTimeChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.time.isDayTime = !prev.time.isDayTime;
      return next;
    });
  }, []);
  const handleSezunChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.time.isDuringSezunEvent = !prev.time.isDuringSezunEvent;
      return next;
    });
  }, []);

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

type ContextEditorLocationProps = {};
const ContextEditorLocation: FC<ContextEditorLocationProps> = (
  props,
) => {
  const { context, setContext } = useContext(AppContext);
  const { kvaris, geometricLabyrinth } = context.location;

  const handleKvarisChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.location.kvaris = !prev.location.kvaris;
      if (next.location.kvaris) {
        next.location.geometricLabyrinth = false;
      }
      return next;
    });
  }, []);
  const handleGeoChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.location.geometricLabyrinth =
        !prev.location.geometricLabyrinth;
      if (next.location.geometricLabyrinth) {
        next.location.kvaris = false;
      }
      return next;
    });
  }, []);
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

type ContextEditorTargetProps = {};
const ContextEditorTarget: FC<ContextEditorTargetProps> = (props) => {
  const { context, setContext } = useContext(AppContext);
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
  } = context.target;

  const handleBossChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isBoss = !prev.target.isBoss;
      return next;
    });
  }, []);
  const handleDollsChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isDolls = !prev.target.isDolls;
      return next;
    });
  }, []);
  const handleDownedChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isDowned = !prev.target.isDowned;
      return next;
    });
  }, []);
  const handleWeakFireChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isWeakToFire = !prev.target.isWeakToFire;
      return next;
    });
  }, []);
  const handleWeakDarkChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isWeakToDark = !prev.target.isWeakToDark;
      return next;
    });
  }, []);
  const handleWeakIceChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isWeakToIce = !prev.target.isWeakToIce;
      return next;
    });
  }, []);
  const handleWeakWindChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isWeakToWind = !prev.target.isWeakToWind;
      return next;
    });
  }, []);
  const handleWeakLightningChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isWeakToLightning = !prev.target.isWeakToLightning;
      return next;
    });
  }, []);
  const handleWeakLightChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.target.isWeakToLight = !prev.target.isWeakToLight;
      return next;
    });
  }, []);
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

type ContextEditorCharacterProps = {};
const ContextEditorCharacter: FC<ContextEditorCharacterProps> = (
  props,
) => {
  const { context, setContext } = useContext(AppContext);
  const {
    isAttacking,
    isAttackingBlight,
    isAttackingWeakPoint,
    hasActiveBarrier,
    hasCriticallyHit,
    hasTakenDamage,
    hasDodgedAttack,
  } = context.character;

  const handleAttackChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.character.isAttacking = !prev.character.isAttacking;
      return next;
    });
  }, []);
  const handleAttackBlightChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.character.isAttackingBlight =
        !prev.character.isAttackingBlight;
      if (next.character.isAttackingBlight) {
        next.character.isAttacking = true;
      }
      return next;
    });
  }, []);
  const handleAttackWeakPointChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.character.isAttackingWeakPoint =
        !prev.character.isAttackingWeakPoint;
      if (next.character.isAttackingWeakPoint) {
        next.character.isAttacking = true;
      }
      return next;
    });
  }, []);
  const handleCriticallyHitChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.character.hasCriticallyHit =
        !prev.character.hasCriticallyHit;
      if (next.character.hasCriticallyHit) {
        next.character.isAttacking = true;
      }
      return next;
    });
  }, []);
  const handleDodgedChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.character.hasDodgedAttack =
        !prev.character.hasDodgedAttack;
      return next;
    });
  }, []);
  const handleDamagedChange = useCallback(() => {
    setContext((prev) => {
      const next = { ...prev };
      next.character.hasTakenDamage = !prev.character.hasTakenDamage;
      return next;
    });
  }, []);

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

type FormContextEditorProps = {};
export const FormContextEditor: FC<FormContextEditorProps> = (
  props,
) => {
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
            <ContextEditorTime />
            <ContextEditorLocation />
            <ContextEditorTarget />
            <ContextEditorCharacter />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
