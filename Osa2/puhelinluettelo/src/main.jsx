import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(<App />)

// npm run server | port 3001
// import axios from "axios"

// axios.get("http://localhost:3001/notes").then((response) => {
//     const notes = response.data
//     console.log("Notes: ", notes)
// })

// const promise2 = axios.get("http://localhost:3001/foobar")

// promise2.then((response) => {
//     console.log("Promise 2: ", response)
// })
