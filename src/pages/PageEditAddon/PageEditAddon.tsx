import { FC } from "react";
import { Box, Container, Grid } from "@mui/material";

import { FormAddon } from "../../components";
import { ActionContext, AssetAddonSkills } from "../../assets";

type PageEditAddonProps = {
  context: ActionContext;
  isVisible: boolean;
};
export const PageEditAddon: FC<PageEditAddonProps> = (props) => {
  const { isVisible, context } = props;
  return (
    <Container
      maxWidth="lg"
      sx={{ display: isVisible ? "block" : "none" }}
    >
      <Box margin={4}>
        <Grid container spacing={2} columns={{ xs: 1, sm: 1, md: 2 }}>
          <Grid item xs={1}>
            <FormAddon
              stat={{}}
              title="Hunter"
              mainSkill={AssetAddonSkills.HUNTER_MELEE_WEAPON_UP}
              subSkills={[
                AssetAddonSkills.HUNTER_BURN_RES_UP,
                AssetAddonSkills.GENERIC_HP_UP,
              ]}
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
