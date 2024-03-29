import React from 'react'
import { Link } from 'react-router-dom'
import request from '../../request.js'

import LayoutContext from '../../LayoutContext.js'
import UserContext from '../../UserContext.js'

import ErrorHandler from '../../components/ErrorHandler'
import Banner from '../../components/Banner'
import Filters from '../../components/Filters'
import TopicListItem from '../../components/TopicListItem'

import bannerImg from '../../banner.jpg'
import styles from './styles.js'

import { createPopulateStringFromArray } from 'utils.js'


const Topics = () => {
  const layout = React.useContext(LayoutContext)
  const user = React.useContext(UserContext)
  const [topics, setTopics] = React.useState([])
  const [routines, setRoutines] = React.useState([])
  const [filters, setFilters] = React.useState([])
  const [error, setError] = React.useState({})
  const topicsPopulate = ["routines","creator","messages"]
  const routineCategoriesPopulate = ["routines"]

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }
  const retry = () => setError({})

  const getTopics = (data) => {
    setTopics(data.sort((a, b) =>{
      const date1 = new Date(a.messages[a.messages.length - 1].createdAt)
      const date2 = new Date(b.messages[b.messages.length - 1].createdAt)
      return date1.getTime() > date2.getTime() ?
      -1 : 1
    }))
  }

  const loadPage = () => {
    request('get', 'topics', getTopics, handleError, null, false, createPopulateStringFromArray(topicsPopulate))
    request('get', 'routine-categories', setRoutines, handleError, null, false, createPopulateStringFromArray(routineCategoriesPopulate))
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
    sortByLastAnswer(1),
    sortByLastAnswer(0),
    sortByAnswerCount(1),
    sortByAnswerCount(0)
  ]

  React.useEffect( loadPage, [error])
  return (
    <div>
      <Banner title='CONVERSAS' image={bannerImg}/>

      <div style={styles.contentContainer(layout)}>


        {layout === 'MOBILE' ?
          <span>
            <span className='textButton' onClick={ () => console.log('Open drawer')}>Filtros</span>
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

          {error.isAxiosError > 0 ?
            <ErrorHandler tryagainTime={5} onTryAgain={retry} />
            :
            topics.length === 0 ?
              <div>Buscando dados das csas...</div>
              :
              topics
                .filter( topic =>
                  topic.routines?.some( routine => filters.length > 0 ? filters.includes(routine.Name) : true )
                ).map( (item, index) =>
                  <TopicListItem topic={item} key={index}/>
                )
          }


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
