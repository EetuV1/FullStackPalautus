import { useState } from "react"

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "045-1234567" },
    ])
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
        }

        // Clear inputs
        setNewName("")
        setNewNumber("")
    }

    const personsToShow =
        persons.length == 0
            ? "There Are No Contacts"
            : persons.map((person) => (
                  <li key={person.name}>
                      {person.name} {person.number}
                  </li>
              ))

    return (
        <div>
            <h3>Phonebook</h3>

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

            <h3>Numbers</h3>

            <ul>{personsToShow}</ul>
        </div>
    )
}

export default App
