let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat:    40.617915, lng: -97.076322 },
  });
  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  // map.data.loadGeoJson("/geoJsonSources/world-geojson/countriesStateWise/australia.geojson");
  map.data.loadGeoJson("/geoJsonSources/hoods.geojson");
}