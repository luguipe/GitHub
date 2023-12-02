let map;
let marker;

const busStops = [
    {lat: 42.359244, lng: -71.093729 },
    {lat: 42.360175, lng: -71.094915 },
    {lat: 42.360698, lng: -71.095800 },
    {lat: 42.362953, lng: -71.099558 },
    {lat: 42.365248, lng: -71.103476 },
    {lat: 42.366806, lng: -71.106067 },
    {lat: 42.368355, lng: -71.108717 },
    {lat: 42.369192, lng: -71.110799 },
    {lat: 42.370218, lng: -71.113095 },
    {lat: 42.372085, lng: -71.115476 },
    {lat: 42.373016, lng: -71.117585 },
    {lat: 42.374863, lng: -71.118625 }
];

function initMap(){
    map = new google.maps.Map(document.getElementById("map"),{
        zoom: 14,
        center: {lat: 42.36554, lng: -71.104081},
        mapTypeId: "roadmap",
    });

    marker = new google.maps.Marker({
        position: {lat: 42.357575, lng: -71.092761},
        map: map,
    });

    let moveButton = document.getElementById('moveButton');
    moveButton.addEventListener('click', move);
}
    let counter = 0;
    function move() {
            console.log('Move Button pressed')
            if (counter >= busStops.length) conter = 0;
                // return;
                // marker.setLngLat(busStops[counter]);
            marker.setPosition(
                new google.maps.LatLng(busStops[counter].lat,busStops[counter].lng));
                counter++;
                setTimeout(move,1000);
        }

        document.addEventListener('DOMContentLoaded', initMap);
    // const addToHtml = document.getElementById('map');

    // document.addEventListener('DOMContentLoaded', function(){
        //     mapboxgl.accessToken = 'pk.eyJ1IjoibHVndWlwZSIsImEiOiJjbG91dzc0YW4wamtyMmtwOGVmeWE2YWxoIn0.8rYhKLmmhVCXgzZUBa5Mtw';
        
        //     var map = new mapboxgl.Map({
        //         container: 'map',
        //         style: 'mapbox://styles/mapbox/navigation-night-v1',
        //         center: [-71.104081, 42.36554],
        //         zoom: 14
        //     })
        
        //     var marker = new mapboxgl.Marker()
        //         .setLngLat([-71.092761, 42.357575])
        //         .addTo(map);
        
        
    
   

