import { apiKey } from './ApiKey.js' // API Key

// Elements
const input = document.getElementById(`prompt`);
const search = document.getElementById(`search`);
const location = document.getElementById(`location`);
const temp = document.getElementById(`temp`);
const condition = document.getElementById(`condition`);
const max = document.getElementById(`max`);
const min = document.getElementById(`min`);
const humidity = document.getElementById(`humidity`);
const speed = document.getElementById(`speed`);

// Variable containing current hour
const Hour = new Date().getHours();

// Change the Background according to the time of the day
switch (true) {
    case (Hour >= 18):
        document.getElementById(`outer-container`).style.background = `url(./assets/background/bg-dark.jpg) no-repeat fixed center`;
        document.getElementById(`outer-container`).style.backgroundSize = `contain`;
        document.getElementById(`inner-container`).style.background = `rgba(255, 255, 255, 0.1)`;
        break

    case (Hour >= 6):
        document.getElementById(`outer-container`).style.background = `url(./assets/background/bg-light.jpg) no-repeat fixed center`;
        document.getElementById(`outer-container`).style.backgroundSize = `contain`;
        document.getElementById(`inner-container`).style.background = `rgba(255, 255, 255, 0.3)`;
        break

    case (Hour >= 0):
        document.getElementById(`outer-container`).style.background = `url(./assets/background/bg-dark.jpg) no-repeat fixed center`;
        document.getElementById(`outer-container`).style.backgroundSize = `contain`;
        document.getElementById(`inner-container`).style.background = `rgba(255, 255, 255, 0.1)`;
        break
}

// Function to fetch the weather info
async function getWeatherInfo(arg) {
    if (arg !== "") {
        try {
            // Fetching the data from the API
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            // Displaying the data
            location.textContent = `${data.name}, ${data.sys.country}`;
            temp.textContent = `${Math.floor(data.main.temp)}°C`;
            condition.textContent = data.weather[0].main;

            // Setting the icon according to the weather condition
            switch (condition.textContent) {
                case `Clear`:
                    document.querySelector(`#icon`).setAttribute("src", "./assets/icons/Clear.png");
                    document.querySelector(`#icon`).setAttribute("alt", "Clear Icon");
                    break;

                case `Clouds`:
                    document.querySelector(`#icon`).setAttribute("src", "./assets/icons/Clouds.png");
                    document.querySelector(`#icon`).setAttribute("alt", "Clouds Icon");
                    break;

                case `Drizzle`:
                    document.querySelector(`#icon`).setAttribute("src", "./assets/icons/Drizzle.png");
                    document.querySelector(`#icon`).setAttribute("alt", "Drizzle Icon");
                    break;

                case `Mist`:
                    document.querySelector(`#icon`).setAttribute("src", "./assets/icons/Mist.png");
                    document.querySelector(`#icon`).setAttribute("alt", "Mist Icon");
                    break;

                case `Rain`:
                    document.querySelector(`#icon`).setAttribute("src", "./assets/icons/Rain.png");
                    document.querySelector(`#icon`).setAttribute("alt", "Rain Icon");
                    break;

                case `Snow`:
                    document.querySelector(`#icon`).setAttribute("src", "./assets/icons/Snow.png");
                    document.querySelector(`#icon`).setAttribute("alt", "Snow Icon");
                    break;

                case `Haze`:
                    document.querySelector(`#icon`).setAttribute("src", "./assets/icons/Haze.png");
                    document.querySelector(`#icon`).setAttribute("alt", "Haze Icon");
                    break;
            }

            // Displaying the additional data
            max.textContent = `H : ${Math.floor(data.main.temp_max)} °C`;
            min.textContent = `L : ${Math.floor(data.main.temp_min)} °C`;
            humidity.textContent = `${data.main.humidit}%`;
            speed.textContent = `${data.wind.speed} kmph`;

        }

        catch (error) {
            alert(error.message)
        }
    } else {
        alert("Please enter a city name!")
    }
}

// Displaying the weather info of Delhi by default
document.addEventListener(`DOMContentLoaded`, getWeatherInfo("Delhi, India"));

// Event Listener for search button
search.addEventListener('click', () => getWeatherInfo(input.value))