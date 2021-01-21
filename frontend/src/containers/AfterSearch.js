import React from "react";
import Grid from "@material-ui/core/Grid";
import SideDrawer from "../components/SideDrawer";
import SearchItems from "../components/SearchItems";

function AfterSearch() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={4}>
        <SideDrawer />
      </Grid>
      <Grid item xs={8}>
        <SearchItems />
      </Grid>
    </Grid>
  );
}

export default AfterSearch;
