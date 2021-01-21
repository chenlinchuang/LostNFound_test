import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import ID from "../static/123.jpg";
import SimpleMapPage from "./map_component/Map";
import SimpleList from "./List";
import SimpleList2 from "./List2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "100vw",
    minHeight: "100vh",
    background: "#ffffff",
    backgroundColor: "#ffffff",
  },
  control: {
    paddingLeft: 30,
  },
  demo: {
    backgroundColor: "#ffffff",
  },
  demo2: {
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "auto",
    height: "auto",
    maxWidth: "500px",
    borderRadius: "15px",
  },
  typo: {
    color: "#000000",
  },
  border: {
    borderRadius: "20px",
  },
}));

export default function PostDetail(props) {
  const classes = useStyles();
  const {
    briefInfo,
    time,
    image,
    location,
    contact,
    itemState,
    category,
    description,
  } = props;
  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.border}>
        <Grid item xs={6} className={classes.border}>
          <Grid container direction="column" spacing={4}>
            <Grid item className={classes.demo}>
              <img src={image} alt="ID card" className={classes.image} />
            </Grid>
            <Grid item className={classes.demo}>
              <Typography variant="h4" align="center" className={classes.typo}>
                {briefInfo}
              </Typography>
            </Grid>
            <Grid container direction="row" className={classes.demo2}>
              <Grid item xs={6}>
                <SimpleList time={time} location={location} />
              </Grid>
              <Grid item xs={6}>
                <SimpleList2
                  contact={contact}
                  itemState={itemState}
                  category={category}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.typo}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <SimpleMapPage />
        </Grid>
      </Grid>
    </div>
  );
}

PostDetail.propTypes = {
  briefInfo: PropTypes.string,
  time: PropTypes.shape,
  location: PropTypes.string,
  contact: PropTypes.shape,
  image: PropTypes.string,
  itemState: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};

PostDetail.defaultProps = {
  briefInfo: "Test introduction",
  time: { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
  location: "Test location",
  image: ID,
  contact: { email: "", facebook: "", phoneNumber: "", other: "" },
  itemState: "None",
  category: "default",
  description: "This is a test description of picken up item.",
};
