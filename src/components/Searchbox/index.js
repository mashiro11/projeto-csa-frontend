import React from 'react'
import SearchIcon from '../../icons/Search'

const styles={
  container:{
    border: 'gray solid 1px',
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: -10,
    marginRight: 10,
    padding: 5
  },
  input:{
    border: 'none',
    height: 20,
    fontSize: 12,
    width: 197,
    ':focus':{
      outline: 'none'
    },
    outline: 'none',
  },
  icon:{
    marginRight: 3
  }
}

const Searchbox = ({value, setValue, placeholder}) => {
  return(
    <div style={styles.container}>
      <SearchIcon style={styles.icon}/>
      <input style={styles.input} type='text' value={value}
        placeholder={placeholder}
        onChange={ e => setValue(e.target.value)}/>
    </div>
  )
}

export default Searchbox
