import React from 'react'
import { Link } from 'react-router-dom'

const styles = {

  hr:{
    backgroundColor: '#EEEEEE',
    color: '#EEEEEE',
    borderColor: '#FFFFFF'
  }
}

const TopicListItem = ({topic}) => {
  return(
    <div>
      <Link to={`conversas/${topic.id}`}>{topic.name}</Link>
      <hr style={styles.hr}/>
    </div>
  )
}

export default TopicListItem
