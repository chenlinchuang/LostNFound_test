import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { fillTitle, findSimilarItem } from "../../redux/actions";

export default function BriefIntro(props) {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.briefIntro);
  const { onClicked } = props;
  // const toFindSimilar = useSelector((state) => state.toFindSimilar);
  // useEffect(() => console.log("findsimilar:",toFindSimilar), [toFindSimilar]);
  return (
    <Grid item xs={12} sm={6}>
      {onClicked && title === "" ? (
        <TextField
          error
          id="outlined-error"
          name="briefIntro"
          label="物品名(必填)"
          variant="outlined"
          fullWidth
          onFocus={() => dispatch(findSimilarItem(false))}
          onBlur={() => dispatch(findSimilarItem(true))}
          onChange={(e) => {
            dispatch(fillTitle(e.target.value));
          }}
        />
      ) : (
        <TextField
          required
          id="briefIntro"
          name="briefIntro"
          label="物品名(必填)"
          variant="outlined"
          fullWidth
          onFocus={() => dispatch(findSimilarItem(false))}
          onBlur={() => dispatch(findSimilarItem(true))}
          onChange={(e) => {
            dispatch(fillTitle(e.target.value));
          }}
          value={title}
        />
      )}
    </Grid>
  );
}

BriefIntro.propTypes = {
  onClicked: PropTypes.bool,
};

BriefIntro.defaultProps = {
  onClicked: false,
};
