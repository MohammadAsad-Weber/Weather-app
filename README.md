# Weather App

This Weather App is built using HTML, CSS, and JavaScript (Fetch API). It allows users to search for the current weather conditions of any city and displays relevant weather information, including temperature, weather condition, humidity, and wind speed. The app also changes its background based on the time of day and displays an icon representing the current weather condition.

## Features

- Search for weather information by city name.
- Display current temperature, weather condition, humidity, and wind speed.
- Change background based on the time of day (morning, afternoon, evening).
- Display weather icons based on the current weather condition.

## Usage

1. Clone the repository to your local machine.
2. Open the `Index.html` file in your browser.
3. Enter the name of a city in the input field and click the search button to get the weather information.

## Files

- `Index.html`: The main HTML file that contains the structure of the app.
- `style.css`: The CSS file that styles the app.
- `script.js`: The JavaScript file that contains the logic for fetching and displaying weather information.
- `ApiKey.js`: A JavaScript file that contains the API key for accessing the weather API (this file is ignored by `.gitignore`).

## API Key

To use this app, you need to provide your own API key from OpenWeatherMap. Create a file named `ApiKey.js` in the root directory and add the following code:

```javascript
export const apiKey = 'YOUR_API_KEY_HERE';