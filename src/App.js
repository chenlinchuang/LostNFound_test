/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import LostForm from "./components/ImgUpload";
import ResponsiveDrawer from "./components/SideDrawer";
import MultiSelect from "./components/ConditionSelect";
import Test from "./components/test";
import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans TC", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ThemeProvider theme={theme}>
            <Test />
          </ThemeProvider>
        </header>
      </div>
    </Router>
    // <ResponsiveDrawer />
  );
}

export default App;
