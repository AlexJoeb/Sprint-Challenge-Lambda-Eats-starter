import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Banner from './Components/Banner';
import Pizza from './Components/Pages/Pizza';

const App = () => {
  return (
    <div className='app'>
      <Router>
        {/* Header and Banner */}
          <Header />
          <Banner />
        <Switch>
          <Route exact path='/' render={props => <h1>Home</h1>} />
          <Route path='/pizza' render={props => <Pizza />} />
          <Route path='/help' render={props => <h1>Help</h1>} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
