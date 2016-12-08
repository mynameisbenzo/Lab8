$(document).ready(function(){
  
  
});

function call(){
  $.ajax({
    ///call to weather
    url: "http://api.openweathermap.org/data/2.5/weather?appid=ff64e7c7d2489388868dfbcb1297ec90&q=" + $("#zip").val(),
    type: "GET",
    dataType:"json",
  })
   .done(showList)
   .fail(function(xhr, status, errorThrown) {
        console.log("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
   })
}

function showList(data){
  console.clear();
  console.log(data);
  $(".display").empty();
  $(".display").append("<p>"+ data.name +"</p>");
  $(".display").append("<img src = 'assets/" + getImage(data.weather[0].description) + "'/>" +"</p>");
  $(".display").append("Current: " + KtoF(data.main.temp) + "F<br>Max: " + KtoF(data.main.temp_max) + "F<br>Min: " + KtoF(data.main.temp_min) +"F</p>");
  $(".display").append(data.weather[0].description +"</p>");
  $(".display").append(degreeDirect(data.wind.deg) +"</p>");
  $(".display").append(data.wind.speed +"</p>");
}

function getImage(d){
  if(d.includes("rain"))
    return "rain.png";
  else if(d.includes("cloud"))
    return "cloudy.png";
  else
    return "Sunny.png";
}

function KtoF(K){
  var F = K * (9/5) - 459.67;
  return F.toFixed(2);
}

function degreeDirect(deg) {
    if (deg > 11.25 && deg < 33.75) {
        return "NNE";
    }
    else if (deg > 33.75 && deg < 56.25) {
        return "ENE";
    }
    else if (deg > 56.25 && deg < 78.75) {
        return "E";
    }
    else if (deg > 78.75 && deg < 101.25) {
        return "ESE";
    }
    else if (deg > 101.25 && deg < 123.75) {
        return "ESE";
    }
    else if (deg > 123.75 && deg < 146.25) {
        return "SE";
    }
    else if (deg > 146.25 && deg < 168.75) {
        return "SSE";
    }
    else if (deg > 168.75 && deg < 191.25) {
        return "S";
    }
    else if (deg > 191.25 && deg < 213.75) {
        return "SSW";
    }
    else if (deg > 213.75 && deg < 236.25) {
        return "SW";
    }
    else if (deg > 236.25 && deg < 258.75) {
        return "WSW";
    }
    else if (deg > 258.75 && deg < 281.25) {
        return "W";
    }
    else if (deg > 281.25 && deg < 303.75) {
        return "WNW";
    }
    else if (deg > 303.75 && deg < 326.25) {
        return "NW";
    }
    else if (deg > 326.25 && deg < 348.75) {
        return "NNW";
    }
    else {
        return "N";
    }
};

