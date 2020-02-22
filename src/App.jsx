import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:id" component={Info} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
