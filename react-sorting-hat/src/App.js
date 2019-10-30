import React, { Component } from 'react';
import InitiateButton from "./components/InitiateButton"
import Header from "./components/Header"
import Footer from "./components/Footer"

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
        <InitiateButton />
        <Footer />
        <Route exact path="/" render={props=> <InitiateButton props ={props}/>}/>
        <Route exact path="/questions" render={props=> <SortingQuestions props ={props}/>}/>
        <Route exact path="/results" render={props=> <Results props ={props}/>}/>
      </div>
    );
  }
}

export default App;
