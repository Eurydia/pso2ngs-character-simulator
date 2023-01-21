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
  List,
  ListSubheader,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import { CustomSwitch } from "./CustomSwitch";
import { AppContext } from "../../contexts";
import {
  ActionContext,
  CharacterContext,
  LocationContext,
  TargetContext,
  TimeContext,
} from "../../assets";
import { ListItemForm } from "./ListItemForm";
import {
  CheckRounded,
  DarkModeRounded,
  LightModeRounded,
  ToggleOffRounded,
  ToggleOnRounded,
} from "@mui/icons-material";
import { ListForm } from "./ListForm";

type ContextEditorTimeProps = {
  contextTime: TimeContext;
  onContextChange: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorTime: FC<ContextEditorTimeProps> = (props) => {
  const { contextTime, onContextChange } = props;

  const { isDayTime, isDuringSezunEvent } = contextTime;

  const handleDayTimeChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.time.isDayTime = !prev.time.isDayTime;
      return next;
    });
  }, []);
  const handleSezunChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.time.isDuringSezunEvent = !prev.time.isDuringSezunEvent;
      return next;
    });
  }, []);

  return (
    <ListForm label="Time">
      <ListItemForm
        labelOn="day"
        labelOff="night"
        checked={isDayTime}
        onClick={handleDayTimeChange}
      />
      <ListItemForm
        labelOn="during sezun"
        checked={isDuringSezunEvent}
        onClick={handleSezunChange}
      />
    </ListForm>
  );
};

type ContextEditorLocationProps = {
  contextLocation: LocationContext;
  onContextChange: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorLocation: FC<ContextEditorLocationProps> = (
  props,
) => {
  const { contextLocation, onContextChange } = props;

  const { kvaris, geometricLabyrinth } = contextLocation;

  const handleKvarisChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.location.kvaris = !prev.location.kvaris;
      if (next.location.kvaris) {
        next.location.geometricLabyrinth = false;
      }
      return next;
    });
  }, []);
  const handleGeoChange = useCallback(() => {
    onContextChange((prev) => {
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
    <ListForm label="Location">
      <ListItemForm
        labelOn="Kvaris region"
        checked={kvaris}
        onClick={handleKvarisChange}
      />
      <ListItemForm
        labelOn="Geometric Labyrinth"
        checked={geometricLabyrinth}
        onClick={handleGeoChange}
      />
    </ListForm>
  );
};

type ContextEditorTargetProps = {
  contextTarget: TargetContext;
  onContextChange: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorTarget: FC<ContextEditorTargetProps> = (props) => {
  const { contextTarget, onContextChange } = props;
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
  } = contextTarget;

  const handleBossChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isBoss = !prev.target.isBoss;
      return next;
    });
  }, []);
  const handleDollsChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isDolls = !prev.target.isDolls;
      return next;
    });
  }, []);
  const handleDownedChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isDowned = !prev.target.isDowned;
      return next;
    });
  }, []);
  const handleWeakFireChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToFire = !prev.target.isWeakToFire;
      return next;
    });
  }, []);
  const handleWeakDarkChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToDark = !prev.target.isWeakToDark;
      return next;
    });
  }, []);
  const handleWeakIceChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToIce = !prev.target.isWeakToIce;
      return next;
    });
  }, []);
  const handleWeakWindChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToWind = !prev.target.isWeakToWind;
      return next;
    });
  }, []);
  const handleWeakLightningChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToLightning = !prev.target.isWeakToLightning;
      return next;
    });
  }, []);
  const handleWeakLightChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.target.isWeakToLight = !prev.target.isWeakToLight;
      return next;
    });
  }, []);
  return (
    <ListForm label="Target">
      <ListItemForm
        labelOn="is boss"
        labelOff="is non-boss"
        checked={isBoss}
        onClick={handleBossChange}
      />
      <ListItemForm
        labelOn="is DOLLs"
        checked={isDolls}
        onClick={handleDollsChange}
      />
      <ListItemForm
        labelOn="is downed"
        checked={isDowned}
        onClick={handleDownedChange}
      />
      <Grid container columns={{ xs: 1, sm: 2 }}>
        <Grid item xs={1}>
          <ListItemForm
            labelOn="is weak to FIRE"
            checked={isWeakToFire}
            onClick={handleWeakFireChange}
          />
        </Grid>
        <Grid item xs={1}>
          <ListItemForm
            labelOn="is weak to ICE"
            checked={isWeakToIce}
            onClick={handleWeakIceChange}
          />
        </Grid>
        <Grid item xs={1}>
          <ListItemForm
            labelOn="is weak to LIGHTNING"
            checked={isWeakToLightning}
            onClick={handleWeakLightningChange}
          />
        </Grid>
        <Grid item xs={1}>
          <ListItemForm
            labelOn="is weak to WIND"
            checked={isWeakToWind}
            onClick={handleWeakWindChange}
          />
        </Grid>
        <Grid item xs={1}>
          <ListItemForm
            labelOn="is weak to LIGHT"
            checked={isWeakToLight}
            onClick={handleWeakLightChange}
          />
        </Grid>
        <Grid item xs={1}>
          <ListItemForm
            labelOn="is weak to DARK"
            checked={isWeakToDark}
            onClick={handleWeakDarkChange}
          />
        </Grid>
      </Grid>
    </ListForm>
  );
};

