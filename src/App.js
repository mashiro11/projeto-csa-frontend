import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Global components
import Navbar from './components/Navbar'

//Application main pages
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
