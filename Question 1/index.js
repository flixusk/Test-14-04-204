document.getElementById('get-weather').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    //using openweathermap.org api key (i have not done the .env part as it will take time. i know its a security issue)
    const apiKey = '77e816a32d5ebedde3b42674f454a380';
    //api documentation (https://openweathermap.org/current) "Built-in API request by city name" part.
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});