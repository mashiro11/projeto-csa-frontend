import React from 'react'

const Session0 = ({newCSA, setNewCSA, defaultData}) => {
  return(
    <div>
      <div>Imagem aqui</div>
      <div>Sobre a CSA</div>
      <div>
        <div>Nome:</div>
        <div>
          CSA
          <input type='text' placeholder='Nome da CSA'
          onChange={(e) => setNewCSA({...newCSA, Name: e.target.value}) }
          value={newCSA.Name}/>
        </div>
      </div>
    </div>
  )
}

export default Session0
