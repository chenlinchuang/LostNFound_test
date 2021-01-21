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
import SearchBar from "./SearchBar";
import MultiSelect from "./ConditionSelect";

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
              <MultiSelect allOptions={categories} />
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
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
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
