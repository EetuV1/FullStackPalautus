import { useState } from "react"

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
    const [newName, setNewName] = useState("")

    const formSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        console.log("Name: ", name)
        setPersons([...persons, { name }])
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
