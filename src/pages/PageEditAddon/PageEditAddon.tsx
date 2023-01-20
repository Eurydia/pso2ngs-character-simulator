import {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import { FormAddonSkill, StatView } from "../../components";

import {
  AddonSkill,
  AssetAddonSkills,
  statObject,
  StatObject,
} from "../../assets";

// ------------------ Hunter ------------------
const HUNTER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.HUNTER_MELEE_WEAPON_UP;
const HUNTER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.HUNTER_BURN_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

// ------------------ Fighter ------------------
const FIGHTER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.FIGHTER_CRIT_DAMAGE_UP;
const FIGHTER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.FIGHTER_FREEZE_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

// ------------------ Ranger ------------------
const RANGER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.RANGER_RANGED_WEAPON_UP;
const RANGER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.RANGER_PB_DAMAGE_UP,
  AssetAddonSkills.RANGER_SHOCK_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

// ------------------ Gunner ------------------
const GUNNER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.GUNNER_ACTIVE_PB_RECOVERY;
const GUNNER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.GUNNNER_ACTIVE_PP_RECOVERY,
  AssetAddonSkills.GUNNER_BLIND_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

// ------------------ Force ------------------
const FORCE_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.FORCE_TECHNIQUE_WEAPON_UP;
const FORCE_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.FORCE_NATURAL_PP_RECOVERY,
  AssetAddonSkills.FORCE_PANIC_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

// ------------------ Techter ------------------
const TECHTER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.TECHTER_NATURAL_PB_RECOVERY;
const TECHTER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.TECHTER_DAMAGE_RES_UP,
  AssetAddonSkills.TECHTER_POISON_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

// ------------------ Braver ------------------
const BRAVER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.BRAVER_CRIT_CHANCE_UP;
const BRAVER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.BRAVER_HEALING_UP,
  AssetAddonSkills.BRAVER_BURN_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

// ------------------ Bouncer ------------------
const BOUNCER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.BOUNCER_FREEZE_RES_UP;
const BOUNCER_SUB_ADDONS: AddonSkill[] = [];

// ------------------ Waker ------------------
const WAKER_MAIN_ADDON: AddonSkill = AssetAddonSkills.WAKER_PP_UP;
const WAKER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.WAKER_SHOCK_RES_UP,
  AssetAddonSkills.GENERIC_HP_UP,
];

type PageEditAddonProps = {
  onStatChange: (stat: StatObject) => void;
};
export const PageEditAddon: FC<PageEditAddonProps> = (props) => {
  const { onStatChange } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const [statHunter, setStatHunter] = useState((): StatObject => {
    return statObject();
  });
  const [statFighter, setStatFighter] = useState((): StatObject => {
    return statObject();
  });
  const [statRanger, setStatRanger] = useState((): StatObject => {
    return statObject();
  });
  const [statGunner, setStatGunner] = useState((): StatObject => {
    return statObject();
  });
  const [statForce, setStatForce] = useState((): StatObject => {
    return statObject();
  });
  const [statTechter, setStatTechter] = useState((): StatObject => {
    return statObject();
  });
  const [statBraver, setStatBraver] = useState((): StatObject => {
    return statObject();
  });
  const [statBouncer, setStatBouncer] = useState((): StatObject => {
    return statObject();
  });
  const [statWaker, setStatWaker] = useState((): StatObject => {
    return statObject();
  });

  const stat_total = useMemo((): StatObject => {
    let stat = StatObject.merge(statHunter, statFighter);
    stat = StatObject.merge(stat, statRanger);
    stat = StatObject.merge(stat, statGunner);
    stat = StatObject.merge(stat, statForce);
    stat = StatObject.merge(stat, statTechter);
    stat = StatObject.merge(stat, statBraver);
    stat = StatObject.merge(stat, statBouncer);
    return StatObject.merge(stat, statWaker);
  }, [
    statHunter,
    statFighter,
    statRanger,
    statGunner,
    statForce,
    statTechter,
    statBraver,
    statBouncer,
    statWaker,
  ]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <Fragment>
      <Container maxWidth="lg">
        <Tooltip
          placement="top"
          title={<Typography>Open summary</Typography>}
        >
          <Fab
            onClick={handleDialogOpen}
            sx={{
              position: "fixed",
              bottom: "24px",
              right: "24px",
            }}
          >
            <BarChartRounded color="primary" />
          </Fab>
        </Tooltip>
        <Box marginY={4}>
          <Grid
            container
            spacing={3}
            columns={{ xs: 1, sm: 1, md: 2 }}
          >
            <Grid item xs={1}>
              <Stack spacing={3}>
                <FormAddonSkill
                  cardTitle="Hunter"
                  mainSkill={HUNTER_MAIN_ADDON}
                  subSkills={HUNTER_SUB_ADDONS}
                  formStorageKey="addon-hunter"
                  onStatChange={setStatHunter}
                />
                <FormAddonSkill
                  cardTitle="Ranger"
                  mainSkill={RANGER_MAIN_ADDON}
                  subSkills={RANGER_SUB_ADDONS}
                  formStorageKey="addon-ranger"
                  onStatChange={setStatRanger}
                />
                <FormAddonSkill
                  cardTitle="Force"
                  mainSkill={FORCE_MAIN_ADDON}
                  subSkills={FORCE_SUB_ADDONS}
                  formStorageKey="addon-force"
                  onStatChange={setStatForce}
                />
                <FormAddonSkill
                  cardTitle="Braver"
                  mainSkill={BRAVER_MAIN_ADDON}
                  subSkills={BRAVER_SUB_ADDONS}
                  formStorageKey="addon-braver"
                  onStatChange={setStatBraver}
                />
                <FormAddonSkill
                  cardTitle="Waker"
                  mainSkill={WAKER_MAIN_ADDON}
                  subSkills={WAKER_SUB_ADDONS}
                  formStorageKey="addon-waker"
                  onStatChange={setStatWaker}
                />
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={2}>
                <FormAddonSkill
                  cardTitle="Fighter"
                  mainSkill={FIGHTER_MAIN_ADDON}
                  subSkills={FIGHTER_SUB_ADDONS}
                  formStorageKey="addon-fighter"
                  onStatChange={setStatFighter}
                />
                <FormAddonSkill
                  cardTitle="Gunner"
                  mainSkill={GUNNER_MAIN_ADDON}
                  subSkills={GUNNER_SUB_ADDONS}
                  formStorageKey="addon-gunner"
                  onStatChange={setStatGunner}
                />
                <FormAddonSkill
                  cardTitle="Techter"
                  mainSkill={TECHTER_MAIN_ADDON}
                  subSkills={TECHTER_SUB_ADDONS}
                  formStorageKey="addon-techter"
                  onStatChange={setStatTechter}
                />
                <FormAddonSkill
                  cardTitle="Bouncer"
                  mainSkill={BOUNCER_MAIN_ADDON}
                  subSkills={BOUNCER_SUB_ADDONS}
                  formStorageKey="addon-bouncer"
                  onStatChange={setStatBouncer}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle fontSize="x-large" fontWeight="bold">
          Addon summary
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <StatView stat={stat_total} maxHeight="" />
          </Stack>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
