
// Define the origin and destination
const origen = document.getElementById("lugar-origen");
const destino = document.getElementById("lugar-destino");

// Create a DirectionsService object
const directionsService = new google.maps.DirectionsService();

// Define the travel mode
const travelMode = google.maps.TravelMode.DRIVING;

// Define the request object
const request = {
  origin: origen,
  destination: destino,
  travelMode: travelMode,
};

// Call the DirectionsService object to calculate the distance
directionsService.route(request, function (response, status) {
  if (status == google.maps.DirectionsStatus.OK) {
    // Get the distance value in meters
    const distance = response.routes[0].legs[0].distance.value;

    // Convert the distance to kilometers
    const distanceInKm = distance * 0.001;

    // Calculate the cost of the trip
    const cost = distanceInKm * 250;

    console.log("Distance: " + distanceInKm + " km");
    console.log("Cost: $" + cost);
  } else {
    console.log("Error: " + status);
  }
});