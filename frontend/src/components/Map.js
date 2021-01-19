import React from "react";
import GoogleMapReact from "google-map-react";

export default function SimpleMap() {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "20%" }}>
      <GoogleMapReact
        bootstrapURLKeys={123}
        defaultCenter={{ lat: 25.017292, lng: 121.539505 }}
        defaultZoom={17}
      >
        <div>
          lat={59.955413}
          lng={30.337844}
          text=My Marker
        </div>
      </GoogleMapReact>
    </div>
  );
}
