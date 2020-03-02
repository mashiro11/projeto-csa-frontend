import React from 'react'
import { Link } from 'react-router-dom'

import LayoutContext from '../../LayoutContext.js'
import UserContext from '../../UserContext.js'

import applicationPages from '../../applicationPages'

import noLoginUser from './noLoginUser.svg'
import Logo from './Logo.svg'
import menu from './menu.svg'

import styles from './styles.js'

const Navbar = () => {
  const layout = React.useContext(LayoutContext)
  const user = React.useContext(UserContext)
  return (
    <div>
      <div style={styles.container}>
        {layout === 'MOBILE' ?
          <img src={menu} style={styles.menuIcon} alt='menu'/> : null
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
              <img src={user.username ? 'https://i.pravatar.cc/38': noLoginUser} style={styles.userIcon} alt='user' />
            </Link>
          </div>


      </div>

      {/*Prevent divs from positioning under navbar at top*/}
      <div style={styles.spacer}></div>
    </div>
  )
}

export default Navbar
