import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../UserContext'

const PrivateRoute = ({component: Component, ...upperProps}) => {
  const user = React.useContext(UserContext)

  return(
    <Route {...upperProps}
      render={ props => user.username ?
        <Component {...props}/>
        : <Redirect to='/login' />
      }
    />
  )
}

export default PrivateRoute
