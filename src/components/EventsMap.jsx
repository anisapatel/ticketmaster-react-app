import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as utils from "../utils/utils";

const EventsMap = props => {
  const locationArray = utils.findCoordinates(props);
  console.log(locationArray);

  return (
    <div>
      <Map center={["0", "0"]} zoom={2.3}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locationArray.map(item => {
          return (
            <Marker position={item.coords}>
              <Popup>Venue: {item.venue}</Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default EventsMap;
