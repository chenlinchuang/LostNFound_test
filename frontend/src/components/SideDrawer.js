import React, { useState } from "react";

import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";

import SearchBar from "./SearchBar";
import MultiSelect from "./ConditionSelect";

import { CATEGORIES_QUERY } from "./graphql/index";

const drawerWidth = 360;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    title: {
      fontWeight: 800,
      fontSize: 24,
    },
    subtitle: {
      fontWeight: 700,
      fontSize: 17,
    },
    filterCondition: {
      marginLeft: 40,
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  };
});

const categories = ["證件類", "傘類", "水類", "手機類", "衣服類"];
const places = ["博理館", "宿舍", "普通", "新生", "共同"];

function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { loading, data, error } = useQuery(CATEGORIES_QUERY);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const allCategories =
    loading || !data ? [] : data.categories.map((c) => c.name);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <div style={{ padding: "9px 12px" }}>
        <span className={classes.title}>搜尋結果</span>
      </div>
      <div style={{ padding: "9px 12px", paddingBottom: 18 }}>
        <SearchBar />
      </div>
      <Divider />

      <List>
        <ListItem>
          <ListItemText>
            <span className={classes.subtitle}>篩選條件</span>
          </ListItemText>
        </ListItem>
        <ListItem>
          <span className={classes.filterCondition}>
            <Grid container justify="center">
              <Grid item xs={10}>
                <ListItemText>
                  <div style={{ paddingTop: 11 }}>最新</div>
                </ListItemText>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  style={{ paddingLeft: 30 }}
                  control={<Switch name="yes" />}
                  label="switch"
                />
              </Grid>
            </Grid>
          </span>
        </ListItem>
        <ListItem>
          <Grid
            container
            className={classes.filterCondition}
            alignItems="flex-start"
            direction="column"
          >
            <Grid item alignContent="center">
              <Grid container alignItems="center">
                <Grid item xs={10} alignContent="center">
                  <ListItemText>
                    <div style={{ paddingTop: 6 }}>類別</div>
                  </ListItemText>
                </Grid>
                <Grid item xs={2}>
                  <FormControlLabel
                    style={{ paddingLeft: 30 }}
                    control={<Switch name="yes" />}
                    label="switch"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <MultiSelect allOptions={allCategories} />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid
            container
            className={classes.filterCondition}
            alignItems="flex-start"
            direction="column"
          >
            <Grid item alignContent="center">
              <Grid container alignItems="center">
                <Grid item xs={10} alignContent="center">
                  <ListItemText>
                    <div style={{ paddingTop: 6 }}>地點</div>
                  </ListItemText>
                </Grid>
                <Grid item xs={2}>
                  <FormControlLabel
                    style={{ paddingLeft: 30 }}
                    control={<Switch name="yes" />}
                    label="switch"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <MultiSelect allOptions={places} />
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
};

export default ResponsiveDrawer;
