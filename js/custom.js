// Map components and initialization for use on web page
$(document).ready(function() {

    var map = L.map('mainMap',{scrollWheelZoom:false,attributionControl: false}).setView([45.263998409968775, -123.86315760612488], 7);
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVmZmZpdHpzaW1tb25zIiwiYSI6ImNpb2tibnFpaDAwMDZ0eG0wYWVrcDhneWIifQ._wlyPl27csEvtO1-0Dq9mA', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);

    // Iniitial function set to determine lat and lng of a specific point, use for setting new building markers/polygons //
    //
    // var popup = L.popup();
    //
    // function onMapClick(e) {
    //     popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(map);
    // }
    //
    // map.on('click', onMapClick);
    //
    // Iniitial function set to determine lat and lng of a specific point, use for setting new building markers/polygons //


});
