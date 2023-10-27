import React from "react"

const Note = ({ note }) => {
    console.log("Note: ", note)
    return <li>{note.content}</li>
}

export default Note
