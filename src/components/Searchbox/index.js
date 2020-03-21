import React from 'react'
import SearchIcon from '../../icons/Search'

const styles={
  container:{
    border: 'gray solid 1px',
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: -10,
    marginRight: 10,
  },
  input:{
    border: 'none',
    ':focus':{
      outline: 'none'
    },
    outline: 'none',
    paddingBottom: 5
  },
  icon:{
    margin: 5,
    marginBottom: 0
  }
}

const Searchbox = ({value, setValue}) => {
  return(
    <div style={styles.container}>
      <SearchIcon style={styles.icon}/>
      <input style={styles.input} type='text' value={value} onChange={ e => setValue(e.target.value)}/>
    </div>
  )
}

export default Searchbox
