import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
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
  },
  control: {
    padding: theme.spacing(2),
  },
  demo: {
    backgroundColor: "#f5f5f5",
    background: "#f5f5f5",
  },
  image: {
    width: "90%",
    height: "auto",
    borderRadius: "15px",
  },
}));

export default function PostDetail(props) {
  const classes = useStyles();
  const {
    briefInfo,
    time,
    location,
    contact,
    itemState,
    category,
    description,
  } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <img src={ID} alt="ID card" className={classes.image} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {briefInfo}
            </Typography>
          </Grid>
          <Grid container spacing={2} direction="row" className={classes.demo}>
            <Grid item xs={6} sm={6}>
              <SimpleList time={time} location={location} />
            </Grid>
            <Grid item xs={6} sm={6}>
              <SimpleList2
                contact={contact}
                itemState={itemState}
                category={category}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5">{description}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <SimpleMapPage />
      </Grid>
    </Grid>
  );
}

PostDetail.propTypes = {
  briefInfo: PropTypes.string,
  time: PropTypes.shape,
  location: PropTypes.string,
  contact: PropTypes.shape,
  itemState: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
};

PostDetail.defaultProps = {
  briefInfo: "Test introduction",
  time: { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
  location: "Test location",
  contact: { email: "", facebook: "", phoneNumber: "", other: "" },
  itemState: "None",
  category: "default",
  description: "This is a test description of picken up item.",
};
