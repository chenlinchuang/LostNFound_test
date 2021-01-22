import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 40,
  },
});

export default function PostCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../static/ID.jpg"
          title="Help"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            學生證
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            在電二走廊拾獲，已送至辦公室
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          More info
        </Button>
      </CardActions>
    </Card>
  );
}
