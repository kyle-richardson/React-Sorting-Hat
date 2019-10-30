import React from "react"
import {Link} from "react-router-dom"
import QuestionForm from "./QuestionForm"

const Question = props=> {
    console.log(props)
    const id = props.props.match.params.id
    const {answers, questions} = props
    return(
        <div>
            <h2>Question {id}</h2>
            <QuestionForm questions={questions}/>
            <Link to={`/questions/${parseInt(id)+1}`}>
                Next Question
            </Link>
        </div>
    )
}

export default Question