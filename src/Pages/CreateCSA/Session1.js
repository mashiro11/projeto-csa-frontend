import React from 'react'

import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'
import InputTextList from '../../components/InputTextList'
import Dropdown from '../../components/Dropdown'

const Session1 = ({newCSA, setNewCSA, defaultData}) => {
  return(
    <div>
      <div>Imagem aqui</div>
      <div>Sobre a CSA</div>
      <div>
        <div>Nome:</div>
        <div>
          CSA
          <input type='text' placeholder='Nome da CSA'
          onChange={(e) => setNewCSA({...newCSA, name: e.target.value}) }
          value={newCSA.name}/>
        </div>
      </div>
      <input type='textarea' placeholder='Descrição' onChange={(e) => setNewCSA({...newCSA, description: e.target.value})} value={newCSA.description}/><br/>

      <div>
        Agricultor
      </div>
      <InputTextList
        listValues={newCSA.agricultores}
        addButton={'Acrescentar outro(a) agricultor(a)'}
        removeButton={'Remover'}
        onChange={(e, index) => {
          let ag = newCSA.agricultores.slice(0)
          ag[index] = e.target.value
          setNewCSA({...newCSA, agricultores: ag})
        }}
        onAdd={ () => setNewCSA({...newCSA, agricultores: [...newCSA.agricultores, '']})}
        onRemove={(index) => setNewCSA({...newCSA, agricultores: [...newCSA.agricultores.slice(0, index), ...newCSA.agricultores.slice(index+1)]})}
      />

      <div>
        Trabalhadores rurais
      </div>
      <InputTextList
        listValues={newCSA.trabalhadores}
        addButton={'Acrescentar outro(a) trabalhador(a)'}
        removeButton={'Remover'}
        onChange={(e, index) => {
          let tr = newCSA.trabalhadores.slice(0)
          tr[index] = e.target.value
          setNewCSA({...newCSA, trabalhadores: tr})
        }}
        onAdd={ () => setNewCSA({...newCSA, trabalhadores: [...newCSA.trabalhadores, '']})}
        onRemove={(index) => setNewCSA({...newCSA, agricultores: [...newCSA.trabalhadores.slice(0, index), ...newCSA.trabalhadores.slice(index+1)]})}
      />
      <br/>

      <div>Local de produção</div>
      <RadioButton label={'No DF'}
        check={newCSA.df} onClick={()=>setNewCSA({...newCSA, df: true})} />
      <RadioButton label={'Fora do DF'}
        check={!newCSA.df} onClick={()=>setNewCSA({...newCSA, df: false})} />

      <Dropdown placeholder={'Selecione uma região'} values={['Oi', 'batata', 'bola']}/>
      <button>Acrescentar outro local de produção</button>
      <br/>
      <br/>

      <div>
        <div>Tipos de produção</div>
        {defaultData.map((item, index) =>
            <Checkbox label={item.name} key={index}/>
        )}
        <Checkbox label='Outra'/>
        <input type='text' />
      </div>

      <div>
        <div>Há cotas disponíveis?</div>
        <RadioButton label='Sim' check={newCSA.cotas} onClick={()=>setNewCSA({...newCSA, cotas: true})}/>
        <RadioButton label='Não' check={!newCSA.cotas} onClick={()=>setNewCSA({...newCSA, cotas: false})}/>
      </div>
    </div>
  )
}

export default Session1
