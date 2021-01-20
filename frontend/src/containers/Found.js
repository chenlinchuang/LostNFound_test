/* eslint-disable no-alert */
import React from "react";
//  import ReactDom from "react-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FoundForm from "../components/FoundForm";
import SimilarItems from "../components/SimilarItems";
// import SearchBar from "./SearchBar";
//	import { connect } from "react-redux"

const FoundPage = () => {
  const history = useHistory();
  return (
    <>
      <Grid container justify="flex-start">
        <IconButton
          aria-label="prePage"
          onClick={() => {
            history.push("/");
          }}
        >
          <ArrowBackIcon color="secondary" style={{ fontSize: 40 }} />
        </IconButton>
      </Grid>
      <Grid container alignItems="flex-start" spacing={1} justify="center">
        <Grid item xs={6} spacing={5}>
          <SimilarItems />
        </Grid>
        <Grid item xs={6}>
          <FoundForm />
        </Grid>
      </Grid>
    </>
  );
};

export default FoundPage;
// reference https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
