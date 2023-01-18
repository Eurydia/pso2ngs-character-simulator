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

import {
  ActionContext,
  AssetCharacterClasses,
  AssetCharacterClassSkills,
  CharClass,
  CharClassSkill,
  statObject,
  StatObject,
} from "../../assets";
import { useCharClass, useNumber } from "../../hooks";
import { FormCharacterClass, StatView } from "../../components";
import { BarChartRounded } from "@mui/icons-material";
import { AppContext } from "../../contexts";

const HUNTER_SKILLS: CharClassSkill[] = [
  AssetCharacterClassSkills.HUNTER_FLASH_GUARD,
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
  const { charClass: mainClass, setCharClass: setMainClass } =
    useCharClass(
      "character-class-main",
      AssetCharacterClasses.HUNTER,
    );
  const { charClass: subClass, setCharClass: setSubClass } =
    useCharClass(
      "character-class-sub",
      AssetCharacterClasses.FIGHTER,
    );

  useEffect(() => {
    updateContext(({ character, ...rest }) => {
      const next = {
        ...rest,
        character: { ...character, level: charLevel },
      };
      return next;
    });
  }, [charLevel]);

  const stat_class_main = useMemo((): StatObject => {
    const char_class: CharClass | null =
      CharClass.fromLabel(mainClass);
    if (char_class === null) {
      return statObject();
    }
    return CharClass.getStatObject(char_class, charLevel);
  }, [mainClass, charLevel]);

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
            stat={stat_class_main}
            charLevel={charLevel}
            mainClass={mainClass}
            subClass={subClass}
            onCharLevelChange={setCharLevel}
            onMainClassChange={setMainClass}
            onSubClassChange={setSubClass}
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
          Character summary
        </DialogTitle>
        <DialogContent>
          <StatView stat={statObject()} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
