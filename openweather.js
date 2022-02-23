import fetch from "node-fetch"
import key from "./apiKey.js"

const latitude = 48
const longitude = 9
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`

fetch(url)
    .then(response => response.json())
    .then(data => printWeather(data))
    .catch(e => console.error("Something is wrong, please try it later - Error:", e))

function printWeather(data) {
    console.log(`Waether in ${data.name}: ${data.weather[0].description} and ${data.main.temp}°C`)
}