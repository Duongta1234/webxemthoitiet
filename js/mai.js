const app_id ="4227e7dec5f798c40f7dd262332274f5";
const searchInput = document.querySelector('#search-input')
const city_name = document.querySelector(".city-name");
const weather_state = document.querySelector(".weather-state");
const weather_icon = document.querySelector(".weather_icon");
const temparature = document.querySelector(".temparature");


const doam = document.querySelector(".doam");
const wind_speed = document.querySelector(".wind-speed");
searchInput.addEventListener('change',function(e){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${app_id}&units=metric&lang=vi`)
    .then(async res =>{
        const data = await res.json();
        console.log(data);
        city_name.innerHTML = data.name || '--';
        weather_state.innerHTML = data.weather[0].description||'--';
        weather_icon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        temparature.innerHTML= Math.round(data.main.temp)|| '--';
        doam.innerHTML=data.main.humidity|| '--';
        wind_speed.innerHTML = (data.wind.speed*3.6).toFixed(2) || '--';
    
    });

})