import React, {useEffect} from "react"

const QuestionForm = props => {
    const id = props.id
    const {handleChange, questions, selectedValue} = props
    const questionObj = questions[id-1]
    const {question, choiceOne, choiceTwo, choiceThree, choiceFour} = questionObj
    return(
        <div>
            <form className="question-form">
                {console.log(id)}
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
                        checked={selectedValue==='A'}
                    />{choiceOne}
                </label>
                <label>
                    <input 
                        type="radio"
                        id={id}
                        name={id}
                        value='B'
                        onChange={handleChange}
                        checked={selectedValue==='B'}
                    />{choiceTwo}
                </label>
                <label>
                    <input 
                        type="radio"
                        id={id}
                        name={id}
                        value='C'
                        onChange={handleChange}
                        checked={selectedValue==='C'}
                    />{choiceThree}
                </label>
               <label>
                    <input 
                        type="radio"
                        id={id}
                        name={id}
                        value='D'
                        onChange={handleChange}
                        checked={selectedValue==='D'}
                    />{choiceFour}
               </label>
            </form>
        </div>
    )
}

export default QuestionForm