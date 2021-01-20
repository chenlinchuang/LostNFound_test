import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { fillContact } from "../../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact);
  return (
    <Grid item xs={12}>
      <TextField
        id="contact"
        name="contact"
        label="聯絡方式 (手機、信箱...)"
        fullWidth
        onChange={(e) => {
          dispatch(fillContact(e.target.value));
        }}
        value={contact}
      />
    </Grid>
  );
};