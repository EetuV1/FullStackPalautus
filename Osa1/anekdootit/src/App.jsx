import { useState } from "react"

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
        "The only way to go fast, is to go well.",
    ]

    const [selected, setSelected] = useState(0)
    const maxValue = anecdotes.length

    function nextAnecodeClick() {
        // This do-while loop makes sure randomNumber isn't equal to selected
        // so we always get a new anecdote
        let randomNumber
        do {
            randomNumber = Math.floor(Math.random() * maxValue)
        } while (randomNumber === selected)
        setSelected(randomNumber)
    }

    // will make a list with zeros init
    const [points, setPoints] = useState(Array(maxValue).fill(0))

    function voteClick() {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }

    // Takes the first one in case of multiple maxPoints
    const maxPoints = Math.max(...points)
    const indexOfMaxPoints = points.indexOf(maxPoints)

    return (
        <div>
            <h1>Anecdote of the day</h1>
            {anecdotes[selected]}
            <br />
            <p>Has {points[selected]} votes.</p>
            <br />
            <button onClick={voteClick}>Vote</button>
            <button onClick={nextAnecodeClick}>Next Anecdote</button>

            <h1>Anecdote with most votes</h1>
            {anecdotes[indexOfMaxPoints]}
            <p>Number of votes: {maxPoints}</p>
        </div>
    )
}

export default App
