import React from 'react'

const Dropdown = ({values, currentValue, onClick, placeholder}) => {
  const [state, setState] = React.useState({selected: (currentValue ? values.indexOf(currentValue) : -1), open: false})

  const withResetValues = [placeholder ? placeholder: 'Reset', ...(values ? values : [])]
  return(
    <div>
      <button onClick={() => setState({...state, open: !state.open})}>
        {state.selected === -1 ?
          placeholder :
          values[state.selected]}
      </button>

      {state.open ?
        withResetValues.map((value, index) =>
          <div key={index}>
            <button
              value={value}
              onClick={onClick ? (e) => {
                setState({open: false, selected: index-1})
                onClick(value, index-1)
              }:
              (e) => setState({open: false, selected: index-1})
              }>
              {value}
            </button>
          </div>
        ):null}
    </div>
  )
}

export default Dropdown
