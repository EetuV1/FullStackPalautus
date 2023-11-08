import React from "react"
import { useState } from "react"

const PersonForm = ({
    persons,
    setPersons,
    searchPersons,
    setSearchPersons,
}) => {
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")

    const formSubmit = (event) => {
        event.preventDefault()

        // Check if name already exists
        const nameAlreadyExists = persons.some(
            (person) => person.name === newName
        )
        if (nameAlreadyExists) {
            alert(`${newName} is already added to phonebook.`)
        } else {
            setPersons([...persons, { name: newName, number: newNumber }])
            setSearchPersons([
                ...searchPersons,
                { name: newName, number: newNumber },
            ])
        }

        // Clear inputs
        setNewName("")
        setNewNumber("")
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
                    />
                </div>
                <div>
                    Number:
                    <input
                        id="number"
                        value={newNumber}
                        onChange={(event) => setNewNumber(event.target.value)}
                    />
                </div>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default PersonForm
