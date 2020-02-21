import React from 'react'

const TopicListItem = ({topic}) => {
  return(
    <div>
      <div>{topic.name}</div>
      <hr/>
    </div>
  )
}

export default TopicListItem
