import { useState } from "react"

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>

            <h2>Statistics</h2>
            <h4>Good: {good}</h4>
            <h4>Neutral: {neutral}</h4>
            <h4>Bad: {bad}</h4>
        </div>
    )
}

export default App
