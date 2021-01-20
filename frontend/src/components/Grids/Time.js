import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { selectTime } from "../../redux/actions";

export default (isLost) => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.time);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label={isLost ? "遺失日期" : "拾獲日期"}
          format="yyyy/MM/DD"
          value={time}
          onChange={(date) => {
            dispatch(selectTime(date));
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label={isLost ? "遺失時間" : "拾獲時間"}
          value={time}
          onChange={(date) => {
            dispatch(selectTime(date));
          }}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
