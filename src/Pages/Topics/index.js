import React from 'react'
import { Link } from 'react-router-dom'
import request from '../../request.js'

import LayoutContext from '../../LayoutContext.js'
import UserContext from '../../UserContext.js'

import Filters from '../../components/Filters'
import TopicListItem from '../../components/TopicListItem'

import styles from './styles.js'


const Topics = () => {
  const layout = React.useContext(LayoutContext)
  const user = React.useContext(UserContext)
  const [topics, setTopics] = React.useState([])
  const [routines, setRoutines] = React.useState([])
  const [filters, setFilters] = React.useState([])

  const handleError = (error) => {
    console.log('error:', error)
  }

  const loadPage = () => {
    request('get', 'topics', setTopics, handleError)
    request('get', `routine-categories`, setRoutines, handleError)
  }

  const filterOption = (filter) => (set) => () => {
    set ? setFilters([...filters, filter]) : setFilters(filters.filter( item => item !== filter))
  }

  React.useEffect( loadPage, [])

  return (
    <div>
      <div style={styles.bannerContainer}>
        <div style={styles.bannerTitle}>CONVERSAS</div>
      </div>

      <div style={styles.contentContainer(layout)}>
        <Filters filterOptions={routines} onSelect={filterOption} />

        <div style={ layout === 'DESKTOP' ? {flexGrow: 2, marginLeft: 30} : null}>
          { layout === 'DESKTOP' ?
            <div>
              <div className='onExtremes'>
                <h3>LISTA DE CONVERSAS</h3>
                {user.username ?
                  <div style={{alignSelf: 'center'}}>
                    <Link className='button small' to='/conversas/nova'>
                      NOVA CONVERSA
                    </Link>
                  </div>
                : null}
              </div>
              <hr style={{marginTop: 0}}/>
            </div>
            :null }

          <div className='onExtremes' style={{paddingLeft: 20, paddingRight: 20}}>
            <div className='orange'>TEMAS</div>
            <div className='orange'>COMENTÁRIOS</div>
          </div>
          <hr/>

          {topics.length === 0 ?
            <div>Fetching data...</div>
          : topics
            .filter( topic =>
              topic.routines?.some( routine => filters.length > 0 ? filters.includes(routine.name) : true )
            ).map((item, index) =>
            <TopicListItem topic={item} key={index}/>
          )}
        </div>

        { user.username && layout === 'MOBILE' ?
          <Link to='/conversas/nova' className='button large centeredH'>
            NOVA CONVERSA
          </Link>
          :null }
      </div>
    </div>
  )
}
export default Topics
