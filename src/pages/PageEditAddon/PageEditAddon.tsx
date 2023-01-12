import { FC } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";

import { FormAddon } from "../../components";
import {
  ActionContext,
  AddonSkill,
  AssetAddonSkills,
  StatObject,
} from "../../assets";
import { useFormAddon } from "../../hooks/useFormAddon";

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

type PageEditAddonProps = {
  storage_key: string;
  context: ActionContext;
  isVisible: boolean;
};
export const PageEditAddon: FC<PageEditAddonProps> = (props) => {
  const { isVisible, context, storage_key } = props;

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

  const stat_hu: StatObject = huGetStatObject(context);
  const stat_fi: StatObject = fiGetStatObject(context);
  const stat_ra: StatObject = raGetStatObject(context);
  const stat_gu: StatObject = guGetStatObject(context);
  const stat_fo: StatObject = foGetStatObject(context);
  const stat_te: StatObject = teGetStatObject(context);
  const stat_br: StatObject = brGetStatObject(context);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: isVisible ? "block" : "none" }}
    >
      <Box margin={4}>
        <Grid container spacing={2} columns={{ xs: 1, sm: 1, md: 2 }}>
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
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
