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
      selectedValue: '',
      result: '',
    }
  }
  addAnswer=event=> {
    const {id}= event.target
    const newAnswers = this.state.answers.map((ele, ind)=> ind===id-1 ? this.state.selectedValue : ele)
    this.setState({
      ...this.state,
      answers: newAnswers,
      selectedValue: ''
    })
  }
  handleChange = event=> {
    const {value} = event.target
    this.setState({
      ...this.state,
      selectedValue: value
    })
  }
  isChecked = event=> {
    const {value} = event.target
    return this.state.selectedValue===value
  }
  handleSubmit = ()=> {
    const answers = this.state.answers
    const hufflepuff = ['D','A','C','D','B','D']
    const ravenclaw = ['B','C','B','A','A','C']
    const gryffindor = ['C','B','A','C','D','B']
    const slytherin = ['A','D','D','B','C','A']
    const hpNumMatching = answers.filter((el, ind) => el===hufflepuff[ind]).length
    const rcNumMatching = answers.filter((el, ind) => el===ravenclaw[ind]).length
    const grNumMatching = answers.filter((el, ind) => el===gryffindor[ind]).length
    const slNumMatching = answers.filter((el, ind) => el===slytherin[ind]).length
    const houseArray = [
      {
        house: 'Hufflepuff',
        points: hpNumMatching
      },
      {
        house: 'Ravenclaw',
        points: rcNumMatching
      },
      {
        house: 'Gryffindor',
        points: grNumMatching
      },
      {
        house: 'Slytherin',
        points: slNumMatching
      }
    ]
    this.setState({
      ...this.state,
      result: houseArray.sort((a,b)=>b.points - a.points)[0].house
    })
  }
  render() {
    return (
      <div className="App-container">
        <Header />
        <Route exact path="/" render={props=> <InitiateButton props ={props}/>}/>
        {/* <Route exact path="/questions" render={props=> <SortingQuestions props ={props}/>}/> */}
        <Route exact path="/questions/:id" render={props=> <Question props={props} addAnswer={this.addAnswer} questions={questions} handleChange={this.handleChange}/>}/>
        <Route exact path="/results" render={props=> <Results props ={props} handleSubmit = {this.handleSubmit} result ={this.state.result}/>}/>
        <Footer />
      </div>
    );
  }
}

export default App;
