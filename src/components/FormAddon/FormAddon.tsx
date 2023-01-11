import { FC, Fragment, useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import {
  ActionContext,
  AddonSkill,
  AssetAddonSkills,
  StatObject,
} from "../../assets";

import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

type FormAddonProps = {
  context: ActionContext;
  title: string;
};
export const FormAddon: FC<FormAddonProps> = (props) => {
  const { title, context } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const [mainLevel, setMainLevel] = useState(0);
  const mainSkill = AssetAddonSkills.HUNTER_MELEE_WEAPON_UP;

  const [subLevels, setSubLevels] = useState([0, 0]);
  const [subActives, setSubActives] = useState([0, 0]);
  const subSkills = [
    AssetAddonSkills.HUNTER_BURN_RES_UP,
    AssetAddonSkills.GENERIC_HP_UP,
  ];

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubLevelChange = (level: number, index: number) => {
    setSubLevels((prev) => {
      const next = [...prev];
      next[index] = level;
      return next;
    });
  };

  const handleSubActiveChange = (index: number) => {
    setSubActives((prev) => {
      let next = [...prev];

      if (next[index] > 0) {
        next[index] = 0;
        return next;
      }

      next = next.map((value) => {
        if (value === 0) {
          return 0;
        }
        return value - 1;
      });
      next[index] = 2;
      return next;
    });
  };

  let stat = AddonSkill.getStatObject(context, mainSkill, mainLevel);
  subActives.forEach((isActive, skill_index) => {
    if (isActive <= 0) {
      return;
    }
    const sub_skill = subSkills[skill_index];
    const sub_skill_level = subLevels[skill_index];
    const sub_skill_stat = AddonSkill.getStatObject(
      context,
      sub_skill,
      sub_skill_level,
    );
    stat = StatObject.merge(stat, sub_skill_stat);
  });

  return (
    <Fragment>
      <FormBase
        cardTitle={title}
        slotCardHeaderAction={
          <Tooltip
            placement="top"
            title={<Typography>Open summary</Typography>}
          >
            <IconButton
              size="large"
              color="primary"
              onClick={handleDialogOpen}
            >
              <BarChartRounded />
            </IconButton>
          </Tooltip>
        }
        slotCardContent={
          <Stack spacing={2}>
            <CustomField
              label={mainSkill.name}
              value={mainLevel}
              onChange={setMainLevel}
            />
            <Stack spacing={1}>
              {subLevels.map((subLevel, index) => {
                return (
                  <CustomField
                    key={`subskill-${index}`}
                    label={subSkills[index].name}
                    value={subLevel}
                    onChange={(next_level) => {
                      handleSubLevelChange(next_level, index);
                    }}
                  />
                );
              })}
            </Stack>
          </Stack>
        }
      />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`${title} addon summary`}</DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
