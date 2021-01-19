import React from "react";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
import LostForm from "./components/ImgUpload";
import ResponsiveDrawer from "./components/SideDrawer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveDrawer />
      </header>
    </div>
  );
}

export default App;
