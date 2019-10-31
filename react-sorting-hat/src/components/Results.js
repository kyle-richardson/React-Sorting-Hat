import React, {useEffect} from "react"

const Results = props=> {
    const {handleSubmit, result} = props
    useEffect(()=>{
        handleSubmit()
    },[])
    return(
        <div className="results-container">
            <h1>Results</h1>
            <p>{result.house} ( {result.percentage}% )</p>
            <p></p>
        </div>
    )
}

export default Results