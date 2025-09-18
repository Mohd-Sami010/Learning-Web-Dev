document.getElementById("btn").addEventListener("click", getWeather);

async function getWeather() {
  let city = document.getElementById("city").value;
  let error = document.getElementById("error");
  let result = document.getElementById("result");

  error.textContent = "";
  result.innerHTML = "";

  if (city === "") {
    error.textContent = "Please enter a city name";
    return;
  }

  let apiKey = "b67e03e46b2b46786ca6807328c24da0";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let res = await fetch(url);
    if (!res.ok) {
      error.textContent = "City not found";
      return;
    }

    let data = await res.json();
    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>Temp: ${data.main.temp} °C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>${data.weather[0].description}</p>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
    `;
  } catch {
    error.textContent = "Network error";
  }
}
