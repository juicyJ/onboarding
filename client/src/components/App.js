import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1> Bridgit </h1>
        </div>
        <div className="pageContent">
          <div>
            <h2><i>Save $1000 on Overdraft fees</i></h2> 
          </div>

          <div>
            <Link to={`/onboarding`}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;