import React from "react"

const QuestionForm = props => {
    const id = props.id
    const {handleChange, questions} = props
    const questionObj = questions[id-1]
    const {question, choiceOne, choiceTwo, choiceThree, choiceFour} = questionObj
    return(
        <div>
            <form>
                <label>
                    {question}
                </label>
                <input 
                    type="radio"
                    id={id}
                    name={id}
                    value='A'
                    onChange={handleChange}
                />{choiceOne}
                <input 
                    type="radio"
                    id={id}
                    name={id}
                    value='B'
                    onChange={handleChange}
                />{choiceTwo}
                <input 
                    type="radio"
                    id={id}
                    name={id}
                    value='C'
                    onChange={handleChange}
                />{choiceThree}
                <input 
                    type="radio"
                    id={id}
                    name={id}
                    value='D'
                    onChange={handleChange}
                />{choiceFour}
            </form>
        </div>
    )
}

export default QuestionForm