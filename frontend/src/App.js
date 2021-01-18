import React from "react";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
import LostForm from "./components/LostForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LostForm />
      </header>
    </div>
  );
}

export default App;
