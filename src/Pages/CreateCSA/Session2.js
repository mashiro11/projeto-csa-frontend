import React from 'react'
import RadioButton from '../../components/RadioButton'

const Session2 = ({newCSA, setNewCSA}) => {
  return(
    <div>
      <div>
        <div>Região</div>
        <div>Selecione uma região</div>
      </div>
      <div>
        <div>Endereço</div>
        <input type='text' placeholder='Digite o endereço'/>
      </div>
      <div>
        <div>Local de referência</div>
        <input type='text' placeholder='Digite o endereço'/>
      </div>
      <div>
        <div>Que dia acontece?</div>
        <div>
          <RadioButton label='Segunda' />
          <RadioButton label='Terça' />
          <RadioButton label='Quarta' />
          <RadioButton label='Quinta' />
          <RadioButton label='Sexta' />
          <RadioButton label='Sábado' />
          <RadioButton label='Domingo' />
        </div>
      </div>
      <div>
        <div>Em qual horário acontece?</div>
        <div>
          de <input type='text' /> às <input type='text' />
        </div>
      </div>
    </div>
  )
}

export default Session2
