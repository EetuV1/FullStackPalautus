const Header = (props) => {
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map((part, index) => (
                <Part key={index} part={part} />
            ))}
        </div>
    )
}

const Total = (props) => {
    // Käy läpi kaikki excercises ja lisää ne arvoon 0 (fiksumpi tapa kuin map)
    const numberOfExercises = props.parts.reduce(
        (sum, part) => sum + part.exercises,
        0
    )
    return <p>Number of exercises {numberOfExercises}</p>
}

const App = () => {
    const course = "Half Stack application development"
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10,
        },
        {
            name: "Using props to pass data",
            exercises: 7,
        },
        {
            name: "State of a component",
            exercises: 14,
        },
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App
