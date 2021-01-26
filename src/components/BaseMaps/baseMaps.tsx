import L from "leaflet";

let darkMode = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    id: "mapid",
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

let grayscale = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  {
    id: "mapid",
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
);

let topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  id: "mapid",
  maxZoom: 20,
  attribution:
    '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
});

let hike = L.tileLayer("https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png", {
  id: "mapid",
  maxZoom: 20,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

let sea = L.tileLayer("https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png", {
  attribution:
    'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors',
});

export let baseMaps = {
  Grayscale: grayscale,
  Darkmode: darkMode,
  Hiking: hike,
  Topographical: topo,
};

export let overlayMaps = {
  OpenSeaMap: sea,
};
