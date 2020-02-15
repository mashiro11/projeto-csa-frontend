import React from 'react'
import { Link } from 'react-router-dom'

import applicationPages from '../../applicationPages'

import noLoginUser from './noLoginUser.svg'
import Logo from './Logo.svg'

import styles from './styles.js'

const Navbar = () => {
  return (
    <div>
      <div style={styles.container}>

        <img src={Logo} style={styles.logo} />

        <div style={styles.linksUser}>

          <div style={styles.linksContainer}>
            {Object.values(applicationPages).map( (item, index) =>
              <Link style={styles.pageLink} to={item.link} key={index} >{item.text}</Link>
             )}
          </div>
          <img src={noLoginUser} style={styles.userIcon} />

        </div>

      </div>

      {/*Prevent divs from positioning under navbar at top*/}
      <div style={styles.spacer}></div>
    </div>
  )
}

export default Navbar
