import React, { useEffect } from "react"
import axios from "axios"

const ShowCountries = ({ searchCountries }) => {
    useEffect(() => {
        handleSearchCountries()
    }, [searchCountries])

    const handleSearchCountries = () => {
        const searchResultsDiv = document.getElementById("searchResultsDiv")
        const countriesLenght = searchCountries.length

        // Jos countries ei sisällä dataa niin palauttaa null
        if (typeof countriesLenght !== "number") {
            searchResultsDiv.innerHTML = "ERROR: No data found"
            return null
        }
        // Yli kymmenen matchia
        else if (countriesLenght > 10) {
            searchResultsDiv.innerHTML =
                "Too many matches, specify another filter"
        }
        // Alle kymmenen mutta ei yksi
        // Näytä lista
        else if (countriesLenght > 1) {
            searchResultsDiv.innerHTML = ""

            const countryListUl = document.createElement("ul")

            // Tee lista
            for (const key in searchCountries) {
                const listItemDiv = document.createElement("div")

                const countryName = document.createTextNode("p")
                countryName.textContent = searchCountries[key].name.common

                const showCountryButton = document.createElement("button")
                showCountryButton.textContent = "Show"

                listItemDiv.appendChild(countryName)
                listItemDiv.appendChild(showCountryButton)
                countryListUl.appendChild(listItemDiv)
                searchResultsDiv.appendChild(countryListUl)

                showCountryButton.onclick = () => {
                    showCountry(searchCountries[key])
                }
            }
        }

        // Kun on vain yksi matchi
        // Näytä tiedot maasta
        else if (countriesLenght === 1) {
            showCountry(searchCountries[0])
        }
    }

    function showCountry(country) {
        searchResultsDiv.innerHTML = ""

        searchResultsDiv.innerHTML = `
                <h1>${country.name.common}</h1>

                <p>Capital: ${country.capital}</p>
                <p>Area: ${country.area} km²</p>
                
                <h3>Languages</h3>
                <ul>
                    ${Object.values(country.languages).map(
                        (language, index) => {
                            return `<li key=${index}>${language}</li>`
                        }
                    )}
                </ul>

                <img src="${country.flags.png}" alt="Flag" />
            `

        getWeatherData(country.capital)
    }

    function getWeatherData(city) {
        const api_key = import.meta.env.VITE_SOME_KEY
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
        const url = `${baseUrl}?q=${city}&appid=${api_key}&units=metric`
        axios
            .get(url)
            .then((response) => {
                const searchResultsDiv =
                    document.getElementById("searchResultsDiv")

                searchResultsDiv.innerHTML += `
                    <h3>Weather in ${city}</h3>
                    <p>Temperature: ${response.data.main.temp}°C</p>
                    <img 
                        src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png" 
                        alt="Weather icon" 
                    />
                    <p>Wind: ${response.data.wind.speed} m/s</p>
                `
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error)
                const searchResultsDiv =
                    document.getElementById("searchResultsDiv")
                searchResultsDiv.innerHTML += "Error fetching weather data"
            })
    }

    return (
        <div>
            <div id="searchResultsDiv"></div>
        </div>
    )
}

export default ShowCountries
