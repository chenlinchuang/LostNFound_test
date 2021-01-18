import React from "react";
import Button from "@material-ui/core/Button";
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */

const Test = () => {
  return (
    <>
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
    </>
  );
};

export default Test;
