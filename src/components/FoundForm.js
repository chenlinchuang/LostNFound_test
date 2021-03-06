/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
import { clearAll } from "../redux/actions";
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
  const pic = useSelector((state) => state.pic);

  const [createItem, { loading, data, error }] = useMutation(
    CREATE_ITEM_MUTATION
  );

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [picDataURL, setPicDataURL] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title === "" || location === "" || !category) {
      setSnackbarOpen(true);
      return;
    }
    const createItemInput = {
      briefIntro: title,
      location,
      category,
      description,
      isMatch: "IS_FOUND",
    };
    let variables = {
      data: createItemInput,
      time: time.valueOf().toString(),
    };
    if (contact && contact.name) {
      variables = {
        ...variables,
        contact: { other: contact },
      };
    }
    if (pic && pic.length > 0) {
      const PicInput = {
        DataURL: picDataURL,
        filename: pic[0].name,
        lastModified: pic[0].lastModified.toString(),
        type: pic[0].type,
      };

      variables = {
        ...variables,
        pic: PicInput,
      };
    }
    setSnackbarOpen(true);
    createItem({ variables });
    dispatch(clearAll());
    history.push("/");
  };

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [loading, data]);

  useEffect(() => {
    if (pic && pic.length > 0) {
      console.log("pic:", pic);
      const picFileReader = new FileReader();
      picFileReader.onload = () => {
        console.log("end:", Date.now());
        console.log(picFileReader.result);
        setPicDataURL(picFileReader.result);
      };
      picFileReader.onloadstart = () => {
        console.log("start Loading:", Date.now());
      };
      picFileReader.readAsDataURL(pic[0]);
    }
  }, [pic]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const [onSubmit, setOnSubmit] = useState(false);
  return (
    <>
      <div className={classes.layout}>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            請填寫物品名、地點及類別
          </Alert>
        </Snackbar>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            申報拾獲物
          </Typography>
          <Grid container spacing={3}>
            <BriefIntro onClicked={onSubmit} />
            <Category onClicked={onSubmit} />
            <Location onClicked={onSubmit} />
            <Contact />
            <Time />
            <Description />
            <ImgUpload />
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleSubmit();
                setOnSubmit(true);
              }}
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
}

export default FoundForm;
// reference https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
