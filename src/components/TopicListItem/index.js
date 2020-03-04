import React from 'react'
import { Link } from 'react-router-dom'

import { formatDate } from '../../utils.js'

const styles = {
  container:{
    position:'relative',
    flexDirection: 'horizontal',
    paddingLeft: 20,
    paddingRight: 20
  },
  responses:{
    color: '#000000'
  },
  latestUpdate:{
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#979797',
    paddingRight: 15
  }
}

const TopicListItem = ({topic}) => {

  return(
    <div>
      <div className='onExtremes' style={styles.container}>
        <Link to={`conversas/conversa/${topic.id}`}
          style={styles.link}>{topic.name}</Link>
        {topic.messages[0]?
          <div style={styles.latestUpdate}>
            <div style={styles.responses}>{topic.messages.length}</div>
            <div>último em</div>
            <div>{formatDate(topic.messages[topic.messages.length-1].createdAt)}</div>
          </div>
        :null}
      </div>
      <hr/>
    </div>
  )
}

export default TopicListItem
