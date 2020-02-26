import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Global components
import Navbar from './components/Navbar'

//Application main pages
import Home from './Pages/Home'
import About from './Pages/About'
import Csas from './Pages/Csas'
import Routines from './Pages/Routines'
import Topics from './Pages/Topics'
import Topic from './Pages/Topic'
import WhatIs from './Pages/WhatIs'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={About} />
        <Route exact path="/csas" component={Csas} />
        <Route exact path="/rotinas" component={Routines} />

        <Route exact path="/conversas" component={Topics} />
        <Route path="/conversas/:id" component={Topic} />

        <Route exact path="/o-que-e-csa" component={WhatIs} />
      </Switch>
    </div>
  );
}

export default App;
