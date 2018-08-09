import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment';
import 'moment-timezone';

// MIS COMPONENTS
import Jumbotron from './components/jumbotron';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1 className="display-6">Welcome to subway listener</h1>
          </header>
          <div className="row justify-content-center">
            <div className="col-md-auto">
              
              <Jumbotron />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;