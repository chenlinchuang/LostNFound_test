import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { fillLocation } from "../../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  return (
    <Grid item xs={12}>
      <TextField
        required
        id="location"
        name="location"
        label="拾獲地點(必填)"
        fullWidth
        onChange={(e) => {
          dispatch(fillLocation(e.target.value));
        }}
        value={location}
      />
    </Grid>
  );
};
