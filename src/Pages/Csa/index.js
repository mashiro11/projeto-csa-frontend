import React from 'react'

//import UserContext from '../../UserContext'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Banner from '../../components/Banner'
import bannerImg from '../../banner.jpg'
import UserContext from '../../UserContext'

import Perfil from './Perfil'
import Gestao from './Gestao'

const Csa = (props) => {
  const user = React.useContext(UserContext)
  const [csa, setCsa] = React.useState({})
  const [error, setError] = React.useState({})
  const [tabValue, setTabValue] = React.useState(0)

  const retry = () => setError({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  const handleChange = (e, value) => setTabValue(value)

  React.useEffect(() => request('get', `csas/${props.match.params.id}`, setCsa, handleError), [error])

  return(
    <div>
      {error.isAxiosError ?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        csa.id ?
          <div>
            <Banner title={`CSA ${csa.name}`} image={bannerImg}/>

            <Tabs value={tabValue} onChange={handleChange}>
              <Tab label='Perfil' />
              <Tab label='Gestão' />
            </Tabs>

            {tabValue === 0 ?
              <Perfil csa={csa} />
            : tabValue === 1 ?
              <Gestao csa={csa} />
            :null}
          </div>
          :
          <div>Buscando informações da CSA...</div>
      }
    </div>
  )
}

export default Csa
