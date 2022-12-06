import { FC, Fragment, HTMLAttributes } from "react";
import {
  ListItemText,
  MenuItem,
  Tooltip,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Augment } from "../../assets";

interface FieldOptionProps extends HTMLAttributes<HTMLLIElement> {
  option: Augment;
}
const FieldOption: FC<FieldOptionProps> = (props) => {
  const { option, ...rest } = props;
  return (
    <MenuItem {...rest}>
      {/* <Tooltip
        followCursor
        placement="top"
        title={
          <Box padding={1} minWidth={"200px"}>
            <Grid container columns={{ xs: 1, md: 3 }}>
              {option.stats.format.map(([label, value]) => (
                <Fragment key={label}>
                  <Grid item xs={1}>
                    <Typography>{value}</Typography>
                  </Grid>
                  <Grid item xs={1} md={2}>
                    <Typography>{label}</Typography>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Box>
        }
      > */}
      <ListItemText>{option.label}</ListItemText>
      {/* </Tooltip> */}
    </MenuItem>
  );
};

export default FieldOption;
