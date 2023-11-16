import { useState, useEffect } from "react"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import personsServices from "./services/persons"
import Notification from "./components/Notification"

const App = () => {
    const [persons, setPersons] = useState([])
    // So we can show the searched persons without modifying the original persons array
    const [searchPersons, setSearchPersons] = useState([...persons])
    const [notificationMessage, setNotificationMessage] = useState(null)

    // GET persons data from server
    useEffect(() => {
        personsServices.getAll().then((response) => {
            setPersons(response.data)
            setSearchPersons(response.data)
        })
    }, [])

    return (
        <div>
            <h3>Phonebook</h3>
            <Filter persons={persons} setSearchPersons={setSearchPersons} />
            <br />
            <Notification
                notificationMessage={notificationMessage}
                setNotificationMessage={setNotificationMessage}
            />

            <PersonForm
                persons={persons}
                setPersons={setPersons}
                searchPersons={searchPersons}
                setSearchPersons={setSearchPersons}
                setNotificationMessage={setNotificationMessage}
            />
            <Persons
                persons={persons}
                setPersons={setPersons}
                searchPersons={searchPersons}
                setSearchPersons={setSearchPersons}
                setNotificationMessage={setNotificationMessage}
            />
        </div>
    )
}

export default App
