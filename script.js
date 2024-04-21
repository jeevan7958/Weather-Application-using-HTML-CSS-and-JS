const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "8fb043c187e2e35d3835cd7657fea94b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"8fb043c187e2e35d3835cd7657fea94b"}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMnJqzieIn7bYy8TO4SAiD3_suytfOIQ0uT6lhu63PlOoctfjY";
            break;
        case 'Clear':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHqSXfjVlWI4R-izmtuAY3j83zUrNziGxI3CXB-q5NooJtiOs";
            break;
        case 'Rain':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEcVXDA16blVSuC795zp4FEWwhQIywI5pm1MfiQlSuAvblitb";
            break;
        case 'Mist':
            weather_img.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHNrRQN4t5HPsgB3dBX_Y6d53MBTJGHm6Z9DQ4_v8WYO0tMLNX";
            break;
        case 'Snow':
            weather_img.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlq07zyLUBTMyHVkq2RUvKSOCaqYOKdrw-r1CpJ5NF3f5sl6Nb";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});