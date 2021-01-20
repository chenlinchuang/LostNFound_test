import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

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
          <option aria-label="None" value="" />
          <option value="Card">證件</option>
          <option value="Wallet">錢包</option>
          <option value="Sport">運動用品</option>
          <option value="Other">其他</option>
        </Select>
      </FormControl>
    </Grid>
  );
};
