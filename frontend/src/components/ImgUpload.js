/* eslint-disable no-unsafe-finally */
/* eslint-disable no-console */
import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";

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

const imgAxios = axios.create({
  baseURL: "http://localhost:4000/api/guess",
  headers: {
    "Content-type": "application/json",
  },
});

const ImgUpload = () => {
  const classes = useStyles();
  const [pictures, setPictures] = useState([]);
  const [progress, setProgress] = useState(0);
  const imgSelectHandler = (picture) => {
    console.log(picture);
    console.log(URL.createObjectURL(picture[0]));
    setPictures(picture);
    setProgress(0);
    console.log(progress);
  };
  const imgSelectHandler2 = (e) => {
    console.log(e.target.files[0]);
    // setPictures();
  };
  const onUploadProgress = (e) => {
    console.log(Math.round((100 * e.loaded) / e.total));
  };
  const imguploadHandler = async () => {
    console.log(pictures);
    const formData = new FormData();
    formData.append("image", pictures);
    try {
      const {
        data: { msg },
      } = await imgAxios.post("/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
      console.log(msg);
    } catch (error) {
      console.log(error);
    } finally {
      return;
    }
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
          onChange={imgSelectHandler2}
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
        singleImage
      />
    </div>
  );
};

export default ImgUpload;
