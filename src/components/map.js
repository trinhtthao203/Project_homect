import React from "react";
import L from "leaflet";
import "../Leaflet/js/jquery-3.5.1.min.js";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import leafGreen from "../Leaflet/css/images/leaf-green.png";
import leafShadow from "../Leaflet/css/images/leaf-shadow.png";

class map extends React.Component {
  state = {
    greenIcon: {
      lat: 10.030948,
      lng: 105.769099,
    },
    zoom: 13,
  };

  greenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  render() {
    const positionGreenIcon = [
      this.state.greenIcon.lat,
      this.state.greenIcon.lng,
    ];
    const polyline = [
      [10.030368250459791, 105.769019650544152],
      [10.029882632175163, 105.769718940874014],
      [10.031143620987581, 105.770797013465895],
      [10.031133908621889, 105.770874712391432],
      [10.03114038353235, 105.770920036764664],
      [10.031171139357044, 105.770962123682665],
      [10.030713039441878, 105.771513300435728],
      [10.03033101972464, 105.77198111271656],
      [10.030233, 105.772127],
    ];

    return (
      <div className="map">
        s
        <MapContainer
          className="map"
          center={positionGreenIcon}
          zoom={17}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionGreenIcon} icon={this.greenIcon}>
            <Popup> Khoa CNTT - Dai hoc Can Tho </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default map;
