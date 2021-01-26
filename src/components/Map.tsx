import React, { useEffect } from "react";
import L from "leaflet";

import { baseMaps, overlayMaps } from "./BaseMaps/baseMaps";
import "../../node_modules/leaflet/dist/leaflet.css";
import "./Map.css";

const Map: React.FC = () => {
  useEffect(() => {
    mapInit();
  }, []);

  const mapInit = () => {
    setTimeout(() => {
      let myMap = L.map("mapid")
        .locate({ setView: true, maxZoom: 10 })
        .setMaxBounds([
          [-90, -180],
          [90, 180],
        ])
        .setMinZoom(4);

      // .setView([34.052235, -118.243683], 10);

      baseMaps.Grayscale.addTo(myMap);

      L.control.layers(baseMaps, overlayMaps).addTo(myMap);
    }, 100);
  };

  return (
    <React.Fragment>
      <div id="mapid"></div>
    </React.Fragment>
  );
};

export default Map;
