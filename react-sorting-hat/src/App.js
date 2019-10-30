import React, { Component } from 'react';
import {Route} from "react-router-dom"

import InitiateButton from "./components/InitiateButton"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Results from "./components/Results"
import SortingQuestions from "./components/SortingQuestions"

class App extends Component {
  constructor(){
    super()
    this.state={
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={props=> <InitiateButton props ={props}/>}/>
        <Route exact path="/questions" render={props=> <SortingQuestions props ={props}/>}/>
        <Route exact path="/results" render={props=> <Results props ={props}/>}/>
        <Footer />
      </div>
    );
  }
}

export default App;
