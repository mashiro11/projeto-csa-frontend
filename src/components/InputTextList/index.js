import React from 'react'

const InputTextList = ({listValues, onChange, addButton, onAdd, removeButton, onRemove}) => {
  return(
    <div>
      { listValues && listValues.map( (item, index) =>
        <div key={index}>
          <input type='text'
            placeholder='Digite o nome do(a) agricultor(a)'
            onChange={(e) => onChange(e, index)}
            value={item}
          />
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

export default InputTextList
