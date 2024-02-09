import { useState, useEffect } from "react"
import axios from "axios"

import "./App.css"
import Filter from "./components/Filter"

function App() {
    const [countries, setCountries] = useState([])
    const [searchCountries, setSearchCountries] = useState("")

    // GET countries data from API and set it to countries state
    useEffect(() => {
        const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
        axios.get(baseUrl).then((response) => {
            setCountries(response.data)
        })
    }, [])

    const allNames = () => {
        const searchResults = document.getElementById("searchResults")
        const countriesLenght = searchCountries.length

        // Jos countries ei sisällä dataa niin palauttaa null
        if (typeof countriesLenght !== "number") {
            searchResults.innerHTML = "ERROR: No data found"
            return null
        }
        // Yli kymmenen matchia
        else if (countriesLenght > 10) {
            searchResults.innerHTML = "Too many matches, specify another filter"
        }
        // Alle kymmenen mutta ei yksi
        // Näytä lista
        else if (countriesLenght > 1) {
            searchResults.innerHTML = ""

            const countryList = document.createElement("ul")

            for (const key in searchCountries) {
                const listItem = document.createElement("div")

                const countryName = document.createTextNode("p")
                countryName.textContent = searchCountries[key].name.common

                const showCountryButton = document.createElement("button")
                showCountryButton.textContent = "Show"

                listItem.appendChild(countryName)
                listItem.appendChild(showCountryButton)
                countryList.appendChild(listItem)
                searchResults.appendChild(countryList)

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

    allNames()

    function showCountry(country) {
        searchResults.innerHTML = ""

        console.log(country.languages)

        searchResults.innerHTML = `
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
    }

    return (
        <div>
            <Filter
                countries={countries}
                setSearchCountries={setSearchCountries}
            />

            <div id="searchResults"></div>
        </div>
    )
}

export default App
