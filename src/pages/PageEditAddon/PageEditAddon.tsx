import { FC, Fragment, useEffect, useMemo, useState } from "react";
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
} from "@mui/material";

import { FormAddon, StatView } from "../../components";

import {
  ActionContext,
  AddonSkill,
  AssetAddonSkills,
  StatObject,
} from "../../assets";
import { useFormAddon } from "../../hooks";

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
  storage_key: string;
  context: ActionContext;
  isVisible: boolean;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditAddon: FC<PageEditAddonProps> = (props) => {
  const { storage_key, isVisible, context, onStatChange } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const {
    mainLevel: huMainLevel,
    subLevels: huSubLevels,
    subActiveIndexes: huSubActiveIndexes,
    setMainLevel: huSetMainLevel,
    setSubLevel: huSetSubLevel,
    setSubActiveIndex: huSetSubActiveIndex,
    getStatObject: huGetStatObject,
  } = useFormAddon(
    `${storage_key}-hunter`,
    HUNTER_MAIN_ADDON,
    HUNTER_SUB_ADDONS,
  );
  const {
    mainLevel: fiMainLevel,
    subLevels: fiSubLevels,
    subActiveIndexes: fiSubActiveIndexes,
    setMainLevel: fiSetMainLevel,
    setSubLevel: fiSetSubLevel,
    setSubActiveIndex: fiSetSubActiveIndex,
    getStatObject: fiGetStatObject,
  } = useFormAddon(
    `${storage_key}-fighter`,
    FIGHTER_MAIN_ADDON,
    FIGHTER_SUB_ADDONS,
  );
  const {
    mainLevel: raMainLevel,
    subLevels: raSubLevels,
    subActiveIndexes: raSubActiveIndexes,
    setMainLevel: raSetMainLevel,
    setSubLevel: raSetSubLevel,
    setSubActiveIndex: raSetSubActiveIndex,
    getStatObject: raGetStatObject,
  } = useFormAddon(
    `${storage_key}-ranger`,
    RANGER_MAIN_ADDON,
    RANGER_SUB_ADDONS,
  );
  const {
    mainLevel: guMainLevel,
    subLevels: guSubLevels,
    subActiveIndexes: guSubActiveIndexes,
    setMainLevel: guSetMainLevel,
    setSubLevel: guSetSubLevel,
    setSubActiveIndex: guSetSubActiveIndex,
    getStatObject: guGetStatObject,
  } = useFormAddon(
    `${storage_key}-gunner`,
    GUNNER_MAIN_ADDON,
    GUNNER_SUB_ADDONS,
  );
  const {
    mainLevel: foMainLevel,
    subLevels: foSubLevels,
    subActiveIndexes: foSubActiveIndexes,
    setMainLevel: foSetMainLevel,
    setSubLevel: foSetSubLevel,
    setSubActiveIndex: foSetSubActiveIndex,
    getStatObject: foGetStatObject,
  } = useFormAddon(
    `${storage_key}-force`,
    FORCE_MAIN_ADDON,
    FORCE_SUB_ADDONS,
  );
  const {
    mainLevel: teMainLevel,
    subLevels: teSubLevels,
    subActiveIndexes: teSubActiveIndexes,
    setMainLevel: teSetMainLevel,
    setSubLevel: teSetSubLevel,
    setSubActiveIndex: teSetSubActiveIndex,
    getStatObject: teGetStatObject,
  } = useFormAddon(
    `${storage_key}-techter`,
    TECHTER_MAIN_ADDON,
    TECHTER_SUB_ADDONS,
  );
  const {
    mainLevel: brMainLevel,
    subLevels: brSubLevels,
    subActiveIndexes: brSubActiveIndexes,
    setMainLevel: brSetMainLevel,
    setSubLevel: brSetSubLevel,
    setSubActiveIndex: brSetSubActiveIndex,
    getStatObject: brGetStatObject,
  } = useFormAddon(
    `${storage_key}-braver`,
    BRAVER_MAIN_ADDON,
    BRAVER_SUB_ADDONS,
  );
  const {
    mainLevel: boMainLevel,
    subLevels: boSubLevels,
    subActiveIndexes: boSubActiveIndexes,
    setMainLevel: boSetMainLevel,
    setSubLevel: boSetSubLevel,
    setSubActiveIndex: boSetSubActiveIndex,
    getStatObject: boGetStatObject,
  } = useFormAddon(
    `${storage_key}-bouncer`,
    BOUNCER_MAIN_ADDON,
    BOUNCER_SUB_ADDONS,
  );
  const {
    mainLevel: waMainLevel,
    subLevels: waSubLevels,
    subActiveIndexes: waSubActiveIndexes,
    setMainLevel: waSetMainLevel,
    setSubLevel: waSetSubLevel,
    setSubActiveIndex: waSetSubActiveIndex,
    getStatObject: waGetStatObject,
  } = useFormAddon(
    `${storage_key}-waker`,
    WAKER_MAIN_ADDON,
    WAKER_SUB_ADDONS,
  );

  const stat_hu: StatObject = useMemo(() => {
    return huGetStatObject(context);
  }, [context, huGetStatObject]);
  const stat_fi: StatObject = useMemo(() => {
    return fiGetStatObject(context);
  }, [context, fiGetStatObject]);
  const stat_ra: StatObject = useMemo(() => {
    return raGetStatObject(context);
  }, [context, raGetStatObject]);
  const stat_gu: StatObject = useMemo(() => {
    return guGetStatObject(context);
  }, [context, guGetStatObject]);
  const stat_fo: StatObject = useMemo(() => {
    return foGetStatObject(context);
  }, [context, foGetStatObject]);
  const stat_te: StatObject = useMemo(() => {
    return teGetStatObject(context);
  }, [context, teGetStatObject]);
  const stat_br: StatObject = useMemo(() => {
    return brGetStatObject(context);
  }, [context, brGetStatObject]);
  const stat_bo: StatObject = useMemo(() => {
    return boGetStatObject(context);
  }, [context, boGetStatObject]);
  const stat_wa: StatObject = useMemo(() => {
    return waGetStatObject(context);
  }, [context, waGetStatObject]);

  const stat_total = useMemo((): StatObject => {
    let stat = StatObject.merge(stat_hu, stat_fi);
    stat = StatObject.merge(stat, stat_ra);
    stat = StatObject.merge(stat, stat_gu);
    stat = StatObject.merge(stat, stat_fo);
    stat = StatObject.merge(stat, stat_te);
    stat = StatObject.merge(stat, stat_br);
    stat = StatObject.merge(stat, stat_bo);
    return StatObject.merge(stat, stat_wa);
  }, [
    stat_hu,
    stat_fi,
    stat_ra,
    stat_gu,
    stat_fo,
    stat_te,
    stat_br,
    stat_bo,
    stat_wa,
  ]);

  useEffect(() => {
    // let stat = StatObject.merge(stat_hu, stat_fi);
    // stat = StatObject.merge(stat, stat_ra);
    // stat = StatObject.merge(stat, stat_gu);
    // stat = StatObject.merge(stat, stat_fo);
    // stat = StatObject.merge(stat, stat_te);
    // stat = StatObject.merge(stat, stat_br);
    // stat = StatObject.merge(stat, stat_bo);
    // stat = StatObject.merge(stat, stat_wa);
    onStatChange(stat_total);
  }, [
    context,
    stat_total,
    // huGetStatObject,
    // fiGetStatObject,
    // raGetStatObject,
    // guGetStatObject,
    // foGetStatObject,
    // teGetStatObject,
    // brGetStatObject,
    // boGetStatObject,
    // waGetStatObject,
  ]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Fragment>
      <Container
        maxWidth="lg"
        sx={{ display: isVisible ? "block" : "none" }}
      >
        <Box margin={4}>
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, sm: 1, md: 2 }}
          >
            <Grid item xs={1}>
              <Stack spacing={2}>
                <FormAddon
                  title="Hunter"
                  stat={stat_hu}
                  mainLabel={HUNTER_MAIN_ADDON.label}
                  subLabels={HUNTER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={huMainLevel}
                  subLevels={huSubLevels}
                  subActiveIndexes={huSubActiveIndexes}
                  onMainLevelChange={huSetMainLevel}
                  onSubLevelChange={huSetSubLevel}
                  onSubActiveIndexChange={huSetSubActiveIndex}
                />
                <FormAddon
                  title="Ranger"
                  stat={stat_ra}
                  mainLabel={RANGER_MAIN_ADDON.label}
                  subLabels={RANGER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={raMainLevel}
                  subLevels={raSubLevels}
                  subActiveIndexes={raSubActiveIndexes}
                  onMainLevelChange={raSetMainLevel}
                  onSubLevelChange={raSetSubLevel}
                  onSubActiveIndexChange={raSetSubActiveIndex}
                />
                <FormAddon
                  title="Force"
                  stat={stat_fo}
                  mainLabel={FORCE_MAIN_ADDON.label}
                  subLabels={FORCE_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={foMainLevel}
                  subLevels={foSubLevels}
                  subActiveIndexes={foSubActiveIndexes}
                  onMainLevelChange={foSetMainLevel}
                  onSubLevelChange={foSetSubLevel}
                  onSubActiveIndexChange={foSetSubActiveIndex}
                />
                <FormAddon
                  title="Braver"
                  stat={stat_br}
                  mainLabel={BRAVER_MAIN_ADDON.label}
                  subLabels={BRAVER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={brMainLevel}
                  subLevels={brSubLevels}
                  subActiveIndexes={brSubActiveIndexes}
                  onMainLevelChange={brSetMainLevel}
                  onSubLevelChange={brSetSubLevel}
                  onSubActiveIndexChange={brSetSubActiveIndex}
                />
                <FormAddon
                  title="Waker"
                  stat={stat_wa}
                  mainLabel={WAKER_MAIN_ADDON.label}
                  subLabels={WAKER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={waMainLevel}
                  subLevels={waSubLevels}
                  subActiveIndexes={waSubActiveIndexes}
                  onMainLevelChange={waSetMainLevel}
                  onSubLevelChange={waSetSubLevel}
                  onSubActiveIndexChange={waSetSubActiveIndex}
                />
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={2}>
                <FormAddon
                  title="Fighter"
                  stat={stat_fi}
                  mainLabel={FIGHTER_MAIN_ADDON.label}
                  subLabels={FIGHTER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={fiMainLevel}
                  subLevels={fiSubLevels}
                  subActiveIndexes={fiSubActiveIndexes}
                  onMainLevelChange={fiSetMainLevel}
                  onSubLevelChange={fiSetSubLevel}
                  onSubActiveIndexChange={fiSetSubActiveIndex}
                />
                <FormAddon
                  title="Gunner"
                  stat={stat_gu}
                  mainLabel={GUNNER_MAIN_ADDON.label}
                  subLabels={GUNNER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={guMainLevel}
                  subLevels={guSubLevels}
                  subActiveIndexes={guSubActiveIndexes}
                  onMainLevelChange={guSetMainLevel}
                  onSubLevelChange={guSetSubLevel}
                  onSubActiveIndexChange={guSetSubActiveIndex}
                />
                <FormAddon
                  title="Techter"
                  stat={stat_te}
                  mainLabel={TECHTER_MAIN_ADDON.label}
                  subLabels={TECHTER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={teMainLevel}
                  subLevels={teSubLevels}
                  subActiveIndexes={teSubActiveIndexes}
                  onMainLevelChange={teSetMainLevel}
                  onSubLevelChange={teSetSubLevel}
                  onSubActiveIndexChange={teSetSubActiveIndex}
                />
                <FormAddon
                  title="Bouncer"
                  stat={stat_bo}
                  mainLabel={BOUNCER_MAIN_ADDON.label}
                  subLabels={BOUNCER_SUB_ADDONS.map((skill) => {
                    return skill.label;
                  })}
                  mainLevel={boMainLevel}
                  subLevels={boSubLevels}
                  subActiveIndexes={boSubActiveIndexes}
                  onMainLevelChange={boSetMainLevel}
                  onSubLevelChange={boSetSubLevel}
                  onSubActiveIndexChange={boSetSubActiveIndex}
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
