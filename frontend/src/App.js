import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
import LostForm from "./components/ImgUpload";
import ResponsiveDrawer from "./components/SideDrawer";
import Test from "./components/test";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Test />
        </header>
      </div>
    </Router>
  );
}

export default App;
