import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#F0F2F5",
  },
  input: {
    marginLeft: theme.spacing(1),
    marginTop: "2px",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase className={classes.input} placeholder="Search" />
      <Link to="/lost/search">
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Link>
    </Paper>
  );
}

//  reference https://material-ui.com/components/text-fields/
