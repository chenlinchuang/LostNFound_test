import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { fillTitle } from "../../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.briefIntro);
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        required
        id="briefIntro"
        name="briefIntro"
        label="簡短描述"
        fullWidth
        onChange={(e) => {
          dispatch(fillTitle(e.target.value));
        }}
        value={title}
      />
    </Grid>
  );
};
