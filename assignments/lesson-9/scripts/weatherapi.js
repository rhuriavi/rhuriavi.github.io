let weatherRequest = new XMLHttpRequest();
weatherRequest.open(GET, 'http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22', true);

weatherRequest.send();

weatherRequest.onload = function(){
    let  weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
}