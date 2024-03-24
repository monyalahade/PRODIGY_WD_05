async function getWeather() {
  const locationInput = document.getElementById("locationInput").value;

  if (!locationInput) {
    alert("Please enter a location.");
    return;
  }

  const apiKey = "aa8d7c45a3f2dc2617bcf8d79bc5a480";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === "404") {
      alert("Location not found. Please enter a valid location.");
      return;
    }

    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("An error occurred while fetching weather data. Please try again.");
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>${data.weather[0].description}</p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
