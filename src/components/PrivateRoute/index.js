import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../UserContext'

const PrivateRoute = ({component, ...upperProps}) => {
  const user = React.useContext(UserContext)

  return(
    <Route {...upperProps} render={ props => user.username ?
      <component {...props}/> :
      <Redirect to='/login' />}
    />
  )
}

export default PrivateRoute
