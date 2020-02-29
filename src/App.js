import React from 'react';
import { Switch, Route } from 'react-router-dom'

import LayoutContext from './LayoutContext.js'

//Global components
import Navbar from './components/Navbar'

//Application main pages
import Home from './Pages/Home'
import About from './Pages/About'
import Csas from './Pages/Csas'
import Routines from './Pages/Routines'
import Topics from './Pages/Topics'
import Topic from './Pages/Topic'
import NewTopic from './Pages/NewTopic'
import WhatIs from './Pages/WhatIs'
import Login from './Pages/Login'

function App() {
  let [layout, setLayout] = React.useState(window.innerWidth >= 660 ? 'DESKTOP' : 'MOBILE')

  window.addEventListener('resize', e =>{
    if(document.documentElement.clientWidth >= 660 && layout === 'MOBILE')
      setLayout('DESKTOP')
    if(document.documentElement.clientWidth < 660 && layout === 'DESKTOP')
      setLayout('MOBILE')
  })

  return (
    <LayoutContext.Provider value={layout}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={About} />
          <Route exact path="/csas" component={Csas} />
          <Route exact path="/rotinas" component={Routines} />

          <Route exact path="/conversas" component={Topics} />
          <Route path="/conversas/conversa/:id" component={Topic} />
          <Route exact path="/conversas/nova" component={NewTopic} />

          <Route exact path="/o-que-e-csa" component={WhatIs} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </LayoutContext.Provider>
  )
}

export default App;
