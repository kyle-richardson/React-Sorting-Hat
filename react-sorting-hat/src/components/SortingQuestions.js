import React from "react"
import {Link} from "react-router-dom"

const SortingQuestions = ()=> {
    return(
        <div>
           <h1>Questions</h1>
           <Link to="/results">
                See results
           </Link>
        </div>
    )
}

export default SortingQuestions