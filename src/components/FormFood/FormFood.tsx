import { FC, useEffect, useState, useMemo } from "react";
import {
  Box,
  Button,
  List,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import { ActionContext, Food, StatObject } from "../../assets";
import { useFood } from "../../hooks";
import { SummaryFood } from "../../types";

import { AutocompleteFood } from "../AutocompleteFood";

import { CustomItem } from "./CustomItem";
import { createStat, createSummary } from "./helper";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

const CONTEXT: ActionContext = {};

type CustomListProps = {
  items: Food[];
  onCopy: (index: number, item: Food) => void;
  onRemove: (index: number) => void;
};
const CustomList: FC<CustomListProps> = (props) => {
  const { items, onCopy, onRemove } = props;

  return (
    <List disablePadding>
      <ListSubheader disableGutters>
        <Typography>{`${items.length}/10 items used`}</Typography>
      </ListSubheader>
      {items.map((item, index) => {
        return (
          <CustomItem
            key={`${item.label}-${index}`}
            item={item}
            onCopy={() => onCopy(index, item)}
            onRemove={() => onRemove(index)}
          />
        );
      })}
    </List>
  );
};

type FormFoodProps = {
  storage_key: string;
  onStatChange: (stat: StatObject) => void;
  onSummaryChange: (summaries: SummaryFood[]) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { onStatChange, onSummaryChange, storage_key } = props;

  const [items, addItem, removeItem] = useFood(storage_key);
  const [selected, setSelected] = useState<Food | null>(null);

  const handleAdd = () => {
    if (selected === null) {
      return;
    }
    addItem(0, selected);
    setSelected(null);
  };

  const handleCopy = (index: number, item: Food) => {
    addItem(index, item);
  };

  const handleRemove = (index: number) => {
    removeItem(index);
  };

  const stat = useMemo((): StatObject => {
    return createStat(CONTEXT, items);
  }, [items]);

  const summaries = useMemo((): SummaryFood[] => {
    return createSummary(items);
  }, [items]);

  useEffect(() => {
    onSummaryChange(summaries);
  }, [summaries]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  return (
    <FormBase title="Food" slot_secondary={<StatView stat={stat} />}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <Button
            disableRipple
            disableElevation
            disabled={selected === null}
            variant="contained"
            startIcon={<Add />}
            onClick={handleAdd}
          >
            add
          </Button>
          <Box width={1}>
            <AutocompleteFood
              value={selected}
              onChange={setSelected}
              onEnterPress={handleAdd}
            />
          </Box>
        </Stack>
        <CustomList
          items={items}
          onCopy={handleCopy}
          onRemove={handleRemove}
        />
      </Stack>
    </FormBase>
  );
};
