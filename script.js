document.addEventListener("DOMContentLoaded", function () {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = '75cdb6b36d8edc3625b76f1fe1df30a4';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const location = 'Delhi,IN'; // e.g., 'London,GB'

    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const iconElement = document.getElementById('weather-icon');

    fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${data.main.temp} °C`;
            descriptionElement.textContent = data.weather[0].description;

            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            iconElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
