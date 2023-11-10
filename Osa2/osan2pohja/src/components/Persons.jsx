import React from "react"
import personsServices from "../services/persons"

const deletePersonFunction = (person) => {
    const msg = "Delete " + person.name + "?"
    const confirm = window.confirm(msg)

    if (confirm) {
        // Ok clicked
        personsServices.deletePerson(person.id).then((response) => {
            window.location.reload()
            console.log(response)
        })
    }
}

const Persons = ({ persons, searchPersons }) => {
    const personsToShow =
        persons.length === 0 ? (
            <tr>
                <td colSpan="3">There Are No Contacts</td>
            </tr>
        ) : (
            searchPersons.map((person) => (
                <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.number}</td>
                    <td>
                        <button onClick={() => deletePersonFunction(person)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        )

    return (
        <div>
            <h3>Numbers</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>{personsToShow}</tbody>
            </table>
        </div>
    )
}

export default Persons
