import React from 'react'

import UserContext from '../../UserContext'
import request from '../../request.js'

import ErrorHandler from '../../components/ErrorHandler'
import Tab from '../../components/Tab'

const Csa = (props) => {
  const user = React.useContext(UserContext)
  const [csa, setCsa] = React.useState({})
  const [error, setError] = React.useState({})

  const [tabValue, setTabValue] = React.useState(0)

  const retry = () => setError({})

  const handleError = (err) => {
    if(!error.isAxiosError) setError(err)
  }

  React.useEffect(() => request('get', `csas/${props.match.params.id}`, setCsa, handleError), [error])

  return(
    <div>
      {error.isAxiosError ?
        <ErrorHandler tryagainTime={5} onTryAgain={retry} />
        :
        csa.id ?
          <div>
            <div className='bannerContainer'>
              <div className='bannerTitle'>{csa.nome}</div>
            </div>

            <Tab selected={tabValue} labels={['Perfil', 'Gestão']}>
              {}
            </Tab>
            {tabValue === 0 ?
              <div>
                <div>
                  <div>
                    Agricultores:
                  </div>
                  <div>
                    {csa.agricultores?.map((agricultor, index) =>
                      <div key={index}>{agricultor.name}</div>
                    )}
                  </div>

                  <div>
                    Trabalhadores rurais:
                  </div>
                  <div>
                    {csa.workers?.map((worker, index) =>
                      <div key={index}>{worker.name}</div>
                    )}
                  </div>

                  <div>
                    Local de produção:
                  </div>
                  <div>
                    {csa.workers?.map((worker, index) =>
                      <div key={index}>{worker.name}</div>
                    )}
                  </div>

                  <div>
                    Tipo de produção:
                  </div>
                  <div>
                    {csa.productionTypes?.map((productionType, index) =>
                      <div key={index}>{productionType.name}</div>
                    )}
                  </div>

                  <div>
                    Cotas disponíveis:
                  </div>
                  {csa.vacancy?
                    <div>Sim</div>
                    :
                    <div>Não</div>
                  }
                </div>

                <div>
                  <div className='orange'>PONTO DE CONVIVÊNCIA</div>
                  <div>
                    {csa.meetingPoints?.map( (meetingPoint, index) =>
                      <div key={index}>{meetingPoint.location}</div>
                    )}
                  </div>
                </div>

                <div>
                  <div className='orange'>NOSSO MODO DE SER</div>
                  <div>
                    <div>Comunidade formada dia PPPPPPPPP</div>
                    <div>{csa.description}</div>
                  </div>
                </div>

                <div>
                  <div className='orange'>NOSSAS FOTOS</div>
                  <div>{csa.pictures}</div>
                  <div>Ver mais fotos</div>
                </div>

                <div>
                  <div className='orange'>NOSSOS VÍDEOS</div>
                  <div>{csa.videos}</div>
                  <div>Ver mais vídeos</div>
                </div>

                <div>
                  <div className='orange'>CONTATO</div>
                  <div>
                    Contatos
                  </div>
                </div>

                <div>
                  <div className='orange'>DÚVIDAS FREQUÊNTES</div>
                  <div>
                    Dúidas
                  </div>
                </div>


              </div>
            : null
            }
          </div>
          :
          <div>Buscando informações da CSA...</div>
        }

      }
    </div>
  )
}

export default Csa
