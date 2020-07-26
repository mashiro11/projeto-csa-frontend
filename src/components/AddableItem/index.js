import React from 'react'

const AddableItem = ({children, listValues, addButton, onAdd, removeButton, onRemove}) => {
  
  return(
    <div>
    { listValues && listValues.map( (item, index) =>
      <div key={index}>
        {children}
        {onRemove && index !== 0 ?
          <button onClick={() => onRemove(index)}>{removeButton}</button>
          :null
        }
      </div>
    )}
    <button onClick={onAdd}>
      {addButton}
    </button>
    </div>
  )
}

export default AddableItem
