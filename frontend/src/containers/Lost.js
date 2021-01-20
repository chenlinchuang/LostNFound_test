/* eslint-disable no-alert */
import React from "react";
//  import ReactDom from "react-dom";
import { useHistory, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import SearchBar from "../components/SearchBar";
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
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={6}>
          <Link to="/lost/form">
            <Button
              variant="contained"
              color="default"
              startIcon={<CreateIcon />}
            >
              登記遺失
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default FoundPage;
