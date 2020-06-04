import React from 'react'
import { Link } from 'react-router-dom'

import LayoutContext from '../../LayoutContext.js'
import UserContext from '../../UserContext.js'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import applicationPages from '../../applicationPages'

import UserIcon from '../../icons/User'
import Logo from './Logo.svg'
import MenuIcon from '../../icons/Menu'

import styles from './styles.js'

const Navbar = () => {
  const layout = React.useContext(LayoutContext)
  const user = React.useContext(UserContext)
  const [drawerState, setDrawerState] = React.useState(false)

  return (
    <div>
      <div style={styles.container}>
        {layout === 'MOBILE' ?
          <>
            <MenuIcon onClick={() => setDrawerState(true)} style={styles.menuIcon}/>
            <SwipeableDrawer
              anchor={'left'}
              open={drawerState}
              onOpen={() => setDrawerState(true)}
              onClose={() => setDrawerState(false)}
            >
              {Object.values(applicationPages).map( (item, index) =>
                <Link to={item.link} key={index} >{item.text}</Link>
              )}
            </SwipeableDrawer>
          </>
          : null
        }

        <Link style={layout === 'DESKTOP'? styles.logoD : styles.logoM} to='/'>
          <img src={Logo} style={{textAlign: 'inherit'}} alt='CSAs Brasília'/>
        </Link>

        <div style={styles.linksUser}>
          {layout === 'DESKTOP' ?
            <div style={styles.linksContainer}>
              {Object.values(applicationPages).map( (item, index) =>
                <Link style={styles.pageLink} to={item.link} key={index} >{item.text}</Link>
               )}
            </div>
          : null}

          <Link to='/login'>
            {user.username ?
              <img src='https://i.pravatar.cc/38' alt='user' className='avatar' />
              : <UserIcon />}
          </Link>
        </div>
      </div>

      {/*Prevent divs from positioning under navbar at top*/}
      <div style={styles.spacer}></div>
    </div>
  )
}

export default Navbar
