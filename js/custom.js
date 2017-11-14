// Map components and initialization for use on web page
$(document).ready(function() {

    var map = L.map('mainMap',{scrollWheelZoom:false,attributionControl: false}).setView([38.2873,-104.6320], 7);
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVmZmZpdHpzaW1tb25zIiwiYSI6ImNpb2tibnFpaDAwMDZ0eG0wYWVrcDhneWIifQ._wlyPl27csEvtO1-0Dq9mA', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(map);

    
});
