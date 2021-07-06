let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: -28, lng: 137 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson("/geoJsonSources/world-geojson/countriesStateWise/australia.geojson");
}