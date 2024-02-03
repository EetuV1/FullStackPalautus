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
            // console.log("Response: ", response)
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

            searchCountries.forEach(function (country) {
                var li = document.createElement("li")
                li.textContent = country.name.common
                searchResults.appendChild(li)
            })
        }
        // Kun on vain yksi matchi
        // Näytä tiedot maasta
        else if (countriesLenght === 1) {
            searchResults.innerHTML = ""

            const theCountry = searchCountries[0]

            searchResults.innerHTML = `
                <h1>${theCountry.name.common}</h1>

                <p>Capital: ${theCountry.capital}</p>
                <p>Area: ${theCountry.area} km²</p>
                
                <h3>Languages</h3>
                <ul>
                    ${Object.values(theCountry.languages).map(
                        (language, index) => {
                            return `<li key=${index}>${language}</li>`
                        }
                    )}
                </ul>

                <img src="${theCountry.flags.png}" alt="Flag" />
            `
        }
    }

    allNames()

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
