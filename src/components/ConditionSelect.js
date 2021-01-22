/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 270,
    maxWidth: 358,
    padding: "10px 0px",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

function MultiSelect(props) {
  const classes = useStyles();
  const { allOptions } = props;

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={allOptions}
        getOptionLabel={(opt) => opt}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="SelectedOptions"
            placeholder="選擇類別"
          />
        )}
      />
    </div>
  );
}

export default MultiSelect;