type ContextEditorCharacterProps = {
  contextCharacter: CharacterContext;
  onContextChange: (
    next_context:
      | ActionContext
      | ((prev_context: ActionContext) => ActionContext),
  ) => void;
};
const ContextEditorCharacter: FC<ContextEditorCharacterProps> = (
  props,
) => {
  const { contextCharacter, onContextChange } = props;
  const {
    isAttacking,
    isAttackingWeakPoint,
    hasActiveBarrier,
    hasCriticallyHit,
    hasTakenDamage,
    hasDodgedAttack,
  } = contextCharacter;

  const handleAttackChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.character.isAttacking = !prev.character.isAttacking;
      return next;
    });
  }, []);
  const handleAttackWeakPointChange = useCallback(() => {
    onContextChange((prev) => {
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
    onContextChange((prev) => {
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
    onContextChange((prev) => {
      const next = { ...prev };
      next.character.hasDodgedAttack =
        !prev.character.hasDodgedAttack;
      return next;
    });
  }, []);
  const handleDamagedChange = useCallback(() => {
    onContextChange((prev) => {
      const next = { ...prev };
      next.character.hasTakenDamage = !prev.character.hasTakenDamage;
      return next;
    });
  }, []);

  return (
    <ListForm label="Character">
      <ListItemForm
        labelOn="is in combat"
        checked={isAttacking}
        onClick={handleAttackChange}
      />
      <ListItemForm
        labelOn="is attacking weak point"
        checked={isAttackingWeakPoint}
        onClick={handleAttackWeakPointChange}
      />
      <ListItemForm
        labelOn="has critically hit"
        checked={hasCriticallyHit}
        onClick={handleCriticallyHitChange}
      />
      <ListItemForm
        labelOn="has taken damage"
        checked={hasTakenDamage}
        onClick={handleDamagedChange}
      />
      <ListItemForm
        labelOn="has dodged an attack"
        checked={hasDodgedAttack}
        onClick={handleDodgedChange}
      />
    </ListForm>
  );
};

type FormContextEditorProps = {};
export const FormContextEditor: FC<FormContextEditorProps> = (
  props,
) => {
  const { context, updateContext } = useContext(AppContext);

  const { time, location, character, target } = context;

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
          <ContextEditorTime
            contextTime={time}
            onContextChange={updateContext}
          />
          <ContextEditorLocation
            contextLocation={location}
            onContextChange={updateContext}
          />
          <ContextEditorTarget
            contextTarget={target}
            onContextChange={updateContext}
          />
          <ContextEditorCharacter
            contextCharacter={character}
            onContextChange={updateContext}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
