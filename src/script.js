let currentTime = document.querySelector("#day-time");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 0) {
  minutes = `0${minutes}`;
}
currentTime.innerHTML = `${day}, ${hour}:${minutes}`;

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class= "row">`;
  forecast.forEach(function (day) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
         <div class="day">${day}</div>
             <i class="fa-solid fa-sun"></i>
               <div class="weather-forecast-temperatures"> 
                   <span class="weather-forecast-temperature-high">25°</span>
                   <span class="weather-forecast-temperature-low">17°</span>
                </div>
      </div>
      `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "701f06352d61835bc4fc894e7b084629";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function showWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(city) {
  let apiKey = "701f06352d61835bc4fc894e7b084629";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;
  search(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

displayForecast(response);
