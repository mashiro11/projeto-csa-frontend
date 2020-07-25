import React from 'react'

const Dropdown = (values) => {
  return(
    <div>
      {values.map((value, index)=>
        <div key={index}>{value}</div>
      )}
    </div>
  )
}

export default Dropdown
