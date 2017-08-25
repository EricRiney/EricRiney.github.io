
// lil function to add a lat lon click thing
// that assigns Properties of a Popup
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}

var myDataLine;
var myDataPoint;