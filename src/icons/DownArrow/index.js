import React from 'react'

const DownArrow = ({rotate}) => {
  return(
    <svg width="24" height="24" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path transform={`rotate(${rotate}, 12, 12)`} fill="#009688" d="M7 10L12 15L17 10H7Z"/>
    </svg>
  )
}

export default DownArrow
