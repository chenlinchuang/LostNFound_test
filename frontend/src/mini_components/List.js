/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
// import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TodayIcon from "@material-ui/icons/Today";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PropTypes from "prop-types";
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#f5f5f5",
  },
}));
/*
const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0,
};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
*/
export default function SimpleList(props) {
  const classes = useStyles();
  const { time, location } = props;
  return (
    <div className={classes.root}>
      <List direction="row" component="nav" aria-label="main info">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={location} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <TodayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${time.year}.${time.month}.${time.day}`} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessTimeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${time.hour}:${time.minute}`} />
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  time: PropTypes.shape,
  location: PropTypes.string,
};

SimpleList.defaultProps = {
  time: { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
  location: "Test location",
};
