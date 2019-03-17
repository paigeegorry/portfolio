import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
