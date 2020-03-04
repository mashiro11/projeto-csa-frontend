import React from 'react'
import { Link } from 'react-router-dom'

const styles={
  container:{
    display: 'flex',
    paddingRight: 20
  },
  avatar:{
    marginTop: 5,
    marginRight: 10
  }

}

const MessageOwner = ({messageOwner}) => {
  return(
    <div style={styles.container}>
      <div style={styles.avatar}>
        <img className='avatar' src={'https://i.pravatar.cc/38'} alt={'avatar'}/>
      </div>

      <div>
        <h5 style={{marginBottom: 0}}><span>{messageOwner.username}</span>
          <span>|icon|</span>
        </h5>
        <div><Link to=''>CSA do usuário</Link></div>
      </div>
    </div>
  )
}

export default MessageOwner
