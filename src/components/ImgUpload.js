/* eslint-disable no-unsafe-finally */
/* eslint-disable no-console */
import React from "react";
import ImageUploader from "react-images-upload";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { selectPicture } from "../redux/actions";

const ImgUpload = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Grid item xs={12}>
        <ImageUploader
          withIcon={false}
          buttonText="Choose images"
          onChange={(pic) => {
            dispatch(selectPicture(pic));
          }}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          withPreview
          singleImage
        />
      </Grid>
    </>
  );
};

export default ImgUpload;
