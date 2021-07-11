let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat:    -35.622809001,  lng: 144.525526 },
  });

  map.data.loadGeoJson("/geoJsonSources/prdData.geojson");

  // accurate DATA - 20.6 MB - Takes 60ms to render a 20 MB file.
  // map.data.loadGeoJson("/geoJsonSources/world-geojson/countriesStateWise/usaWithSuburbsV2.geojson");

  // URL EXample - Taking about 5secs to render a 20 MB file 
  // map.data.loadGeoJson("https://generic-files-develop.s3.ap-southeast-2.amazonaws.com/GENERIC/wyoming.json");
  // map.data.loadGeoJson("https://generic-files-develop.s3.ap-southeast-2.amazonaws.com/GENERIC/usaWithSuburbsV2.geojson");

  // Large Data - 67 MB
  // map.data.loadGeoJson("/geoJsonSources/sample.geojson");

  // map.data.setStyle(function(feature) 
  // {
  //   var geo = feature.getGeometry();
  //   var size = feature.getProperty('size');
  //   feature.circle = new google.maps.Circle(
  //     {
  //       fillColor: 'red',
  //       fillOpacity: .2,
  //       strokeColor: 'white',
  //       strokeWeight: .5,
  //       map: map,
  //       center: geo.get(),
  //       radius: size,
  //    });
  //    feature.circle.bindTo('map', map.data, 'map');
  //    return {
  //       visible: true
  //     };
  // });

}