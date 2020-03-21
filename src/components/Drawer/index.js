import React from 'react'
import DownArrowIcon from '../../icons/DownArrow'

const styles={
  label:{
    fontSize: 14,
    color: '#009688',
    cursor: 'pointer',
  }
}
const Drawer = ({children, openLabel, closeLabel, initialState}) => {
  const [open, setOpen] = React.useState(initialState === 'open')
  return(
    <div>
      {open ?
        <div>
          <div>
            {children}
          </div>
          <div style={styles.label} onClick={ () => setOpen(!open)}>
            {closeLabel}<DownArrowIcon rotate='180'/>
          </div>
        </div>
        :
        <div>
          <div style={styles.label} onClick={ () => setOpen(!open)}>
            {openLabel}<DownArrowIcon rotate='0'/>
          </div>
        </div>
      }
    </div>
  )
}

export default Drawer
