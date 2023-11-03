import { useState } from "react"

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
    const [newName, setNewName] = useState("")

    function checkName(name) {
        const nameAlreadyExists = persons.some((person) => person.name === name)
        if (nameAlreadyExists) {
            alert(`${name} is already added to phonebook.`)
        } else {
            setPersons([...persons, { name }])
        }
    }

    const formSubmit = (event) => {
        event.preventDefault()
        checkName(newName)
        setNewName("")
    }

    const personsToShow =
        persons.length == 0
            ? "There Are No Contacts"
            : persons.map((person) => <li key={person.name}>{person.name}</li>)

    return (
        <div>
            <h3>Phonebook</h3>

            <form onSubmit={formSubmit}>
                Name :
                <input
                    id="name"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                />
                <br />
                <button type="submit">Add</button>
            </form>

            <h3>Numbers</h3>
            <ul>{personsToShow}</ul>
        </div>
    )
}

export default App
