import React from 'react'

import Dropdown from '../../components/Dropdown'

const Session3 = ({newCSA, setNewCSA}) => {
  return(
    <div>
      <div>Modo de ser</div>

      <div>Data de formação</div>
      <Dropdown placeholder={'Selecione o mês'}
        values={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
        onClick={(name) => setNewCSA({...newCSA, creationMonth: name})}
      />
      de
      <Dropdown placeholder={'Selecione o ano'}
        values={['2020', '2019', '2018']}
        onClick={(name) => setNewCSA({...newCSA, creationYear: name})}
      />
      <div>
        <div>Particularidades da sua CSA</div>
        <input type='textarea' placeholder={'Na nossa CSA prezamos por...'}
          onChange={(e) => setNewCSA({...newCSA, description: e.target.value})} 
          value={newCSA.description}/>
      </div>
    </div>
  )
}

export default Session3
