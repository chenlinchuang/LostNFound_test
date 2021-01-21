/* eslint-disable no-alert */
import React from "react";
import { useSelector } from "react-redux";
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
  const toFindSimilar = useSelector((state) => state.toFindSimilar);
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
        {toFindSimilar === undefined ? (
          <div />
        ) : (
          <Grid item xs={6} spacing={5}>
            <SimilarItems />
          </Grid>
        )}
        <Grid item xs={toFindSimilar === undefined ? 12 : 6}>
          <FoundForm />
        </Grid>
      </Grid>
    </>
  );
};

export default FoundPage;
// reference https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/checkout/Checkout.js
