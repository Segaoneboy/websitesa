const apiKey = '7732d12f89164511b8e93639242110';
const city = 'Petropavlovsk,Kazakhstan';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            document.getElementById('weather').innerText = `Error: ${data.error.message}`;
        }
    } catch (error) {
        document.getElementById('weather').innerText = 'Error fetching weather data.';
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;
    const windSpeed = data.current.wind_kph;

    weatherDiv.innerHTML = `
        <p>City: ${data.location.name}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${description}</p>
        <p>Wind Speed: ${windSpeed} km/h</p>
    `;
}

getWeather();
