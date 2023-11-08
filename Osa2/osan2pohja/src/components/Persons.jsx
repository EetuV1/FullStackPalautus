import React from "react"

const Persons = ({ persons, searchPersons }) => {
    const personsToShow =
        persons.length == 0
            ? "There Are No Contacts"
            : searchPersons.map((person) => (
                  <li key={person.name}>
                      {person.name} {person.number}
                  </li>
              ))
    return (
        <div>
            <h3>Numbers</h3>
            <ul>{personsToShow}</ul>
        </div>
    )
}

export default Persons
