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
  },
  control: {
    paddingLeft: 30,
  },
  demo: {
    backgroundColor: "#ffffff",
    background: "#000000",
    textDecorationColor: "#000000",
  },
  demo2: {
    backgroundColor: "#f5f5f5",
    background: "#000000",
    textDecorationColor: "#000000",
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
    image,
    location,
    contact,
    itemState,
    category,
    description,
  } = props;
  return (
    <Container maxWidth="lg">
      <Grid item>
        <Grid container direction="column" spacing={4}>
          <Grid item className={classes.demo}>
            <img src={image} alt="ID card" className={classes.image} />
          </Grid>
          <Grid item className={classes.demo}>
            <Typography variant="h4" align="center">
              {briefInfo}
            </Typography>
          </Grid>
          <Grid container direction="row" className={classes.demo2}>
            <Grid item>
              <SimpleList time={time} location={location} />
            </Grid>
            <Grid item>
              <SimpleList2
                contact={contact}
                itemState={itemState}
                category={category}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5">{description}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <SimpleMapPage />
      </Grid>
    </Container>
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
