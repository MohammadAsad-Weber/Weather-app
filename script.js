import { apiKey } from './ApiKey.js'

const url = `https://api.openweathermap.org/data/2.5/weather?q=Delhi,India&appid=${apiKey}&units=metric`;

const Input = document.getElementById(`Search`);
const Btn = document.getElementById(`Btn`);
const Location = document.getElementById(`Location`);
const temp = document.getElementById(`temp`);
const text = document.getElementById(`text`);
const max = document.getElementById(`max`);
const min = document.getElementById(`min`);
const Humidity = document.getElementById(`Humidity`);
const Speed = document.getElementById(`Speed`);

const Hour = new Date().getHours();

switch (true) {
    case (Hour >= 18):
        document.getElementById(`wrapper`).style.background = `url(https://i.pinimg.com/564x/2c/50/94/2c509459e7e9b6103a30d8ea0fb41f0b.jpg) no-repeat fixed center`;
        document.getElementById(`wrapper`).style.backgroundSize = `contain`;
        document.getElementById(`container`).style.background = `rgba(255, 255, 255, 0.1)`;
        break

    case (Hour >= 6):
        document.getElementById(`wrapper`).style.background = `url(https://i.pinimg.com/564x/6f/91/9f/6f919f28cb7a830481f9b0866fc2c15b.jpg) no-repeat fixed center`;
        document.getElementById(`wrapper`).style.backgroundSize = `contain`;
        document.getElementById(`container`).style.background = `rgba(255, 255, 255, 0.3)`;
        break

    case (Hour >= 0):
        document.getElementById(`wrapper`).style.background = `url(https://i.pinimg.com/564x/2c/50/94/2c509459e7e9b6103a30d8ea0fb41f0b.jpg) no-repeat fixed center`;
        document.getElementById(`wrapper`).style.backgroundSize = `contain`;
        document.getElementById(`container`).style.background = `rgba(255, 255, 255, 0.1)`;
        break
}

document.addEventListener(`DOMContentLoaded`, Initialize());

async function Initialize() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const T = Math.floor(data.main.temp);
        const XT = Math.floor(data.main.temp_max);
        const NT = Math.floor(data.main.temp_min);

        Location.textContent = data.name + `, ` + data.sys.country;
        temp.textContent = T + `°C`;
        text.textContent = data.weather[0].main;

        switch (text.textContent) {
            case `Clear`:
                document.querySelector(`img`).setAttribute("src", "https://cdn0.iconfinder.com/data/icons/weather-forecast-17/128/forecast-weather_sun-clear-hot-512.png");
                document.querySelector(`img`).setAttribute("alt", "Clear Icon");
                break;

            case `Clouds`:
                document.querySelector(`img`).setAttribute("src", "https://cdn4.iconfinder.com/data/icons/weather-flat-2/614/428_-_Cloudy-512.png");
                document.querySelector(`img`).setAttribute("alt", "Clouds Icon");
                break;

            case `Drizzle`:
                document.querySelector(`img`).setAttribute("src", "https://cdn1.iconfinder.com/data/icons/weather-filled-line-8/64/drizzle_weather_forecast_climate_meteorology-512.png");
                document.querySelector(`img`).setAttribute("alt", "Drizzle Icon");
                break;

            case `Mist`:
                document.querySelector(`img`).setAttribute("src", "https://cdn2.iconfinder.com/data/icons/yahoo-weather/512/_mist-28-512.png");
                document.querySelector(`img`).setAttribute("alt", "Mist Icon");
                break;

            case `Rain`:
                document.querySelector(`img`).setAttribute("src", "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png");
                document.querySelector(`img`).setAttribute("alt", "Rain Icon");
                break;

            case `Snow`:
                document.querySelector(`img`).setAttribute("src", "https://cdn3.iconfinder.com/data/icons/picons-weather/57/23_snow_blizzard-1024.png");
                document.querySelector(`img`).setAttribute("alt", "Snow Icon");
                break;

            case `Haze`:
                document.querySelector(`img`).setAttribute("src", "https://cdn1.iconfinder.com/data/icons/weather-470/128/HAZE-512.png");
                document.querySelector(`img`).setAttribute("alt", "Haze Icon");
                break;
        }

        max.textContent = `H : ` + XT + `°C`;
        min.textContent = `L : ` + NT + `°C`;
        Humidity.textContent = data.main.humidity + `%`;
        Speed.textContent = data.wind.speed + ` kmph`;

    }

    catch (error) {
        document.body.style.background = `#fff`
        document.body.innerHTML = `<div>${error}<br>
                                   <b>Please Refresh the Page</b></div>`;
    }
}

function Search() {
    async function Retrieve() {
        if (Input.value !== ``) {

            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Input.value}&appid=${apiKey}&units=metric`);
                const data = await response.json();

                const T = Math.floor(data.main.temp);
                const XT = Math.floor(data.main.temp_max);
                const NT = Math.floor(data.main.temp_min);

                Location.textContent = data.name + `, ` + data.sys.country;
                temp.textContent = T + `°C`;
                text.textContent = data.weather[0].main;

                switch (text.textContent) {
                    case `Clear`:
                        document.querySelector(`img`).setAttribute("src", "https://cdn0.iconfinder.com/data/icons/weather-forecast-17/128/forecast-weather_sun-clear-hot-512.png");
                        document.querySelector(`img`).setAttribute("alt", "Clear Icon");
                        break;

                    case `Clouds`:
                        document.querySelector(`img`).setAttribute("src", "https://cdn4.iconfinder.com/data/icons/weather-flat-2/614/428_-_Cloudy-512.png");
                        document.querySelector(`img`).setAttribute("alt", "Clouds Icon");
                        break;

                    case `Drizzle`:
                        document.querySelector(`img`).setAttribute("src", "https://cdn1.iconfinder.com/data/icons/weather-filled-line-8/64/drizzle_weather_forecast_climate_meteorology-512.png");
                        document.querySelector(`img`).setAttribute("alt", "Drizzle Icon");
                        break;

                    case `Mist`:
                        document.querySelector(`img`).setAttribute("src", "https://cdn2.iconfinder.com/data/icons/yahoo-weather/512/_mist-28-512.png");
                        document.querySelector(`img`).setAttribute("alt", "Mist Icon");
                        break;

                    case `Rain`:
                        document.querySelector(`img`).setAttribute("src", "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png");
                        document.querySelector(`img`).setAttribute("alt", "Rain Icon");
                        break;

                    case `Snow`:
                        document.querySelector(`img`).setAttribute("src", "https://cdn3.iconfinder.com/data/icons/picons-weather/57/23_snow_blizzard-1024.png");
                        document.querySelector(`img`).setAttribute("alt", "Snow Icon");
                        break;

                    case `Haze`:
                        document.querySelector(`img`).setAttribute("src", "https://cdn1.iconfinder.com/data/icons/weather-470/128/HAZE-512.pngg");
                        document.querySelector(`img`).setAttribute("alt", "Haze Icon");
                        break;
                }

                max.textContent = `H : ` + XT + `°C`;
                min.textContent = `L : ` + NT + `°C`;
                Humidity.textContent = data.main.humidity + `%`;
                Speed.textContent = data.wind.speed + ` kmph`;

                Input.value = ``;
            }

            catch (error) {
                document.body.style.background = `#fff`
                document.body.innerHTML = `<div>${error}<br>
                                           <b>Please Refresh the Page</b></div>`;
            }
        }
    }

    Retrieve()
};

Btn.addEventListener('click', Search)