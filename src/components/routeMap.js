import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
//import { createControlComponent } from "@react-leaflet/core";
import { useMap } from "react-leaflet";
import UserIcon from "../Leaflet/css/images/blueicon.png";
import Shadow from "../Leaflet/css/images/marker-shadow.png";
import CTIcon from "../Leaflet/css/images/redIcon.png";
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
            { draggable: true, icon: L.icon({
              iconUrl: UserIcon,
                iconSize: [38, 95],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76],
                shadowUrl: Shadow,
                shadowSize: [68, 95],
                shadowAnchor: [22, 94]
            }) }
          ).bindPopup("Vị trí của bạn");
        else return L.marker(wp.latLng,{
          icon: L.icon({
            iconUrl: CTIcon,
              iconSize: [38, 95],
              iconAnchor: [22, 94],
              popupAnchor: [-3, -76],
              shadowUrl: Shadow,
              shadowSize: [68, 95],
              shadowAnchor: [22, 94]
          }) 
        }).bindPopup("Vị trí chung cư");
      },
    }).addTo(map);
  }, [map]);
  return null;
}
export default RouteMap;
