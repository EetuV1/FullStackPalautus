import { useState } from "react"

const StactisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}:</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const { good, neutral, bad } = props

    const all = good + neutral + bad

    // good: 1 | neutral: 0 | bad: -1
    const average = (good * 1 + bad * -1) / all

    const positive = 100 * (good / all)

    return (
        <div>
            {all === 0 ? (
                <p>No feedback given</p>
            ) : (
                <table>
                    <tbody>
                        <StactisticLine text="Good" value={good} />
                        <StactisticLine text="Neutral" value={neutral} />
                        <StactisticLine text="Bad" value={bad} />
                        <StactisticLine text="All" value={all} />
                        <StactisticLine
                            text="Average"
                            value={average.toFixed(2)}
                        />
                        <StactisticLine
                            text="Positive"
                            value={`${positive.toFixed(2)}%`}
                        />
                    </tbody>
                </table>
            )}
        </div>
    )
}

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="Good: " />
            <Button
                handleClick={() => setNeutral(neutral + 1)}
                text="Neutral: "
            />
            <Button handleClick={() => setBad(bad + 1)} text="Bad: " />

            <h2>Statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
