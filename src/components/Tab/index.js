import React from 'react'

const Tab = ({selected, onSelected, labels, children}) => {
  return(
    <div>
    {/*Tab buttons*/}
      <div style={{display: 'flex', displayOrientation: 'horizontal'}}>
        {labels.map( (label, index) =>
          <div onClick={onSelected}>{label}</div>
        )}
      </div>
    </div>
  )
}

export default Tab
