import { useState } from "react"

const Statistics = (props) => {
    const { good, neutral, bad } = props

    const all = good + neutral + bad

    // good: 1 | neutral: 0 | bad: -1
    const avarage = (good * 1 + bad * -1) / all
    const roundedAverage = avarage.toFixed(2)

    const positive = 100 * (good / all)
    const roundedPositive = positive.toFixed(2)

    return (
        <div>
            {all === 0 ? (
                <p>No feedback given</p>
            ) : (
                <div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>

                    <br />

                    <p>All: {all}</p>
                    <p>Average: {roundedAverage}</p>
                    <p>Positive: {roundedPositive}%</p>
                </div>
            )}
        </div>
    )
}

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
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
