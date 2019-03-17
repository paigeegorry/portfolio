import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AllProjects from '../../containers/Projects';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={AllProjects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
