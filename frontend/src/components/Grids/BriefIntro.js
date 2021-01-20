import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { fillTitle, findSimilarItem } from "../../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.briefIntro);
  // const toFindSimilar = useSelector((state) => state.toFindSimilar);
  // useEffect(() => console.log("findsimilar:",toFindSimilar), [toFindSimilar]);
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        required
        id="briefIntro"
        name="briefIntro"
        label="物品名"
        fullWidth
        onFocus={() => dispatch(findSimilarItem(false))}
        onBlur={() => dispatch(findSimilarItem(true))}
        onChange={(e) => {
          dispatch(fillTitle(e.target.value));
        }}
        value={title}
      />
    </Grid>
  );
};
