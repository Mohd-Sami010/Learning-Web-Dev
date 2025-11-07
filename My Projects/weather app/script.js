document.getElementById("search-button").addEventListener("click", getWeather);

async function getWeather() {
    let cityName = document.getElementById("city-input").value;
    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.textContent = "";
    result.textContent = "";

    if (cityName === "") {
        error.textContent = "Enter a city name first.";
        return;
    }
    let apiKey = "b67e03e46b2b46786ca6807328c24da0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        let searchResult = await fetch(url);
        if (!searchResult.ok) {
            error.textContent = "City Not Found";
            return;
        }
        let data = await searchResult.json();
        result.innerHTML = `
        <h3>${cityName}</h3>
        <p>Temp: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
        `;
    }
    catch {
        error.textContent = "Network error"
    }
}