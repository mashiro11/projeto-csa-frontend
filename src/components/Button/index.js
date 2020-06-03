import React from 'react'
import './index.css'

const Button = ({children, classNames, style, onClick}) => {
  return(
    <button
      className={classNames? classNames : '.small'}
      style={style? style: {}}
      onClick={onClick? onClick : null}
    >
    {children}
  </button>
  )
}

export default Button
