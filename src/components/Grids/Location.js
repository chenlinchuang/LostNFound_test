import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { fillLocation } from "../../redux/actions";

export default function Location(props) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const { isLost, onClicked } = props;
  return (
    <Grid item xs={12}>
      {onClicked && location === "" ? (
        <TextField
          error
          id="standard-error"
          name="location"
          label={isLost ? "遺失地點(必填)" : "拾獲地點(必填)"}
          fullWidth
          onChange={(e) => {
            dispatch(fillLocation(e.target.value));
          }}
          value={location}
        />
      ) : (
        <TextField
          required
          id="location"
          name="location"
          label={isLost ? "遺失地點(必填)" : "拾獲地點(必填)"}
          fullWidth
          onChange={(e) => {
            dispatch(fillLocation(e.target.value));
          }}
          value={location}
        />
      )}
    </Grid>
  );
}

Location.propTypes = {
  isLost: PropTypes.bool,
  onClicked: PropTypes.bool,
};

Location.defaultProps = {
  isLost: true,
  onClicked: false,
};
