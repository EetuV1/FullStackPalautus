import React from "react"
import { useState } from "react"
import personsServices from "../services/persons"

const PersonForm = ({
    persons,
    setPersons,
    searchPersons,
    setSearchPersons,
    setNotificationMessage,
    setErrorNotificationMessage,
}) => {
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")

    const formSubmit = (event) => {
        event.preventDefault()

        // Ensure the name is always in uppercase
        const uppercaseName = newName.replace(/\b\w/g, (char) =>
            char.toUpperCase()
        )

        // Check if name already exists
        const nameAlreadyExists = persons.some(
            (person) => person.name === uppercaseName
        )

        if (nameAlreadyExists) {
            // User can replace the old number with a new one
            const msg =
                uppercaseName +
                " is already added to phonebook, replace the old number with a new one?"
            const confirm = window.confirm(msg)

            if (confirm) {
                // Ok clicked
                const id = persons.find(
                    (person) => person.name === uppercaseName
                ).id
                const newPersonObject = {
                    name: uppercaseName,
                    number: newNumber,
                }
                personsServices
                    .update(id, newPersonObject)
                    .then((response) => {
                        // Goes trough the persons, if the id matches, replace the old person with the response.data
                        const updatePersons = persons.map((person) =>
                            person.id !== id ? person : response.data
                        )
                        setPersons(updatePersons)
                        setSearchPersons(updatePersons)
                        // Clear inputs
                        setNewName("")
                        setNewNumber("")
                        // Notification
                        setNotificationMessage(
                            `${uppercaseName}'s number has been changed`
                        )
                    })
                    .catch((error) => {
                        // If someone is trying to modify a person's number but it has already been remoced from the server
                        setErrorNotificationMessage(`Unknown error`)
                    })
            }
        } else {
            // Add a new person

            // the DB will assign an id for the new note
            const personObject = {
                name: uppercaseName,
                number: newNumber,
            }

            // POST the form data to the server
            personsServices
                .create(personObject)
                .then((response) => {
                    setPersons([...persons, response.data])
                    setSearchPersons([...persons, response.data])
                    // Clear inputs
                    setNewName("")
                    setNewNumber("")
                    // send a notification
                    setNotificationMessage(`Added ${uppercaseName}`)
                })
                // If the server returns an error
                // Part 3.19
                .catch((error) => {
                    console.log(error.response.data)
                    setErrorNotificationMessage(error.response.data.error)
                })
        }
    }

    return (
        <div>
            <h3>Add a new</h3>
            <form onSubmit={formSubmit}>
                <div>
                    Name:
                    <input
                        id="name"
                        value={newName}
                        onChange={(event) => setNewName(event.target.value)}
                        required
                    />
                </div>
                <div>
                    Number:
                    <input
                        id="number"
                        value={newNumber}
                        onChange={(event) => setNewNumber(event.target.value)}
                        required
                    />
                </div>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default PersonForm
