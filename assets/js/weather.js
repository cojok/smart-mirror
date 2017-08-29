function weather() {

    let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://api.darksky.net/forecast/483629746b8ebbc0a37c450b5a7cf59f/48.1351,11.5820');
    // xhr.open('GET', 'https://api.darksky.net/forecast/483629746b8ebbc0a37c450b5a7cf59f/'+latLng.lat+','+latLng.lng+'?units=auto');
    xhr.open('GET', 'https://api.darksky.net/forecast/483629746b8ebbc0a37c450b5a7cf59f/48.2081743,16.3738189?units=auto');
    xhr.onload = function () {
        if (xhr.status === 200) {
            // console.log('Forecast.io data ' + xhr.responseText);
            getData(xhr.responseText);
            // document.querySelector('.location').style.display='none';
            document.querySelector('.weather-widget').style.opacity = 1;
        }
        else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();

}

//
weather();
function getData(response) {

    let temp = 0, icon, res = JSON.parse(response);

    temp = res.currently.temperature;
    icon = res.currently.icon;

    document.querySelector('.temp').innerHTML = Math.round(temp) + '<sup>o</sup> C';
    document.querySelector('.weather-icon use').setAttribute('xlink:href', 'assets/img/svg/'+icon+ '.svg#Layer_1');
}

// let getLocation = document.querySelector('.location input[name=location]'),
//     getForecast = document.querySelector('.location button'),
//     city, latLong = null;
//
// getForecast.addEventListener('click', () => {
//     city = getLocation.value;
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','https://maps.googleapis.com/maps/api/geocode/json?address=Munich&key=AIzaSyDoK903T2qDlT93Jps254QI9-pMF6QohuQ');
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             // console.log('geolocation ' + xhr.responseText);
//             let geoLoc = JSON.parse(xhr.responseText);
//             latLong = {
//                 'lat': geoLoc.results[0].geometry.location.lat,
//                 'lng': geoLoc.results[0].geometry.location.lng
//             }
//
//             weather(latLong);
//             updateWeather(latLong);
//
//         }
//         else {
//             console.log('Request failed.  Returned status of ' + xhr.status);
//         }
//     };
//     xhr.send();
// });


function updateWeather(latLong) {
    setInterval(()=>{
        weather(latLong);
},60*60*3000);
}
