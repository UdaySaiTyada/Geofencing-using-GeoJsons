function initMap() 
{
    // The location of australia Centre
    const australiaCentre = { lat: -24.412774, lng: 133.429948 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: australiaCentre,
    });
    // The marker, positioned at Australia Centre
    const marker = new google.maps.Marker({
      position: australiaCentre,
      map: map,
    });
  }
  