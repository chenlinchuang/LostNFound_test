import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import { searchItem } from "../redux/actions";

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
  const history = useHistory();
  const searchItemName = useSelector((state) => state.searchItemName);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", inputValue);
    dispatch(searchItem(inputValue));
    setInputValue("");
    history.push("/lost/search");
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

//  reference https://material-ui.com/components/text-fields/
