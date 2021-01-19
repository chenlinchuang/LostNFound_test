import React from "react";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import LostForm from "./LostForm";
import ImgUpload from "./ImgUpload";

const Buttons = () => {
  return (
    <div>
      <Link to="/lostform">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("handleNext");
          }}
        >
          LostForm
        </Button>
      </Link>
      <Link to="/imgupload">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("handleNext");
          }}
        >
          ImgUpload
        </Button>
      </Link>
    </div>
  );
};

const Test = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Buttons />
        </Route>
        <Route path="/lostform">
          <LostForm />
        </Route>
        <Route path="/imgupload">
          <ImgUpload />
        </Route>
      </Switch>
    </div>
  );
};

export default Test;
