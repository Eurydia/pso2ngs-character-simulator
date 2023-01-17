import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Box, Stack } from "@mui/material";
import {
  AssetCharacterClasses,
  CharacterClass,
  statObject,
  StatObject,
} from "../../assets";

import { FormCharacterClass } from "../FormCharacterClass";
import { useNumber } from "../../hooks";
import { GlobalAppContext } from "../../contexts";

const HUNTER: string = AssetCharacterClasses.G_HUNTER.label;
const FIGHTER: string = AssetCharacterClasses.G_FIGHTER.label;

type FormCharacterProps = {
  formStorageKey: string;
};
export const FormCharacter: FC<FormCharacterProps> = (props) => {
  const { formStorageKey } = props;

  const context = useContext(GlobalAppContext);

  // const [dialogOpen, setDialogOpen] = useState(false);
  // const handleDialogClose = useCallback((): void => {
  //   setDialogOpen(false);
  // }, []);
  // const handleDialogOpen = useCallback((): void => {
  //   setDialogOpen(true);
  // }, []);

  const { value: mainLevel, setValue: setMainLevel } = useNumber(
    `${formStorageKey}-main-class-level`,
    1,
  );
  const [mainClass, setMainClass] = useState((): string => {
    const loaded_string: string | null = localStorage.getItem(
      `${formStorageKey}-main-class`,
    );
    if (loaded_string === null) {
      return HUNTER;
    }
    if (CharacterClass.fromLabel(loaded_string) === null) {
      return HUNTER;
    }
    return loaded_string;
  });
  const [subClass, setSubClass] = useState((): string => {
    const loaded_string: string | null = localStorage.getItem(
      `${formStorageKey}-sub-class`,
    );
    if (loaded_string === null) {
      return FIGHTER;
    }
    if (CharacterClass.fromLabel(loaded_string) === null) {
      return FIGHTER;
    }
    return loaded_string;
  });

  useEffect((): void => {
    localStorage.setItem(`${formStorageKey}-main-class`, mainClass);
  }, [mainClass]);
  useEffect((): void => {
    localStorage.setItem(`${formStorageKey}-sub-class`, subClass);
  }, [subClass]);

  const handleMainClassChange = useCallback(
    (next_class: string): void => {
      if (next_class === subClass) {
        setSubClass(mainClass);
      }
      setMainClass(next_class);
    },
    [mainClass, subClass],
  );
  const handleSubClassChange = useCallback(
    (next_class: string): void => {
      if (next_class === mainClass) {
        setMainClass(subClass);
      }
      setSubClass(next_class);
    },
    [mainClass, subClass],
  );

  const stat_class = useMemo((): StatObject => {
    const _mainClass = CharacterClass.fromLabel(mainClass);
    if (_mainClass === null) {
      return statObject();
    }
    return CharacterClass.getStatObject(_mainClass, mainLevel);
  }, [context, mainClass, mainLevel]);

  return (
    <Box>
      <Stack spacing={3}>
        <FormCharacterClass
          stat={stat_class}
          mainLevel={mainLevel}
          mainClass={mainClass}
          subClass={subClass}
          onMainClassChange={handleMainClassChange}
          onSubClassChange={handleSubClassChange}
          onMainLevelChange={setMainLevel}
        />
      </Stack>
    </Box>
  );
};
