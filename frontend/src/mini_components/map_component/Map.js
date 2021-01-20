/* eslint-disable react/jsx-props-no-spreading */
/*
 * Base Google Map example
 */
import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import PropTypes from "prop-types";
import GoogleMap from "google-map-react";
import MyGreatPlace from "./my_great_place";

export default function SimpleMapPage(props) {
  const { center, zoom, greatPlaceCoords } = props;
  const shouldComponentUpdate = shouldPureComponentUpdate;
  return (
    <GoogleMap
      // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
      center={center}
      zoom={zoom}
    >
      <MyGreatPlace {...greatPlaceCoords} text="B" /* road circle */ />
    </GoogleMap>
  );
}

SimpleMapPage.propTypes = {
  center: PropTypes.shape,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.shape,
};

SimpleMapPage.defaultProps = {
  center: [25.016949, 121.540347],
  zoom: 17,
  greatPlaceCoords: { lat: 25.016949, lng: 121.540347 },
};
