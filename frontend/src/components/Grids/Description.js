import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { fillDescription } from "../../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.description);
  return (
    <Grid item xs={12}>
      <TextField
        id="description"
        name="description"
        label="其他描述"
        fullWidth
        onChange={(e) => {
          dispatch(fillDescription(e.target.value));
        }}
        value={description}
      />
    </Grid>
  );
};
