//Feature 1
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

// Feature 2
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let inputCity = document.querySelector("#input-city");
  city.innerHTML = `${inputCity.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

//Bonus feature

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
