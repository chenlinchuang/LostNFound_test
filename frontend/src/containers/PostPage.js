/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PostDetail from "../mini_components/PostDetail";

import { ITEMS_QUERY } from "../components/graphql/index";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
  },
});

export default function PostPage() {
  const { id } = useParams();
  const { loading, data, error } = useQuery(ITEMS_QUERY, {
    variables: { id },
  });

  const postDetailProps =
    !data || data.items.length === 0
      ? {
          briefInfo: "學生證",
          time: { year: 2021, month: 1, day: 20, hour: 17, minute: 59 },
          location: "圖書館",
          contact: "09123456789",
          itemState: "未有人領取",
          category: "身分證類",
          description: "在圖書館門口撿到的~請聯繫我~",
        }
      : {
          ...data.items[0],
          category: data.items[0].category.name,
          image: data.items[0].pic.DataURL,
          itemState: data.items[0].isMatch,
        };

  return (
    <>
      {loading ? (
        <Typography>Loading</Typography>
      ) : (
        <ThemeProvider theme={theme}>
          <PostDetail {...postDetailProps} />
        </ThemeProvider>
      )}
    </>
  );
}
