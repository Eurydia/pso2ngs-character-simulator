import {
  FC,
  Fragment,
  useCallback,
  useContext,
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

import { FormAddon, StatView } from "../../components";

import {
  ActionContext,
  AddonSkill,
  AssetAddonSkills,
  statObject,
  StatObject,
} from "../../assets";
import { GlobalAppContext } from "../../contexts";

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
  pageStorageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditAddon: FC<PageEditAddonProps> = (props) => {
  const { pageStorageKey, onStatChange } = props;

  const context = useContext(GlobalAppContext);

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const [statHunter, setStatHunter] = useState<StatObject>(
    statObject(),
  );
  const [statFighter, setStatFighter] = useState<StatObject>(
    statObject(),
  );
  const [statRanger, setStatRanger] = useState<StatObject>(
    statObject(),
  );
  const [statGunner, setStatGunner] = useState<StatObject>(
    statObject(),
  );
  const [statForce, setStatForce] = useState<StatObject>(
    statObject(),
  );
  const [statTechter, setStatTechter] = useState<StatObject>(
    statObject(),
  );
  const [statBraver, setStatBraver] = useState<StatObject>(
    statObject(),
  );
  const [statBouncer, setStatBouncer] = useState<StatObject>(
    statObject(),
  );
  const [statWaker, setStatWaker] = useState<StatObject>(
    statObject(),
  );

  const stat_total = useMemo((): StatObject => {
    let result = StatObject.merge(statHunter, statFighter);
    result = StatObject.merge(result, statRanger);
    result = StatObject.merge(result, statGunner);
    result = StatObject.merge(result, statForce);
    result = StatObject.merge(result, statTechter);
    result = StatObject.merge(result, statBraver);
    result = StatObject.merge(result, statBouncer);
    return StatObject.merge(result, statWaker);
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
            <BarChartRounded />
          </Fab>
        </Tooltip>
        <Box marginY={4}>
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, sm: 1, md: 2 }}
          >
            <Grid item xs={1}>
              <Stack spacing={2}>
                <FormAddon
                  cardTitle="Hunter"
                  mainSkill={HUNTER_MAIN_ADDON}
                  subSkills={HUNTER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-hunter`}
                  onStatChange={setStatHunter}
                />
                <FormAddon
                  cardTitle="Ranger"
                  mainSkill={RANGER_MAIN_ADDON}
                  subSkills={RANGER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-ranger`}
                  onStatChange={setStatRanger}
                />
                <FormAddon
                  cardTitle="Force"
                  mainSkill={FORCE_MAIN_ADDON}
                  subSkills={FORCE_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-force`}
                  onStatChange={setStatForce}
                />
                <FormAddon
                  cardTitle="Braver"
                  mainSkill={BRAVER_MAIN_ADDON}
                  subSkills={BRAVER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-braver`}
                  onStatChange={setStatBraver}
                />
                <FormAddon
                  cardTitle="Waker"
                  mainSkill={WAKER_MAIN_ADDON}
                  subSkills={WAKER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-waker`}
                  onStatChange={setStatWaker}
                />
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={2}>
                <FormAddon
                  cardTitle="Fighter"
                  mainSkill={FIGHTER_MAIN_ADDON}
                  subSkills={FIGHTER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-fighter`}
                  onStatChange={setStatFighter}
                />
                <FormAddon
                  cardTitle="Gunner"
                  mainSkill={GUNNER_MAIN_ADDON}
                  subSkills={GUNNER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-gunner`}
                  onStatChange={setStatGunner}
                />
                <FormAddon
                  cardTitle="Techter"
                  mainSkill={TECHTER_MAIN_ADDON}
                  subSkills={TECHTER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-techter`}
                  onStatChange={setStatTechter}
                />
                <FormAddon
                  cardTitle="Bouncer"
                  mainSkill={BOUNCER_MAIN_ADDON}
                  subSkills={BOUNCER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-bouncer`}
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
