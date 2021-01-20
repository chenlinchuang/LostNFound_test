/* eslint-disable no-unsafe-finally */
/* eslint-disable no-console */
import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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
    // console.log(URL.createObjectURL(picture[0]));
    setPictures(picture);
    setProgress(0);
    console.log(progress);
  };
  const onUploadProgress = (e) => {
    console.log(Math.round((100 * e.loaded) / e.total));
  };
  const imguploadHandler = async () => {
    // const reader = new FileReader();

    // reader.readAsDataURL(pictures[0]);
    // reader.onload = () => {
    //   console.log("img", reader.result);
    // };
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
    <>
      <Grid item xs={12}>
        <ImageUploader
          withIcon={false}
          buttonText="Choose images"
          onChange={imgSelectHandler}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880 * 4}
          withPreview
          singleImage
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          onClick={imguploadHandler}
        >
          Upload
        </Button>
      </Grid>
    </>
  );
};

export default ImgUpload;
