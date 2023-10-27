import React from "react"

const Header = (props) => {
    return <h1>{props.course.name}</h1>
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = (props) => {
    console.log("Content props: ", props)
    return (
        <div>
            {props.course.parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}

// const Total = (props) => {
//     // Käy läpi kaikki excercises ja lisää ne arvoon 0 (fiksumpi tapa kuin map)
//     const numberOfExercises = props.parts.reduce(
//         (sum, part) => sum + part.exercises,
//         0
//     )
//     return <p>Number of exercises {numberOfExercises}</p>
// }
const Course = (props) => {
    console.log("Course toimii...")

    return (
        <div>
            <Header course={props.course} />
            {/* <Total course={course.parts} /> */}
            <Content course={props.course} />
        </div>
    )
}

export default Course
