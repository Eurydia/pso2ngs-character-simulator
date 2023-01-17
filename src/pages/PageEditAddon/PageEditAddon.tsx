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

import { FormCharacterClassAddon, StatView } from "../../components";

import {
  CharacterClassAddon,
  AssetCharacterClassAddons,
  statObject,
  StatObject,
} from "../../assets";
import { GlobalAppContext } from "../../contexts";

// ------------------ Hunter ------------------
const HUNTER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.HUNTER_MELEE_WEAPON_UP;
const HUNTER_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.HUNTER_BURN_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
];

// ------------------ Fighter ------------------
const FIGHTER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.FIGHTER_CRIT_DAMAGE_UP;
const FIGHTER_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.FIGHTER_FREEZE_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
];

// ------------------ Ranger ------------------
const RANGER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.RANGER_RANGED_WEAPON_UP;
const RANGER_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.RANGER_PB_DAMAGE_UP,
  AssetCharacterClassAddons.RANGER_SHOCK_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
];

// ------------------ Gunner ------------------
const GUNNER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.GUNNER_ACTIVE_PB_RECOVERY;
const GUNNER_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.GUNNNER_ACTIVE_PP_RECOVERY,
  AssetCharacterClassAddons.GUNNER_BLIND_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
];

// ------------------ Force ------------------
const FORCE_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.FORCE_TECHNIQUE_WEAPON_UP;
const FORCE_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.FORCE_NATURAL_PP_RECOVERY,
  AssetCharacterClassAddons.FORCE_PANIC_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
];

// ------------------ Techter ------------------
const TECHTER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.TECHTER_NATURAL_PB_RECOVERY;
const TECHTER_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.TECHTER_DAMAGE_RES_UP,
  AssetCharacterClassAddons.TECHTER_POISON_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
];

// ------------------ Braver ------------------
const BRAVER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.BRAVER_CRIT_CHANCE_UP;
const BRAVER_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.BRAVER_HEALING_UP,
  AssetCharacterClassAddons.BRAVER_BURN_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
];

// ------------------ Bouncer ------------------
const BOUNCER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.BOUNCER_FREEZE_RES_UP;
const BOUNCER_SUB_ADDONS: CharacterClassAddon[] = [];

// ------------------ Waker ------------------
const WAKER_MAIN_ADDON: CharacterClassAddon =
  AssetCharacterClassAddons.WAKER_PP_UP;
const WAKER_SUB_ADDONS: CharacterClassAddon[] = [
  AssetCharacterClassAddons.WAKER_SHOCK_RES_UP,
  AssetCharacterClassAddons.GENERIC_HP_UP,
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
                <FormCharacterClassAddon
                  cardTitle="Hunter"
                  mainSkill={HUNTER_MAIN_ADDON}
                  subSkills={HUNTER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-hunter`}
                  onStatChange={setStatHunter}
                />
                <FormCharacterClassAddon
                  cardTitle="Ranger"
                  mainSkill={RANGER_MAIN_ADDON}
                  subSkills={RANGER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-ranger`}
                  onStatChange={setStatRanger}
                />
                <FormCharacterClassAddon
                  cardTitle="Force"
                  mainSkill={FORCE_MAIN_ADDON}
                  subSkills={FORCE_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-force`}
                  onStatChange={setStatForce}
                />
                <FormCharacterClassAddon
                  cardTitle="Braver"
                  mainSkill={BRAVER_MAIN_ADDON}
                  subSkills={BRAVER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-braver`}
                  onStatChange={setStatBraver}
                />
                <FormCharacterClassAddon
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
                <FormCharacterClassAddon
                  cardTitle="Fighter"
                  mainSkill={FIGHTER_MAIN_ADDON}
                  subSkills={FIGHTER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-fighter`}
                  onStatChange={setStatFighter}
                />
                <FormCharacterClassAddon
                  cardTitle="Gunner"
                  mainSkill={GUNNER_MAIN_ADDON}
                  subSkills={GUNNER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-gunner`}
                  onStatChange={setStatGunner}
                />
                <FormCharacterClassAddon
                  cardTitle="Techter"
                  mainSkill={TECHTER_MAIN_ADDON}
                  subSkills={TECHTER_SUB_ADDONS}
                  formStorageKey={`${pageStorageKey}-techter`}
                  onStatChange={setStatTechter}
                />
                <FormCharacterClassAddon
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
