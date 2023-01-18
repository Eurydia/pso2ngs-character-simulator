import {
  FC,
  Fragment,
  useCallback,
  useContext,
  useEffect,
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

import {
  ActionContext,
  AssetCharacterClassSkills,
  CharacterClassSkill,
  statObject,
  StatObject,
} from "../../assets";
import { useNumber } from "../../hooks";
import { FormCharacterClass, StatView } from "../../components";
import { BarChartRounded } from "@mui/icons-material";
import { AppContext } from "../../contexts";

const HUNTER_SKILLS: CharacterClassSkill[] = [
  AssetCharacterClassSkills.G_HUNTER_FLASH_GUARD,
];

type PageEditCharacterProps = {
  onStatChange: (next_stat: StatObject) => void;
};
export const PageEditCharacter: FC<PageEditCharacterProps> = (
  props,
) => {
  const { onStatChange } = props;

  const { context, updateContext } = useContext(AppContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = useCallback((): void => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback((): void => {
    setDialogOpen(false);
  }, []);

  const { value: charLevel, setValue: setCharLevel } = useNumber(
    "character-level",
    1,
  );
  const [mainClass, setMainClass] = useState();

  useEffect(() => {
    updateContext(({ character, ...rest }) => {
      const next = {
        ...rest,
        character: { ...character, level: charLevel },
      };
      return next;
    });
  }, [charLevel]);

  return (
    <Fragment>
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
      <Container maxWidth="md">
        <Box marginY={4}>
          <FormCharacterClass
            charLevel={charLevel}
            onCharLevelChange={setCharLevel}
          />
        </Box>
      </Container>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle fontSize="x-large" fontWeight="bold">
          Equipment summary
        </DialogTitle>
        <DialogContent>
          <StatView stat={statObject()} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
