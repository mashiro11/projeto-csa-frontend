import React from 'react'

const Checkbox = ({checked, onCheck}) => {
  const [value, setValue] = React.useState(checked)
  return(
    <span>
      {value?
        <svg onClick={ () => {
            setValue(!value)
            onCheck(!value)
          }} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#009688" d="M20.8 3H6.23997C5.08557 3 4.15997 3.95931 4.15997 5.13181V20.0545C4.15997 21.227 5.08557 22.1863 6.23997 22.1863H20.8C21.9544 22.1863 22.88 21.227 22.88 20.0545V5.13181C22.88 3.95931 21.9544 3 20.8 3ZM11.44 17.9227L6.23997 12.5931L7.70637 11.0902L11.44 14.9062L19.3336 6.81594L20.8 8.32952L11.44 17.9227Z"/>
        </svg>
        :
        <svg onClick={ () =>{
            setValue(!value)
            onCheck(!value)
          }} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="black" fillOpacity="0.38" d="M19.7917 5.20833V19.7917H5.20833V5.20833H19.7917ZM19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125Z"/>
        </svg>
      }
    </span>
  )
}

export default Checkbox
