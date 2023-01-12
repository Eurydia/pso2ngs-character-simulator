import { FC, Fragment, useState } from "react";
import {
  Tooltip,
  Typography,
  IconButton,
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import { ActionContext, AddonSkill, StatObject } from "../../assets";

import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

import { FieldAddon } from "./FieldAddon";
import { FieldLevel } from "../FieldLevel";

type FormAddonProps = {
  stat: any;
  title: string;
  mainSkill: AddonSkill;
  subSkills: AddonSkill[];
};
export const FormAddon: FC<FormAddonProps> = (props) => {
  const { title, stat, mainSkill, subSkills } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const [mainLevel, setMainLevel] = useState(AddonSkill.LEVEL_MAX);
  const [subLevels, setSubLevels] = useState(() => {
    let state: number[] = Array(subSkills.length);
    state = state.fill(AddonSkill.LEVEL_MAX);
    return state;
  });

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

  // let stat = AddonSkill.getStatObject(context, mainSkill, mainLevel);
  // selectOrder.forEach((isActive, skill_index) => {
  //   if (isActive <= 0) {
  //     return;
  //   }
  //   const sub_skill = subSkills[skill_index];
  //   const sub_skill_level = subLevels[skill_index];
  //   const sub_skill_stat = AddonSkill.getStatObject(
  //     context,
  //     sub_skill_level,
  //     sub_skill,
  //   );
  //   stat = StatObject.merge(stat, sub_skill_stat);
  // });

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
            <Stack direction="row" alignItems="center">
              <Typography>{mainSkill.label}</Typography>
              <TextField />
            </Stack>
          </Stack>
        }
      />
      {/* <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`${title} addon summary`}</DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog> */}
    </Fragment>
  );
};
