import React from "react"
import {Link} from "react-router-dom"

const InitiateButton = ()=> {
    return (
        <div className="initiate-component">
            <h1>Sorting Hat Quiz</h1>
            <Link to="/questions/1">
                Start Quiz
            </Link>
        </div>
    )
}

export default InitiateButton