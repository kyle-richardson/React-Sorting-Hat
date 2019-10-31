import React from "react"

const QuestionForm = props => {
    const id = props.id
    const {handleChange, questions, isChecked} = props
    const questionObj = questions[id-1]
    const {question, choiceOne, choiceTwo, choiceThree, choiceFour} = questionObj
    return(
        <div>
            <form className="question-form">
                <label>
                    {question}
                </label>
                <label>
                    <input 
                        type="radio"
                        id={id}
                        name={id}
                        value='A'
                        onChange={handleChange}
                        checked={isChecked}
                    />{choiceOne}
                </label>
                <label>
                    <input 
                        type="radio"
                        id={id}
                        name={id}
                        value='B'
                        onChange={handleChange}
                    />{choiceTwo}
                </label>
                <label>
                    <input 
                        type="radio"
                        id={id}
                        name={id}
                        value='C'
                        onChange={handleChange}
                    />{choiceThree}
                </label>
               <label>
                    <input 
                        type="radio"
                        id={id}
                        name={id}
                        value='D'
                        onChange={handleChange}
                    />{choiceFour}
               </label>
            </form>
        </div>
    )
}

export default QuestionForm