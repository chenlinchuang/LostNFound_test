import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import PostCard from "../mini_components/PostPreview";
import NoImageIcon from "../static/456.jpg";
import NoDataImg from "../static/noData.png";
import { ITEMS_QUERY } from "./graphql/index";

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
}));

function SimilarItems() {
  const classes = useStyles();
  const history = useHistory();
  const title = useSelector((state) => state.briefIntro);
  const toFindSimilar = useSelector((state) => state.toFindSimilar);
  const [findSimilar, { loading, data, error }] = useLazyQuery(ITEMS_QUERY);

  useEffect(() => {
    if (toFindSimilar) {
      findSimilar({ variables: { query: title } });
    }
  }, [findSimilar, title, toFindSimilar]);

  useEffect(() => console.log("dd:", data), [data]);

  const similarItems =
    loading || !data || data.items.length === 0 ? (
      <ListItem>
        <img style={{ margin: "auto" }} src={NoDataImg} alt="No Data" />
      </ListItem>
    ) : (
      data.items.map((item) => (
        <ListItem>
          <PostCard
            briefInfo={item.briefIntro}
            image={item.pic ? item.pic.DataURL : NoImageIcon}
            time={item.time}
            location={item.location}
            onClickFuncDetail={() => history.push(`/post/${item.id}`)}
          />
        </ListItem>
      ))
    );

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            相似結果
          </Typography>
          <List>{similarItems}</List>
        </Paper>
      </main>
    </>
  );
}

export default SimilarItems;
