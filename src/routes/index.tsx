import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Repository from '../pages/Repository';

export default function Routes() {
  return (
    <Switch>
      <Route path="/Dashboard" exact component={Dashboard} />
      <Route path="/" exact component={Home} />
      <Route path="/repositories/:repository+" component={Repository} />
    </Switch>
  );
}
