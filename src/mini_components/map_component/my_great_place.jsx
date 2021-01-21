import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import PropTypes from "prop-types";
import greatPlaceStyle from "./my_great_place_styles";

export default function MyGreatPlace(props) {
  const { text } = props;

  const shouldComponentUpdate = shouldPureComponentUpdate;

  return <div style={greatPlaceStyle}>{text}</div>;
}

MyGreatPlace.propTypes = {
  text: PropTypes.string,
};

MyGreatPlace.defaultProps = {
  text: "",
};
