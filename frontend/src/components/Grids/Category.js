import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";

import { selectCategory } from "../../redux/actions";

import { CATEGORIES_QUERY } from "../graphql/index";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Category() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const { loading, data, error } = useQuery(CATEGORIES_QUERY);

  const options = !data ? (
    <option aria-label="None" value="" />
  ) : (
    [<option aria-label="None" value="" />].concat(
      data.categories.map((c) => <option value={c.id}>{c.name}</option>)
    )
  );

  useEffect(() => console.log("data", data), [data]);

  return (
    <Grid item xs={12} sm={3}>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="category">類別</InputLabel>
        <Select
          native
          value={category}
          onChange={(e) => {
            dispatch(selectCategory(e.target.value));
          }}
          inputProps={{
            name: "category",
            id: "category",
          }}
        >
          {options}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default Category;
