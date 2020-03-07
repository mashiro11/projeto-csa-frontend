import React from 'react'

const Menu = ({style, onClick}) => {
  return(
    <svg style={style} onClick={onClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="black" opacity="0.54" fillRule="evenodd" clipRule="evenodd" d="M3 18H21V16H3V18V18ZM3 13H21V11H3V13V13ZM3 6V8H21V6H3Z"/>
    </svg>
  )
}

export default Menu
