document.getElementById("getWeatherBtn").addEventListener("click", async function() {
    const apiKey = "014416f789bfe3b600a5dfe4385dd0ff";  // Your API Key
    const city = document.getElementById("cityInput").value;
    const weatherBox = document.querySelector(".weather-box");
    const errorMessage = document.getElementById("errorMessage");

    if (!city) {
        errorMessage.textContent = "❌ Please enter a city name!";
        weatherBox.style.display = "none";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        document.getElementById("cityName").textContent = `📍 ${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").textContent = `🌡 Temperature: ${data.main.temp}°C`;
        document.getElementById("weatherCondition").textContent = `🌥 ${data.weather[0].description}`;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        weatherBox.style.display = "block";
        errorMessage.textContent = "";
    } catch (error) {
        errorMessage.textContent = "⚠️ City not found! Try again.";
        weatherBox.style.display = "none";
    }
});
