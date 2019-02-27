import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Skills from "./components/Skills/Skills";
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main />
      </div>
    );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/skills' component={Skills}/>
    </Switch>
  </main>
);


export default App;
