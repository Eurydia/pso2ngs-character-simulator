import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";

import { useStatObject } from "../../hooks";
import { StatObject } from "../../assets";
import FormFood from "../../components/FormFood/FormFood";

type EditFoodProps = {
  onStatChange: (stat: StatObject) => void;
};
const EditFood: FC<EditFoodProps> = () => {
  const [stat, setStat] = useStatObject();

  return (
    <Box margin={4}>
      <Stack spacing={2}>
        <Card>
          <CardHeader
            title="Food"
            titleTypographyProps={{
              fontSize: "x-large",
              fontWeight: "bold",
            }}
          />
          <CardContent>
            <FormFood
              storage_key="page-food-item"
              onStatChange={setStat}
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
  // return (
  //   // <Fragment>
  //   <Box margin={4}>
  //     <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
  //       <Grid item xs={1}>
  //         <Card raised>
  //           <CardHeader title="Recipe Editor" />
  //           <CardContent>
  //             <AutocompleteFood value={null} />
  //             <RecipeDisplay />
  //             <Box width={1} position="relative">
  //               <Fab
  //                 color="primary"
  //                 size="medium"
  //                 onClick={handleDialogOpen}
  //                 sx={{
  //                   position: "absolute",
  //                   bottom: 0,
  //                   right: "0.5rem",
  //                 }}
  //               >
  //                 <Add />
  //               </Fab>
  //             </Box>
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //       <Grid item xs={1}>
  //         <Card>
  //           <CardContent>
  //             <EffectDisplay />
  //           </CardContent>
  //         </Card>
  //       </Grid>
  //     </Grid>
  //   </Box>
  //   //   {/* <Dialog
  //   //     open={dialogState}
  //   //     onClose={handleDialogClose}
  //   //     fullWidth
  //   //     maxWidth="sm"
  //   //   >
  //   //     <DialogTitle>Select ingredient(s)</DialogTitle>
  //   //     <DialogContent>
  //   //       <Stack paddingY={1}>
  //   //         <TextField fullWidth label="search" size="small" />
  //   //         <DialogIngredientList />
  //   //       </Stack>
  //   //     </DialogContent>
  //   //     <DialogActions>
  //   //       <Button onClick={handleDialogClose}>cancel</Button>
  //   //       <Button onClick={handleDialogClose}>confirm</Button>
  //   //     </DialogActions>
  //   //   </Dialog>
  //   // </Fragment> */}
  // );
};

export default EditFood;
