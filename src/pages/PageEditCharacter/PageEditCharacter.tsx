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
  AssetCharClasses,
  AssetCharClassSkills,
  CharClass,
  CharClassSkill,
  statObject,
  StatObject,
} from "../../assets";
import { useCharClass, useNumber } from "../../hooks";
import {
  FormCharClass,
  FormCharClassSkill,
  StatView,
} from "../../components";
import { BarChartRounded } from "@mui/icons-material";
import { AppContext } from "../../contexts";

// --------------------------------
const HUNTER: string = AssetCharClasses.HUNTER.label;
const HUNTER_SKILLS: CharClassSkill[] = [
  AssetCharClassSkills.HUNTER_FLASH_GUARD,
];

// --------------------------------
const FIGHTER: string = AssetCharClasses.FIGHTER.label;
const FIGHTER_SKILLS: CharClassSkill[] = [
  AssetCharClassSkills.FIGHTER_DEFEAT_ADVANTAGE,
  AssetCharClassSkills.FIGHTER_DEFEAT_PP_RECOVERY,
];

// --------------------------------
const RANGER: string = AssetCharClasses.RANGER.label;
const RANGER_SKILL: CharClassSkill[] = [
  AssetCharClassSkills.RANGER_BAD_CONDITION_REDUCTION,
  AssetCharClassSkills.RANGER_BAD_CONDITION_WARD,
];

// --------------------------------
const GUNNER: string = AssetCharClasses.GUNNER.label;
const GUNNER_SKILL: CharClassSkill[] = [
  AssetCharClassSkills.GUNNER_ATTACK_PP_RECOVERY,
  AssetCharClassSkills.GUNNER_OVERWHELM,
];

// --------------------------------
const FORCE: string = AssetCharClasses.FORCE.label;
const FORCE_SKILL: CharClassSkill[] = [];

// --------------------------------
const TECHTER: string = AssetCharClasses.TECHTER.label;
const TECHTER_SKILL: CharClassSkill[] = [];

// --------------------------------
const BRAVER: string = AssetCharClasses.BRAVER.label;
const BRAVER_SKILL: CharClassSkill[] = [
  AssetCharClassSkills.BRAVER_RESTA_EFFECT_AMPLIFIER,
];

// --------------------------------
const BOUNCER: string = AssetCharClasses.BOUNCER.label;
const BOUNCER_SKILL: CharClassSkill[] = [];

// --------------------------------
const WAKER: string = AssetCharClasses.WAKER.label;
const WAKER_SKILL: CharClassSkill[] = [];

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
  useEffect(() => {
    updateContext(({ character, ...rest }) => {
      const next = {
        ...rest,
        character: { ...character, level: charLevel },
      };
      return next;
    });
  }, [charLevel]);

  const { charClass: mainClass, setCharClass: setMainClass } =
    useCharClass("character-class-main", AssetCharClasses.HUNTER);
  const { charClass: subClass, setCharClass: setSubClass } =
    useCharClass("character-class-sub", AssetCharClasses.FIGHTER);
  const handleMainClassChange = useCallback(
    (next_class: string): void => {
      if (next_class === subClass) {
        setSubClass(mainClass);
      }
      setMainClass(next_class);
    },
    [subClass, mainClass],
  );
  const handleSubClassChange = useCallback(
    (next_class: string): void => {
      if (next_class === mainClass) {
        setMainClass(subClass);
      }
      setSubClass(next_class);
    },
    [subClass, mainClass],
  );

  const [statHunter, setStatHunter] = useState((): StatObject => {
    return statObject();
  });
  const [statFighter, setStatFighter] = useState((): StatObject => {
    return statObject();
  });
  const [statRanger, setStatRanger] = useState((): StatObject => {
    return statObject();
  });
  const [statGunner, setStatGunner] = useState((): StatObject => {
    return statObject();
  });
  const [statBraver, setStatBraver] = useState((): StatObject => {
    return statObject();
  });

  const stat_class_main = useMemo((): StatObject => {
    const char_class: CharClass | null =
      CharClass.fromLabel(mainClass);
    if (char_class === null) {
      return statObject();
    }
    return CharClass.getStatObject(char_class, charLevel);
  }, [mainClass, charLevel]);

  const stat_total = useMemo((): StatObject => {
    let stat: StatObject = StatObject.merge(
      stat_class_main,
      statHunter,
    );
    stat = StatObject.merge(stat, statFighter);
    stat = StatObject.merge(stat, statRanger);
    stat = StatObject.merge(stat, statGunner);
    return StatObject.merge(stat, statBraver);
  }, [
    stat_class_main,
    statHunter,
    statFighter,
    statRanger,
    statGunner,
    statBraver,
  ]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

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
          <Grid container spacing={3} columns={{ xs: 1, sm: 2 }}>
            <Grid item xs={1} sm={2}>
              <FormCharClass
                stat={stat_class_main}
                charLevel={charLevel}
                mainClass={mainClass}
                subClass={subClass}
                onCharLevelChange={setCharLevel}
                onMainClassChange={handleMainClassChange}
                onSubClassChange={handleSubClassChange}
              />
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={3}>
                <FormCharClassSkill
                  formStorageKey="class-skill-hunter"
                  cardTitle="Hunter skills"
                  skills={HUNTER_SKILLS}
                  isMainClass={mainClass === HUNTER}
                  isSubClass={subClass === HUNTER}
                  onStatChange={setStatHunter}
                />
                <FormCharClassSkill
                  formStorageKey="class-skill-ranger"
                  cardTitle="Ranger skills"
                  skills={RANGER_SKILL}
                  isMainClass={mainClass === RANGER}
                  isSubClass={subClass === RANGER}
                  onStatChange={setStatRanger}
                />
                <FormCharClassSkill
                  formStorageKey="class-skill-braver"
                  cardTitle="Braver skills"
                  skills={BRAVER_SKILL}
                  isMainClass={mainClass === BRAVER}
                  isSubClass={subClass === BRAVER}
                  onStatChange={setStatBraver}
                />
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={3}>
                <FormCharClassSkill
                  formStorageKey="class-skill-fighter"
                  cardTitle="Fighter skills"
                  skills={FIGHTER_SKILLS}
                  isMainClass={mainClass === FIGHTER}
                  isSubClass={subClass === FIGHTER}
                  onStatChange={setStatFighter}
                />
                <FormCharClassSkill
                  formStorageKey="class-skill-gunner"
                  cardTitle="Gunner skills"
                  skills={GUNNER_SKILL}
                  isMainClass={mainClass === GUNNER}
                  isSubClass={subClass === GUNNER}
                  onStatChange={setStatGunner}
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
          Character summary
        </DialogTitle>
        <DialogContent>
          <StatView stat={statObject()} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
