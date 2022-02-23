import fetch from "node-fetch"
import key from "./apiKey.js"

const latitude = 48.7701177843416
const longitude = 9.169522057503494
const url = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))