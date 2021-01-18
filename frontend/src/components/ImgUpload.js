import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const ImgUpload = () => {
  const classes = useStyles();
  const [pictures, setPictures] = useState([]);
  const imgSelectHandler = (picture) => {
    // eslint-disable-next-line no-console
    console.log(picture);
    setPictures(picture);
  };
  const imguploadHandler = async () => {
    // eslint-disable-next-line no-console
    console.log(pictures);
    const reader = new FileReader();

    reader.readAsDataURL(pictures[0]);
    reader.onload = () => {
      console.log("img", reader.result);
    };
  };

  return (
    <div className={classes.root}>
      <label htmlFor="contained-button-file">
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<SaveIcon />}
        >
          File
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={imguploadHandler}
      >
        Upload
      </Button>
      <ImageUploader
        withIcon
        buttonText="Choose images"
        onChange={imgSelectHandler}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880 * 4}
        withPreview
      />
    </div>
  );
};

export default ImgUpload;
