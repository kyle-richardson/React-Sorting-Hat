import React from "react"
import {Link} from "react-router-dom"

const InitiateButton = ()=> {
    return (
        <div>
            <h1>Sorting Hat Quiz</h1>
            <Link to="/questions">
                Start Quiz
            </Link>
        </div>
    )
}

export default InitiateButton