import React from "react"
import {Link} from "react-router-dom"
import QuestionForm from "./QuestionForm"

const Question = props=> {
    const id = parseInt(props.props.match.params.id)
    const {questions, handleChange, addAnswer} = props
    return(
        id<=6 &&
        <div>
            <h2>Question {id}</h2>
            <QuestionForm handleChange={handleChange} questions={questions} id={id}/>
            <Link id={id} to={id<6 ? `/questions/${id+1}` : `/results`} onClick={addAnswer}>
                {id<6 ? 'Next Question' : 'See Results'}
            </Link>
        </div>
    )
}

export default Question