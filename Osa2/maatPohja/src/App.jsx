import { useState, useEffect } from "react"
import axios from "axios"

import "./App.css"
import Filter from "./components/Filter"
import ShowCountries from "./components/ShowCountries"

/* 
You will need a API key to run. You can get it from https://openweathermap.org

Command to run:
export VITE_SOME_KEY=<YOUR_KEY> && npm run dev
*/

function App() {
    const [countries, setCountries] = useState([])
    const [searchCountries, setSearchCountries] = useState([])

    // GET countries data from API and set it to countries state
    useEffect(() => {
        const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
        axios
            .get(baseUrl)
            .then((response) => {
                setCountries(response.data)
            })
            .catch((error) => {
                console.error("Error fetching countries data:", error)
                const searchResultsDiv =
                    document.getElementById("searchResultsDiv")

                searchResultsDiv.innerHTML = error
            })
    }, [])

    return (
        <div>
            <Filter
                countries={countries}
                setSearchCountries={setSearchCountries}
            />

            <ShowCountries searchCountries={searchCountries} />
        </div>
    )
}

export default App
