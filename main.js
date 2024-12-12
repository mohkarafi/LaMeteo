const apiKey = "33a3377f899b8295cc66b6333f948535"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input ')
const searchBtn = document.querySelector('.search button')
const weatherImage = document.querySelector('.weather-icone')
const weather = document.querySelector('.weather')


async function checkWeather(city) {


    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data)
    if (response.status == 404) {
        alert("enter a valid city")
    }
    else {
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.tempo').innerHTML = Math.round(data.main.temp) + ' °C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = (data.wind.speed) + " Km/h"

        if (data.weather[0].main == "Clear") {
            weatherImage.src = "imagess/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "imagess/drizzle.png"
        }
        else if (data.weather[0].main == "snow") {
            weatherImage.src = "imagess/snow.png"
        }
        else if (data.weather[0].main == "Clouds") {
            weatherImage.src = "imagess/clouds.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherImage.src = "imagess/mist.png"
        }


        weather.style.display = "block";
    }
}


searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);


})



