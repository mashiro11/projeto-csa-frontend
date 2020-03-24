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

  const getTopics = (data) => {
    setTopics(data.sort((a, b) =>{
      const date1 = new Date(a.messages[a.messages.length - 1].createdAt)
      const date2 = new Date(b.messages[b.messages.length - 1].createdAt)
      return date1.getTime() > date2.getTime() ?
      -1 : 1
    }))
  }

  const loadPage = () => {
    request('get', 'topics', getTopics, handleError)
    request('get', `routine-categories`, setRoutines, handleError)
  }

  const filterOption = (filter) => (set) => {
    set ? setFilters([...filters, filter]) : setFilters(filters.filter( item => item !== filter))
  }

  const sortByAnswerCount = order => () => {
    let temp = [...topics]
    let first = order === 0 ? -1 : 1
    let second = order === 0 ? 1 : -1
    setTopics(temp.sort((a, b) => a.messages.length < b.messages.length? first : second ))
  }

  const sortByLastAnswer = order => () => {
    let temp = [...topics]
    let first = order === 0 ? -1 : 1
    let second = order === 0 ? 1 : -1
    setTopics(
      temp.sort((a, b) => {
        const date1 = new Date(a.messages[a.messages.length - 1].createdAt)
        const date2 = new Date(b.messages[b.messages.length - 1].createdAt)
        return date1.getTime() < date2.getTime() ?
        first : second
      })
    )
  }

  const sortFunctions = [
    sortByAnswerCount(1),
    sortByAnswerCount(0),
    sortByLastAnswer(1),
    sortByLastAnswer(0)
  ]

  React.useEffect( loadPage, [])

  return (
    <div>
      <div style={styles.bannerContainer}>
        <div style={styles.bannerTitle}>CONVERSAS</div>
      </div>

      <div style={styles.contentContainer(layout)}>
        {layout === 'MOBILE' ?
          <span>
            <span onClick={ () => console.log('Open drawer')}>Filtros</span>
            <span> </span>
            <span style={styles.filterQuant}>5</span>
          </span>
          :
          <Filters filterOptions={routines} onSelect={filterOption} sortFunctions={sortFunctions} />
        }
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
            ).map( (item, index) =>
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
