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
currentTime.innerHTML = `${day}, ${hour}:${minutes}`;

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

  let forecastHTML = `<div class= "row">`;
  days.forEach(function (day) {
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
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let inputCity = document.querySelector("#input-city");
  city.innerHTML = `${inputCity.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

displayForecast();

function showCelcius(event) {
  event.preventDefault();
  let currentHigh = document.querySelector("#current-high");
  currentHigh.innerHTML = 17;
  let currentLow = document.querySelector("#current-low");
  currentLow.innerHTML = 10;
}

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showCelcius);

function showFarenheight(event) {
  event.preventDefault();
  let currentHigh = document.querySelector("#current-high");
  currentHigh.innerHTML = 62;
  let currentLow = document.querySelector("#current-low");
  currentLow.innerHTML = 50;
}

let farenheightLink = document.querySelector("#farenheight-link");
farenheightLink.addEventListener("click", showFarenheight);
