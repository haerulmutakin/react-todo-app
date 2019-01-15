import React, { Component } from 'react';
import './App.css';
import { Header } from './components/commons/Header';
import Footer from './components/commons/Footer';

import { Todo } from './components/Todo';

class App extends Component {
  render() {
    let user = {
      name: 'Takin',
      hobbies: ['code', 'wathcing anime']
    }
    return (
      <div className="App">
        <Header/>
        <Todo user={user}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
