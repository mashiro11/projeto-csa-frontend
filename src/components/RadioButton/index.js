import React from 'react'

const RadioButton = ({children, initialState, onClick}) => {
  const [checked, setChecked] = React.useState(initialState)

  return(
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setChecked(!checked)
            if(onClick)onClick(!checked)
          }}
        >
        <circle cx="12" cy="12" r="10" stroke-width="2"
        stroke={checked ? "#009688":'rgba(0,0,0,0.38)'} />
        {checked ?
          <circle fill="#009688" cx="12" cy="12" r="6" />
          :null}
      </svg>
      {children}
    </div>
  )
}

export default RadioButton
