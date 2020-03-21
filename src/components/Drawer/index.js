import React from 'react'
import DownArrowIcon from '../../icons/DownArrow'

const styles={
  textLabel:{
    fontSize: 14,
    color: '#009688',
    cursor: 'pointer',
  },
  buttonLabel:{
    backgroundColor: '#E0E0E0',
    cursor: 'pointer',
    marginLeft: -20,
    paddingLeft: 50,
    paddingTop: 10,
    paddingBottom: 10
  }
}
const Drawer = ({labelType, label, children, openLabel, closeLabel, initialState, moveLabelDown}) => {
  const [open, setOpen] = React.useState(initialState === 'open')
  return(
    <div>
      {open ?
        <div>
          {moveLabelDown ?
            <>
              <div>
                {children}
              </div>
              <div style={labelType==='text'? styles.textLabel : styles.buttonLabel}
                onClick={ () => setOpen(!open)}
              >
                {closeLabel? closeLabel : label}
                {labelType === 'text' ? <DownArrowIcon rotate='180'/>:null}
              </div>
            </>
            :
            <>
              <div style={labelType === 'text' ? styles.textLabel : styles.buttonLabel}
                onClick={ () => setOpen(!open)}
              >
                {closeLabel? closeLabel : label}
                {labelType === 'text' ? <DownArrowIcon rotate='180'/>:null}
              </div>
              <div>
                {children}
              </div>
            </>
          }
        </div>
        :
        <div>
          <div style={labelType === 'text' ? styles.textLabel : styles.buttonLabel}
            onClick={ () => setOpen(!open)}
          >
            {openLabel? openLabel : label}
            {labelType === 'text' ? <DownArrowIcon rotate='0'/>:null}
          </div>
        </div>
      }
    </div>
  )
}

export default Drawer
