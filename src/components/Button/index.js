import React from 'react'
import './index.css'

const Button = ({classNames, style, onClick}) => {
  return(
    <button
      className={classNames? classNames : ''}
      style={style? style: {}}
      onClick={onClick? onClick : null}
    />
  )
}

export default Button
