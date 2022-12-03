import { FC, Fragment, HTMLAttributes } from "react";
import {
  AutocompleteRenderOptionState,
  ListItemText,
  MenuItem,
  Tooltip,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Augment } from "../../assets";
import { formatStatObject } from "../../utils";

interface FieldOptionProps extends HTMLAttributes<HTMLLIElement> {
  option: Augment;
}

const FieldOption: FC<FieldOptionProps> = (props) => {
  const { option, ...rest } = props;
  return (
    <MenuItem {...rest}>
      <Tooltip
        followCursor
        placement="top"
        title={
          <Box padding={1} minWidth={"200px"}>
            <Grid container columns={{ xs: 1, md: 3 }}>
              {formatStatObject(option.stats).map(
                ([label, value]) => (
                  <Fragment key={label}>
                    <Grid item xs={1}>
                      <Typography>{value}</Typography>
                    </Grid>
                    <Grid item xs={1} md={2}>
                      <Typography>{label}</Typography>
                    </Grid>
                  </Fragment>
                ),
              )}
            </Grid>
          </Box>
        }
      >
        <ListItemText>{option.label}</ListItemText>
      </Tooltip>
    </MenuItem>
  );
};

export default FieldOption;
