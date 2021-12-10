import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RouteMap from "./routeMap";
import GetLocation from "./GetLocation";
function BigMap(props) {
  const location = GetLocation();
  const lat = props.match.params.lat;
  const lng = props.match.params.lng;
  return (
    <div>
      <div className="map">
        <MapContainer
          className="map"
          center={[10.030948, 105.769099]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: '100vh', width: '100%', padding: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {location.loaded && !location.error && (
            <RouteMap lat={lat} lng={lng} location={location.coordinate} />
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default BigMap;
