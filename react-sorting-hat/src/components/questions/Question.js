import React from "react"
import {Link} from "react-router-dom"
import QuestionForm from "./QuestionForm"

const Question = props=> {
    const id = parseInt(props.props.match.params.id)
    const {questions, handleChange, addAnswer, selectedValue} = props
    let nextPage = id
    if(!!selectedValue) nextPage= id+1
    
    return(
        id<=6 &&
        <div>
            <h2>Question {id}</h2>
            <QuestionForm 
                handleChange={handleChange} 
                questions={questions} 
                id={id}
                selectedValue={selectedValue}
            />
            <Link id={id} to={id<6 || !selectedValue ? `/questions/${nextPage}` : `/results`} onClick={addAnswer}>
                {id<6 ? 'Next Question' : 'See Results'}
            </Link>
        </div>
    )
}

export default Question