import React from 'react'
import { Link } from 'react-router-dom'

import applicationPages from '../../applicationPages'

const styles = {
  container: {
    display: 'flex',
    height: 100,
    backgroundColor: '#DDDDDD'
  },
  linksContainer:{
  }
}

const Navbar = () => {
  return (
    <div style={styles.container}>
      <div>
        CSA Dev
      </div>
      <div style={styles.linksContainer}>
        {Object.values(applicationPages).map( (item, index) =>
          <Link to={item.link}>{item.text}</Link>
         )}
      </div>
      <div>
        Login / User
      </div>
    </div>
  )
}

export default Navbar
