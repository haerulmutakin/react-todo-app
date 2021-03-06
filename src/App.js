import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './components/commons/Header';
import Todo from './components/Todo';
import Done from './components/Done';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Todo} />
          <Route path="/done" component={Done} />
        </div>
      </Router>
    );
  }
}

export default App;
