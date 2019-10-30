import React, { Component } from 'react';
import {Route} from "react-router-dom"

import InitiateButton from "./components/InitiateButton"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Results from "./components/Results"
// import SortingQuestions from "./components/questions/SortingQuestions"
import Question from "./components/questions/Question"
import {questions} from "./components/questions/questionData"

class App extends Component {
  constructor(){
    super()
    this.state={
      answers: ['','','','','','']
    }
  }
  setAnswers=event=> {
    const {index, value} = event.target
    const newAnswers = [...this.props.answers, this.props.answers[index]=value]
    this.setState({
      answers: newAnswers
    })
  }
  render() {
    return (
      <div className="App-container">
        <Header />
        <Route exact path="/" render={props=> <InitiateButton props ={props}/>}/>
        {/* <Route exact path="/questions" render={props=> <SortingQuestions props ={props}/>}/> */}
        <Route exact path="/questions/:id" render={props=> <Question props={props} answers={this.state.answers} questions={questions}/>}/>
        <Route exact path="/results" render={props=> <Results props ={props}/>}/>
        <Footer />
      </div>
    );
  }
}

export default App;
