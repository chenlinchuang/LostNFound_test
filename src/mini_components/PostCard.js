/* eslint-disable global-require */
import React from "react";
import {
  // Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  // CardHeader,
  Divider,
  // Grid,
  GridList,
  GridListTile,
  // Paper,
  // TextField,
  // Typography,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SimpleList from "./List";
import ID from "../static/123.jpg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  gridList: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
  Card: {
    margin: "auto",
  },
  Media: {
    height: 200,
    width: "100%",
  },
  Title: {
    marginBottom: 12,
  },
}));

const PostCard = () => {
  const classes = useStyles();
  const testdata = [
    {
      title: "ID card",
      image: ID,
      time: { year: 2021, month: 1, day: 2, hour: 17, minute: 59 },
      location: "圖書館",
    },
    {
      title: "雨傘",
      image: ID,
      time: { year: 2021, month: 2, day: 3, hour: 18, minute: 58 },
      location: "博理館",
    },
    {
      title: "手機",
      image: ID,
      time: { year: 2021, month: 3, day: 4, hour: 19, minute: 57 },
      location: "校門口",
    },
    {
      title: "ID card",
      image: ID,
      time: { year: 2021, month: 1, day: 2, hour: 17, minute: 59 },
      location: "圖書館",
    },
    {
      title: "ID card",
      image: ID,
      time: { year: 2021, month: 1, day: 2, hour: 17, minute: 59 },
      location: "圖書館",
    },
    {
      title: "ID card",
      image: ID,
      time: { year: 2021, month: 1, day: 2, hour: 17, minute: 59 },
      location: "圖書館",
    },
    {
      title: "ID card",
      image: ID,
      time: { year: 2021, month: 1, day: 2, hour: 17, minute: 59 },
      location: "圖書館",
    },
  ];
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={600}
        className={classes.gridList}
        cols={6}
        spacing={10}
      >
        {testdata.map((elem) => (
          <GridListTile key={testdata.indexOf(elem)} cols={1}>
            <Card variant="outlined" className={classes.Card}>
              <CardActionArea>
                <CardMedia title="None">
                  <img className={classes.Media} src={ID} alt="ID" />
                </CardMedia>
                <CardContent>
                  <Typography
                    className={classes.Title}
                    align="left"
                    variant="h5"
                  >
                    {elem.title}
                  </Typography>
                  <Divider />
                  <SimpleList time={elem.time} location="博理112" />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default PostCard;
