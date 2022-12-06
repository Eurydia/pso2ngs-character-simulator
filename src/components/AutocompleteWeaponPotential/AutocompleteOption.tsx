import { FC } from "react";
import { Fragment, HTMLAttributes } from "react";
import {
  ListItemText,
  MenuItem,
  Tooltip,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Weapon } from "../../assets";

interface FieldOptionProps extends HTMLAttributes<HTMLLIElement> {
  option: Weapon;
}

const FieldOption: FC<FieldOptionProps> = (props) => {
  const { option, ...rest } = props;
  return (
    <MenuItem {...rest}>
      {/* <Tooltip
        followCursor
        placement="top"
        title={
          <Box padding={1}>
            <Grid container columns={{ xs: 1, md: 2 }}>
              <Grid item xs={2}>
                <Typography fontWeight="bold">
                  {option.potential.name}
                </Typography>
              </Grid>
              {option.stats.format.map(([label, value]) => (
                <Fragment key={label}>
                  <Grid item xs={1}>
                    <Typography>{value}</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>{label}</Typography>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Box>
        }
      > */}
      <ListItemText>{option.name}</ListItemText>
      {/* </Tooltip> */}
    </MenuItem>
  );
};

export default FieldOption;
