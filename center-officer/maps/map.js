import { reverseGeocode } from "./geocode.js";
import { filterContainerHandler, closeAllSidePeek } from "./mapUIControl.js";
import { addMarkers, updateMarkers } from "./markers.js";

//Sample data
//import { data } from "./sampleData.js";

let data = undefined;

// Init maps box and filter box
mapboxgl.accessToken =
    "pk.eyJ1IjoiZGV2LWhubWh1eSIsImEiOiJjbHV2Yms4ZDMwMWVkMmpueXliZ3J2MDQ1In0.asdBd33NVFTmGXv4LgHdRA";
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/standard",
    center: [106.660172, 10.762622],
    zoom: 10.4,
    pitch: 22,
    language: 'vi',
    locale: 'vi'
});

map.addControl(new mapboxgl.AttributionControl({
    customAttribution: 'Bản đồ được thiết kế bở WAM Team'
}));

map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
// User location
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true,
        },
        trackUserLocation: true,
    }), 'bottom-right');

let randomContainer = document.querySelector("#random-sidepeek");

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    language: "vi",
    locale: "vi",
    bbox: [106.502, 10.078, 107.081, 10.885],
    marker: false,
});
map.addControl(geocoder);

const marker = new mapboxgl.Marker({
    color: "blue",
});

map.on("click", (e) => {
    marker.remove();
    closeAllSidePeek();
    const features = map.queryRenderedFeatures(e.point);
    if (features.length > 0) return;
    randomContainer.classList.add("hidden");
    const clickedLocation = e.lngLat;
    reverseGeocode(clickedLocation, marker, randomContainer, map);

});

geocoder.on("result", (event) => {
    const coordinates = event.result.center;
    const coordinatesObject = {
        lng: coordinates[0],
        lat: coordinates[1],
    };

    console.log("coordinates search", coordinates);
    randomContainer.classList.add("hidden");
    marker.remove();

    // Set the search marker position and add it to the map
    // marker.setLngLat(coordinates);
    // marker.addTo(map);
    reverseGeocode(coordinatesObject, marker, randomContainer, map);

    // You can perform additional actions with the search result data if needed
});

// Get user locatio

function successCallback(position) {
    console.log(position.coords.longitude, position.coords.latitude)
    map.flyTo({
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 16,
        speed: 1.2
    });
}

function errorCallback(error) {
    console.log(error);
}

// Add filter box
const mapElement = document.querySelector(".map-container");


map.on('style.load', () => {
    map.setConfigProperty('basemap', 'showTransitLabels', false);
    map.setConfigProperty('basemap', 'showPointOfInterestLabels', false);
})

// Start process in the map.on('load') event
const iconName = ['ad', 'ad-none', 'adReported-none', 'adReported', 'fb-feedback', 'fb-question', 'fb-registry', 'fb-report'];

map.on('load', async () => {
    console.log("Loading data");

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
})

document
    .querySelector(".random-container .delete-random")
    .addEventListener("click", () => {
        marker.remove();
        randomContainer.classList.add("hidden");
    });


export function processStorageData() {
    let fbdata = JSON.parse(localStorage.getItem("feedbackData"));
    fbdata = fbdata.filter(item => item.type === 'ad_content' || item.type === 'ad_place');
    fbdata.forEach(item => {
        updateGeojsonDataAdPlace(item);
    })
    map.getSource('places').setData(data);
}