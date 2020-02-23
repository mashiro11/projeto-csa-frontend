import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  latestUpdate:{
    display: 'flex',
    flexDirection: 'column'
  },
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
      {topic.messages[0]?
        <div>
          <div>{topic.messages.length}</div>
          <div>Último em</div>
          <div>{topic.messages[topic.messages.length-1].createdAt}</div>
        </div>
      :null}
      <hr style={styles.hr}/>
    </div>
  )
}

export default TopicListItem
