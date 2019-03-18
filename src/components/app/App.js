import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AllProjects from '../../containers/Projects';
import About from '../about/About';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={AllProjects} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
