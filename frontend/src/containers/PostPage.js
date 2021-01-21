import React from "react";
import { useParams } from "react-router-dom";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import PostDetail from "../mini_components/PostDetail";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
  },
});

export default function PostPage() {
  const { id } = useParams();

  return (
    <ThemeProvider theme={theme}>
      <PostDetail
        briefInfo="尋獲學生證~"
        time={{ year: 2021, month: 1, day: 20, hour: 17, minute: 59 }}
        location="圖書館"
        contact="09123456789"
        itemState="未有人領取"
        category="身分證類"
        description="在圖書館門口撿到的~請聯繫我~"
      />
    </ThemeProvider>
  );
}
