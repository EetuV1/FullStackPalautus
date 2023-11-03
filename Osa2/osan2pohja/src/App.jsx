import { useState } from "react"

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "045-1234567" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
        { name: "Dan Abramov", number: "12-43-234345" },
        { name: "Mary Poppendieck", number: "39-23-6423122" },
    ])
    // So we can show the searched persons without modifying the original persons array
    const [searchPersons, setSearchPersons] = useState([...persons])
    const [searchInput, setSearchInput] = useState("")

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

    const personsToShow =
        persons.length == 0
            ? "There Are No Contacts"
            : searchPersons.map((person) => (
                  <li key={person.name}>
                      {person.name} {person.number}
                  </li>
              ))

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
            <h3>Phonebook</h3>
            Filter shown with:
            <input
                id="searchInput"
                value={searchInput}
                onChange={handleSeachInputChange}
            ></input>
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
            <h3>Numbers</h3>
            <ul>{personsToShow}</ul>
        </div>
    )
}

export default App
