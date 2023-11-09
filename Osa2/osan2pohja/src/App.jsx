import { useState, useEffect } from "react"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import axios from "axios"

const App = () => {
    const [persons, setPersons] = useState([])
    // So we can show the searched persons without modifying the original persons array
    const [searchPersons, setSearchPersons] = useState([...persons])

    // GET persons data from JSON server | port: 3001
    useEffect(() => {
        // The browser will clg possible errors automatically
        axios.get("http://localhost:3001/persons").then((response) => {
            console.log("Promise fulfilled | Persons: ", response.data)
            setPersons(response.data)
            setSearchPersons(response.data)
        })
    }, [])

    return (
        <div>
            <h3>Phonebook</h3>
            <Filter persons={persons} setSearchPersons={setSearchPersons} />
            <PersonForm
                persons={persons}
                setPersons={setPersons}
                searchPersons={searchPersons}
                setSearchPersons={setSearchPersons}
            />
            <Persons
                persons={persons}
                searchPersons={searchPersons}
                setSearchPersons={setSearchPersons}
            />
        </div>
    )
}

export default App
