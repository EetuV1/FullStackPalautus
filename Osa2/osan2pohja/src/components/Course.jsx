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

const Total = (props) => {
    // Makes a list of the exercises | [10, 7, 14]
    const parts = props.course.parts.map((course) => course.exercises)
    // Adds each part in the list to the sum | 31
    const numberOfExercises = parts.reduce((sum, parts) => sum + parts)

    return <p>Number of exercises {numberOfExercises}</p>
}

const Course = (props) => {
    console.log("Course toimii...")

    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course} />
        </div>
    )
}

export default Course
