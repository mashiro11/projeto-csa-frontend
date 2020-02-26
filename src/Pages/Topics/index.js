import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import request from '../../request.js'

import Filters from '../../components/Filters'
import TopicListItem from '../../components/TopicListItem'

import styles from './styles.js'


const Topics = () => {
  const layout = 'DESKTOP'
  const [topics, setTopics] = useState([])
  const handleError = (error) => {
    console.log('error:', error)
  }

  useEffect( () => request('topics', setTopics, handleError), [])

  return (
    <div>
      <div style={styles.bannerContainer}>
        <div style={styles.bannerTitle}>CONVERSAS</div>
      </div>

      <div style={styles.contentContainer(layout)}>
        <Filters layout={layout}/>

        <div style={{flexGrow: 2, marginLeft: 30}}>
          { layout === 'DESKTOP' ?
            <div>
              <div style={styles.header}>
                <h3>LISTA DE CONVERSAS</h3>
                <div style={{alignSelf: 'center'}}><Link className='button small' to=''>NOVA CONVERSA</Link></div>
              </div>
              <hr/>
            </div>
            :null }

          <div style={styles.header}>
            <div className='orange'>TEMAS</div>
            <div className='orange'>COMENTÁRIOS</div>
          </div>

          {topics.length === 0 ?
            <div>Fetching data...</div>
          : topics.map((item, index) =>
            <TopicListItem topic={item} key={index}/>
          )}
        </div>

        { layout === 'MOBILE' ?
          <Link to='/conversas/nova' className='button.large'>
            NOVA CONVERSA
          </Link>
          :null }
      </div>
    </div>
  )
}
export default Topics
