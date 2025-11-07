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
        GetForcast(cityName);
    }
    catch {
        error.textContent = "Network error"
    }
}
async function GetForcast(cityName) {
    let apiKey = "b67e03e46b2b46786ca6807328c24da0";
    let forcastDiv = document.getElementById("forcast");
    forcastDiv.innerHTML = "";

    try {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
        let respose = await fetch(url);
        if (!respose.ok) return;

        let data = await respose.json();

        let dailyData = {};
        data.list.forEach(item => {
            let date = item.dt_txt.split(" ")[0];
            if (!dailyData[date]) {
                dailyData[date] = {
                    temps: [],
                    icon: item.weather[0].icon,
                    desc: item.weather[0].description
                };
            }
            dailyData[date].temps.push(item.main.temp);
        });

        let days = Object.keys(dailyData).slice(0, 5);
        days.forEach(date => {
            let temps = dailyData[date].temps;
            let max = Math.max(...temps).toFixed(1)
            let min = Math.min(...temps).toFixed(1)
            let icon = dailyData[date].icon;
            let desc = dailyData[date].desc;

            console.log(date);
            forcastDiv.innerHTML += `
                <div class="forcast-day">
                    <p>${new Date(date).toLocaleDateString("en-US", { weekday: "short" })}</p>
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
                    <p>${desc}</p>
                    <p>${min}° / ${max}°C</p>
                </div>
                `;
        });
    }
    catch {
        forcastDiv.innerHTML = "<p style='color:red;'>Forecast unavailable</p>";
    }
}