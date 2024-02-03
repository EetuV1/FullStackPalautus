import React from "react"
import { useState } from "react"

const Filter = ({ countries, setSearchCountries }) => {
    const [searchInput, setSearchInput] = useState("")
    const [countryNames, setCountryNames] = useState([])

    const handleSeachInputChange = (event) => {
        setSearchInput(event.target.value)
        const searchInputLowerCase = event.target.value.toLowerCase()
        const countriesToShow = countries.filter((country) =>
            country.name.common.toLowerCase().includes(searchInputLowerCase)
        )

        setSearchCountries(countriesToShow)
    }

    return (
        <div>
            <p>
                Find countries:{" "}
                <input
                    id="searchInput"
                    value={searchInput}
                    onChange={handleSeachInputChange}
                ></input>
            </p>
        </div>
    )
}

export default Filter
