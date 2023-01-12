import { FC } from "react";
import { Box, Container, Grid } from "@mui/material";

import { FormAddon } from "../../components";
import {
  ActionContext,
  AddonSkill,
  AssetAddonSkills,
  StatObject,
} from "../../assets";
import { useFormAddon } from "../../hooks/useFormAddon";

const HUNTER_MAIN_ADDON: AddonSkill =
  AssetAddonSkills.HUNTER_MELEE_WEAPON_UP;

const HUNTER_SUB_ADDONS: AddonSkill[] = [
  AssetAddonSkills.HUNTER_BURN_RES_UP,
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

  const stat_hu: StatObject = huGetStatObject(context);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: isVisible ? "block" : "none" }}
    >
      <Box margin={4}>
        <Grid container spacing={2} columns={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={1}>
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
          </Grid>
          <Grid item xs={1}>
            {/*   <FormAddon
              title="Fighter"
              mainSkill={AssetAddonSkills.FIGHTER_CRIT_DAMAGE_UP}
              subSkills={[
                AssetAddonSkills.FIGHTER_CRIT_DAMAGE_UP,
                AssetAddonSkills.GENERIC_HP_UP,
              ]}
            /> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
