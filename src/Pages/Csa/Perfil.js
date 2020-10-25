import React from 'react'

const Perfil = ({csa}) => {
  console.log('csa:', csa)
  return(
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
        {csa.trabalhadores?.map((worker, index) =>
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
      {csa.vacancy? <div>Sim</div> : <div>Não</div> }
    </div>

    <div>
      <div className='orange'>PONTO DE CONVIVÊNCIA</div>
      <div>
        {csa.meetingPoints?.map( (meetingPoint, index) =>
          <div key={index}>{meetingPoint.region.name}</div>
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
  )
}

export default Perfil
