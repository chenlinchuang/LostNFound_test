/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";

import { useMutation } from "@apollo/client";

import Alert from "./Grids/Alert";
import BriefIntro from "./Grids/BriefIntro";
import Location from "./Grids/Location";
import Time from "./Grids/Time";
import Category from "./Grids/Category";
import Description from "./Grids/Description";
import Contact from "./Grids/Contact";

import ImgUpload from "./ImgUpload";

import { CREATE_ITEM_MUTATION } from "./graphql/index";

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

function FoundForm() {
  const classes = useStyles();
  const history = useHistory();
  // Below only for test
  const title = useSelector((state) => state.briefIntro);
  const category = useSelector((state) => state.category);
  const location = useSelector((state) => state.location);
  const time = useSelector((state) => state.time);
  const description = useSelector((state) => state.description);
  const contact = useSelector((state) => state.contact);

  const [createItem, { loading, data, error }] = useMutation(
    CREATE_ITEM_MUTATION
  );

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = () => {
    const createItemInput = {
      briefIntro: title,
      location,
      category,
      description,
      isMatch: "IS_FOUND",
    };
    const ContactInput = {
      other: contact,
    };
    setSnackbarOpen(true);
    createItem({
      variables: {
        data: createItemInput,
        contact: ContactInput,
        time: time.valueOf().toString(),
      },
    });
    history.push("/");
  };

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [loading, data]);

  // useEffect(() => console.log("time", time), [time]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <main className={classes.layout}>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            申報拾獲物
          </Typography>
          <Grid container spacing={3}>
            <BriefIntro />
            <Category />
            <Location />
            <Contact />
            <Time />
            <Description />
            <ImgUpload />
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </main>
    </>
  );
}

export default FoundForm;
// reference https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
