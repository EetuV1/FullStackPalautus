import React from "react"
import { useState } from "react"

const Filter = ({ persons, setSearchPersons }) => {
    const [searchInput, setSearchInput] = useState("")

    const handleSeachInputChange = (event) => {
        setSearchInput(event.target.value)
        const searchInputLowerCase = event.target.value.toLowerCase()
        const personsToShow = persons.filter((person) =>
            person.name.toLowerCase().includes(searchInputLowerCase)
        )
        setSearchPersons(personsToShow)
    }
    return (
        <div>
            Filter shown with:
            <input
                id="searchInput"
                value={searchInput}
                onChange={handleSeachInputChange}
            ></input>
        </div>
    )
}

export default Filter
