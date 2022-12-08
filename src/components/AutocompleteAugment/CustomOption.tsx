import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";
import { Augment } from "../../assets";

type CustomOptionProps = HTMLAttributes<HTMLLIElement> & {
  option: Augment;
};
const CustomOption: FC<CustomOptionProps> = (props) => {
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

export default CustomOption;
