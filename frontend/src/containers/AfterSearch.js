import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SideDrawer from "../components/SideDrawer";
import SearchItems from "../components/SearchItems";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#FFFFFF",
    background: "#FFFFFF",
  },
}));

function AfterSearch() {
  const classes = useStyles;
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      className={classes.grid}
    >
      <Grid item xs={4}>
        <SideDrawer />
      </Grid>
      <Grid item xs={8} className={classes.grid}>
        <SearchItems />
      </Grid>
    </Grid>
  );
}

export default AfterSearch;
