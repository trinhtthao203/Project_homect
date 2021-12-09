import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
//import { createControlComponent } from "@react-leaflet/core";
import { useMap } from "react-leaflet";
import BlueIcon from "../Leaflet/css/images/blueicon.png";

function RouteMap(props) {
  const map = useMap();
  const position2 = L.latLng(props.location);
  useEffect(() => {
    if (!map) return;
    console.log(props.location);

    L.Routing.control({
      // router: L.Routing.osrmv1({
      //     serviceUrl: 'http://router.project-osrm.org/route/v1'
      // }),
      waypoints: [position2, L.latLng(props.lat, props.lng)],
      lineOptions: {
        styles: [{ color: "green", weight: 3.5 }],
      },
      collapsible: true,
      show: true,
      addWaypoints: false,
      routeWhileDragging: true,
      //   draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: function (i, wp) {
        if (i == 0)
          return L.marker(
            wp.latLng,
            { draggable: true },
            { iconUrl: BlueIcon }
          ).bindPopup("Vị trí của bạn");
        else return L.marker(wp.latLng).bindPopup("Vị trí chung cư");
      },
    }).addTo(map);
  }, [map]);
  return null;
}
export default RouteMap;
