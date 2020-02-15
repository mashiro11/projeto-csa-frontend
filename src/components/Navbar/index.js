import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import applicationPages from '../../applicationPages'

import noLoginUser from './noLoginUser.svg'
import Logo from './Logo.svg'
import menu from './menu.svg'

import styles from './styles.js'

const Navbar = () => {

  let [layout, setLayout] = useState(window.innerWidth >= 660 ? 'DESKTOP' : 'MOBILE')
  window.addEventListener('resize', e =>{
    if(document.documentElement.clientWidth >= 660 && layout === 'MOBILE')
      setLayout('DESKTOP')
    if(document.documentElement.clientWidth < 660 && layout === 'DESKTOP')
      setLayout('MOBILE')
  })

  return (
    <div>
      <div style={styles.container}>
        {layout === 'MOBILE' ?
          <img src={menu} style={styles.menuIcon} /> : null
        }

          <Link style={layout === 'DESKTOP'? styles.logoD : styles.logoM} to='/'>
            <img src={Logo} style={{textAlign: 'inherit'}}/>
          </Link>

          <div style={styles.linksUser}>

            {layout === 'DESKTOP' ?
              <div style={styles.linksContainer}>
                {Object.values(applicationPages).map( (item, index) =>
                  <Link style={styles.pageLink} to={item.link} key={index} >{item.text}</Link>
                 )}
              </div>
            : null}

            <img src={noLoginUser} style={styles.userIcon} />
          </div>


      </div>

      {/*Prevent divs from positioning under navbar at top*/}
      <div style={styles.spacer}></div>
    </div>
  )
}

export default Navbar
