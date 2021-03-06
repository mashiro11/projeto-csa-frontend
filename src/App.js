import React from 'react';
import { Switch, Route } from 'react-router-dom'

import LayoutContext from './LayoutContext.js'
import UserContext from './UserContext.js'

//Global components
import Navbar from './components/Navbar'

//Application main pages
import Home from './Pages/Home'
import About from './Pages/About'
import Csas from './Pages/Csas'
import Csa from './Pages/Csa'
import CreateCSA from './Pages/CreateCSA'
import Routines from './Pages/Routines'
import Routine from './Pages/Routine'
import Topics from './Pages/Topics'
import Topic from './Pages/Topic'
import NewTopic from './Pages/NewTopic'
import WhatIs from './Pages/WhatIs'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'

import PrivateRoute from './components/PrivateRoute'

import request from './request.js'

function App() {
  let [layout, setLayout] = React.useState(window.innerWidth >= 660 ? 'DESKTOP' : 'MOBILE')
  const [user, setUser] = React.useState({})

  window.addEventListener('resize', e =>{
    if(document.documentElement.clientWidth >= 660 && layout === 'MOBILE')
      setLayout('DESKTOP')
    if(document.documentElement.clientWidth < 660 && layout === 'DESKTOP')
      setLayout('MOBILE')
  })

  const handleData = (data) => {
    setUser(data)
  }
  const handleError = (error) => {
    console.log(error)
  }

  //CURRENT: not working
  //Try auto-login
  if(document.cookie.length > 0 && !user.username)
    request('get', 'users/me', handleData, handleError, {}, true)

  return (
    <UserContext.Provider value={user}>
    <LayoutContext.Provider value={layout}>
      <div className="App">
        <Navbar user={user}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={About} />
          <Route exact path="/csas" component={Csas} />
          <Route exact path="/csas/csa/:id" component={Csa} />
          <Route exact path="/csas/nova" component={CreateCSA} />

          <Route exact path="/rotinas" component={Routines} />
          <Route path='/rotinas/rotina/:id' component={Routine} />

          <Route exact path="/conversas" component={Topics} />
          <Route path="/conversas/conversa/:id" component={Topic} />
          <PrivateRoute exact path="/conversas/nova" component={NewTopic} />

          <Route exact path="/o-que-e-csa" component={WhatIs} />

          <Route exact path="/login"
            render={(props) => <Login {...props} setUser={setUser} />}
          />
          <Route exact path="/cadastro"
            render={(props) => <Register {...props} setUser={setUser} />}
          />
          <Route exact path="/meus_dados"
            render={(props) => <Profile {...props} setUser={setUser} />}
          />
        </Switch>
      </div>
    </LayoutContext.Provider>
    </UserContext.Provider>
  )
}

export default App;
