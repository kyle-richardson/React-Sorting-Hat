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
      answers: ['','','','','',''], 
      selectedValue: ''
    }
  }
  addAnswer=event=> {
    console.log(event.target)
    const {id}= event.target
    const newAnswers = this.state.answers.map((ele, ind)=> ind===id-1 ? this.state.selectedValue : ele)
    this.setState({
      ...this.state,
      answers: newAnswers
    })
    console.log(this.state)
  }
  handleChange = event=> {
    const {value} = event.target
    this.setState({
      ...this.state,
      selectedValue: value
    })
  }
  render() {
    return (
      <div className="App-container">
        <Header />
        <Route exact path="/" render={props=> <InitiateButton props ={props}/>}/>
        {/* <Route exact path="/questions" render={props=> <SortingQuestions props ={props}/>}/> */}
        <Route exact path="/questions/:id" render={props=> <Question props={props} addAnswer={this.addAnswer} questions={questions} handleChange={this.handleChange}/>}/>
        <Route exact path="/results" render={props=> <Results props ={props}/>}/>
        <Footer />
      </div>
    );
  }
}

export default App;
