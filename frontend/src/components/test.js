import React from "react";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import Found from "../containers/Found";
import SideDrawer from "./SideDrawer";
import PostIndex from "../mini_components/index";
import Lost from "../containers/Lost";
import LostForm from "./LostForm";
import AfterSearch from "../containers/AfterSearch";

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
      <Link to="/found">
        <Button variant="contained" color="primary">
          我撿到東西
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
      <Link to="/lost">
        <Button variant="contained" color="primary">
          我要找東西
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
        <Route path="/postindex" component={PostIndex} />
        <Route path="/found" component={Found} />
        <Route path="/imgupload" component={AfterSearch} />
        <Route exact path="/lost" component={Lost} />
        <Route path="/lost/form" component={LostForm} />
        <Route path="/lost/search" component={SideDrawer} />
      </Switch>
    </div>
  );
};

export default Test;
