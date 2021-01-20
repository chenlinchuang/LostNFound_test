import React from "react";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import LostForm from "./LostForm";
import SideDrawer from "./SideDrawer";
import PostIndex from "../mini_components/index";
import SimilarItems from "./SimilarItems";

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
          SideDrawer
        </Button>
      </Link>
      <Link to="/similar">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // eslint-disable-next-line no-alert
            alert("handleNext");
          }}
        >
          SimilarItems
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
        <Route path="/lostform" component={LostForm} />
        <Route path="/imgupload" component={SideDrawer} />
        <Route path="/postindex" component={PostIndex} />
        <Route path="/similar" component={SimilarItems} />
      </Switch>
    </div>
  );
};

export default Test;
