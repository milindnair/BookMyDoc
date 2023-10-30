// import React from 'react'
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import { REACT_APP_MAP_KEY } from "../../../token.js";

const FindDoc = () => {
  // Mumbai longitude: 72.8777° E
  // Mumbai latitude: 19.0760° N
  const [lng, setLng] = useState(72.8777);
  const [lat, setLat] = useState(19.0760);

  return (
    <div className=" text-center">
      <div
        style={{
          width: "100%", // Adjust the width as needed
          height: "800px", // Adjust the height as needed
          borderRadius: "15px",
          border: "2px solid red",
          overflow: "hidden", // To clip the border within the container
        }}
      >
        <Map
          mapboxAccessToken={REACT_APP_MAP_KEY}
          style={{
            width: "100%", // Take up 100% of the container width
            height: "100%", // Take up 100% of the container height
          }}
          initialViewState={{
            longitude: lng,
            latitude: lat,
          }}
          mapStyle="mapbox://styles/pixelpundits01/clo3963wd00jj01qxgw6oajzo"
          zoom={5}
        >
          <Marker longitude={lng} latitude={lat} />
          <Marker longitude={92.8777} latitude={29.0760} />
          <Marker latitude={26.922070} longitude={75.778885} />
          <Marker latitude={12.971599} longitude={77.594566} />
          <NavigationControl position="bottom-right" />
          <FullscreenControl />
          <GeolocateControl />
        </Map>
      </div>


    </div>
  )
}

export default FindDoc;