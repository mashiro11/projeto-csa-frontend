import React from 'react'

const RadioButton = ({label, check, children, initialState, onClick}) => {
  const [checked, setChecked] = React.useState(initialState)
  return(
    <div style={{position: 'relative', display: 'flex', flexOrientation: 'horizontal'}}>
      <div style={{position: 'relative', top: 0}}>
        <svg width="24" height="24"
          viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            console.log('checked')
            setChecked(!checked)
            if(onClick) onClick(!checked)
          }}
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2"
            stroke={checked ? "#009688":'rgba(0,0,0,0.38)'}
          />
          {checked ?
            <circle fill="#009688" cx="12" cy="12" r="6" />
            :null
          }
        </svg>
      </div>
      <div>{label}</div>
    </div>
  )
}

export default RadioButton
