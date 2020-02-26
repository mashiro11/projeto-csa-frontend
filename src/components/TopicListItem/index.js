import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  container:{
    position:'relative',
    display:'flex',
    flexDirection: 'horizontal',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  responses:{
    color: '#000000'
  },
  latestUpdate:{
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#979797',
    paddingRight: 15
  },
  hr:{
    backgroundColor: '#EEEEEE',
    color: '#EEEEEE',
    borderColor: '#FFFFFF'
  },
}

const TopicListItem = ({topic}) => {
  const formatDate = (dateStringFormat) => dateStringFormat.substring(0, dateStringFormat.indexOf('T'))
                                                           .replace(/-/g,'/')
  return(
    <div>
      <div style={styles.container}>
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
      <hr style={styles.hr}/>
    </div>
  )
}

export default TopicListItem
