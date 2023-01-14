import {
  Fragment,
  FC,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { BarChartRounded } from "@mui/icons-material";

import {
  ActionContext,
  Augment,
  GroupEnumFixa,
  StatObject,
} from "../../assets";
import { DataWeapon } from "../../types";

import { FormBase } from "../FormBase";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteWeapon } from "../AutocompleteWeapon";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { SelectPotential } from "../SelectPotential";
import { StatView } from "../StatView";
import {
  useAugments,
  useEnhancement,
  useFixa,
  useWeapon,
} from "../../hooks";
import { IconButtonTooltip } from "../IconButtonTooltip";

type FormWeaponProps = {
  cardTitle: string;

  context: ActionContext;
  storageKey: string;
  onStatChange: (next_stat: StatObject) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { cardTitle, storageKey, context, onStatChange } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const { weapon, setWeapon, potentialLevel, setPotentialLevel } =
    useWeapon(storageKey);
  const { enhancement, setEnhancement } = useEnhancement(storageKey);
  const { fixa, setFixa } = useFixa(storageKey);
  const { augments, setAugment } = useAugments(storageKey);

  const active_augments = useMemo((): (Augment | null)[] => {
    if (weapon === null) {
      return [];
    }
    const count: number = Augment.getAugmentSlot(enhancement);
    return augments.slice(0, count);
  }, [weapon, augments, enhancement]);

  const stat = useMemo((): StatObject => {
    const data: DataWeapon = {
      weapon,
      potential_level: potentialLevel,
      enhancement,
      fixa,
      augments: active_augments,
    };
    return DataWeapon.getStatObject(context, data);
  }, [context, weapon, enhancement, fixa, active_augments]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  return (
    <Fragment>
      <FormBase
        cardTitle={cardTitle}
        slotCardHeaderAction={
          <IconButtonTooltip
            tooltipText="Open summary"
            icon={<BarChartRounded />}
            onClick={handleDialogOpen}
          />
        }
        slotCardContent={
          <Grid container spacing={2} columns={{ xs: 1, sm: 2 }}>
            <Grid item xs={1}>
              <Stack spacing={1}>
                <AutocompleteWeapon
                  weapon={weapon}
                  onWeaponChange={setWeapon}
                />
                <SelectPotential
                  weapon={weapon}
                  potentialLevel={potentialLevel}
                  onPotentialLevelChange={setPotentialLevel}
                />
                <FieldLevel
                  label="Enhacement"
                  levelMin={0}
                  disabled={weapon === null}
                  level={enhancement}
                  levelMax={
                    weapon === null ? 0 : weapon.enhancement_max
                  }
                  onLevelChange={setEnhancement}
                />
                <AutocompleteFixa
                  mode={GroupEnumFixa.WEAPON}
                  disabled={weapon === null}
                  fixa={fixa}
                  onFixaChange={setFixa}
                />
              </Stack>
            </Grid>
            <Grid item xs={1}>
              <Stack spacing={1}>
                {augments.map((augment, augment_index) => {
                  return (
                    <AutocompleteAugment
                      key={`augment-${augment_index}`}
                      disabled={
                        weapon === null ||
                        augment_index >= active_augments.length
                      }
                      augment={augment}
                      onAugmentChange={(next_augment) => {
                        setAugment(next_augment, augment_index);
                      }}
                    />
                  );
                })}
              </Stack>
            </Grid>
          </Grid>
        }
      />
      <Dialog
        fullWidth
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>{`${cardTitle} summary`}</DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
