import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostDetail from "./PostDetail";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f5f5f5",
  },
}));

export default function PostPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PostDetail />
    </div>
  );
}
