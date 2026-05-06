async function getWeather() {
let city = document.getElementById("city").value;
let url =
`https://wttr.in/${city}?format=j1`;
try {
let response = await fetch(url);
let data = await response.json();
let weather = data.current_condition[0];
document.getElementById("result").innerHTML = `
  <h2>${city}</h2>
  <p>Temperature: ${weather.temp_C}°C</p>
  <p>Humidity: ${weather.humidity}%</p>
  <p>Weather: ${weather.weatherDesc[0].value}</p>
`;

} catch (error) {
document.getElementById("result").innerHTML =
  "<p>City not found</p>";

}

}
