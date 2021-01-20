import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/List";
import PostCard from "./PostCard";
import PostPreview from "./PostPreview";
import ID from "../static/123.jpg";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
  },
});
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#f5f5f5",
  },
}));

export default function PostPage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={10}>
        <Grid item>
          <PostPreview image={ID} />
        </Grid>
        <Divider />
        <Grid item>
          <PostPreview image={ID} />
          <Divider />
        </Grid>
        <Grid item>
          <PostPreview image={ID} />
        </Grid>
        <Grid item>
          <PostPreview image={ID} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
