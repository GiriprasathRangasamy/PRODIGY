function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeather, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function fetchWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    const apiKey = '1f2af3e8641702e4667b7b3b5da750f7'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error fetching weather:', error);
        alert('Error fetching weather data. Please try again later.');
      });
  }
  
  function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
      <h2>Current Weather</h2>
      <p>Location: ${weatherData.name}</p>
      <p>Temperature: ${weatherData.main.temp}°C</p>
      <p>Weather: ${weatherData.weather[0].main}</p>
    `;
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  