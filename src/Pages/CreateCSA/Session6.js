import React from 'react'

const Session6 = ({newCSA, setNewCSA}) => {
  return(
    <div>
      <div>Dúvidas frequentes</div>
      <div>
        <div>Dúvida frequente</div>
        <input type='text' placeholder='Digite o título de uma dúvida comum sobre sua CSA'/>
        <div>Resposta</div>
        <input type='textarea' placheholder='Digite a resposta da dúvida acima'/>
      </div>
    </div>
  )
}

export default Session6
