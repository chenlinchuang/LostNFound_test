/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-unresolved */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import { borders } from "@material-ui/system";
import { Divider } from "@material-ui/core";
import PropTypes from "prop-types";
import ID from "../static/123.jpg";
import SimpleList from "./List";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 25,
  },
  paper: {
    borderRadius: 25,
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1920,
  },
  image: {
    width: 424,
    height: 324,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "15px",
  },
}));

export default function PostPreview(props) {
  const classes = useStyles();
  const {
    briefInfo,
    image,
    time,
    location,
    onClickFuncShare,
    onClickFuncDetail,
  } = props;
  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container spacing={2}>
        <Grid item md={4} sm={4} container>
          <ButtonBase className={classes.image}>
            <Grid item>
              <img className={classes.img} alt="complex" src={image} />
            </Grid>
          </ButtonBase>
        </Grid>
        <Grid item md={8} sm={8} container spacing={4}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4">{briefInfo}</Typography>
            </Grid>
            <Grid item>
              <SimpleList time={time} location={location} />
            </Grid>
            <Grid item spacing={2} container>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onClickFuncShare}
                >
                  Share
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onClickFuncDetail}
                >
                  More info
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

PostPreview.propTypes = {
  briefInfo: PropTypes.string,
  image: PropTypes.any,
  time: PropTypes.shape,
  location: PropTypes.string,
  onClickFuncShare: PropTypes.func,
  onClickFuncDetail: PropTypes.func,
};

PostPreview.defaultProps = {
  briefInfo: "Test Item",
  image: "",
  time: { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
  location: "Test location",
  onClickFuncShare: undefined,
  onClickFuncDetail: undefined,
};
