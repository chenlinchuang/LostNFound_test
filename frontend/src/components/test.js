import React from "react";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
// import LostForm from "./LostForm";
import ImgUpload from "./ImgUpload";
import PostIndex from "../mini_components/index";

const Buttons = () => {
  return (
    <div>
      <Link to="/postindex">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("handleNext");
          }}
        >
          PostIndex
        </Button>
      </Link>
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
        <Route exact path="/" component={Buttons} />
        <Route path="/imgupload" component={ImgUpload} />
        <Route path="/postindex" component={PostIndex} />
      </Switch>
    </div>
  );
};

export default Test;
