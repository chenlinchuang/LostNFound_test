/* eslint-disable no-alert */
import React, { useState } from "react";
//  import ReactDom from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import SearchBar from "./SearchBar";
import BriefIntro from "./Grids/BriefIntro";
import Location from "./Grids/Location";
import Time from "./Grids/Time";
import Category from "./Grids/Category";
import Description from "./Grids/Description";
import ImgUpload from "./ImgUpload";
import Contact from "./Grids/Contact";
//	import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const handleSubmit = (history, t, c, l, ti) => {
  if (t !== "" && l !== "") {
    alert(`title:${t}, cat: ${c}, location: ${l}, time:${ti}`);
    history.push("/");
  }
};

const FoundForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [onSubmit, setOnSubmit] = useState(false);
  // Below only for test
  const title = useSelector((state) => state.briefIntro);
  const category = useSelector((state) => state.category);
  const location = useSelector((state) => state.location);
  const time = useSelector((state) => state.time);
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            登記遺失物
          </Typography>
          <Grid container spacing={3}>
            <BriefIntro onClicked={onSubmit} />
            <Category />
            <Location isLost onClicked={onSubmit} />
            <Contact />
            <Time isLost />
            <Description />
            <ImgUpload />
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={
                () => {
                  setOnSubmit(true);
                  handleSubmit(history, title, category, location, time);
                }
                // eslint-disable-next-line react/jsx-curly-newline
              }
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
};

export default FoundForm;
// reference https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
