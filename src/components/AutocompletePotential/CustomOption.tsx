import { FC } from "react";
import { ListItemText, MenuItem } from "@mui/material";

type CustomOptionProps = {
  value: string;
  label: string;
};
const CustomOption: FC<CustomOptionProps> = (props) => {
  return (
    <MenuItem value={props.value}>
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
      <ListItemText>{props.label}</ListItemText>
      {/* </Tooltip> */}
    </MenuItem>
  );
};

export default CustomOption;
