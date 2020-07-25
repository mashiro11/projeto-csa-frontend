import React from 'react'
import { Redirect } from 'react-router-dom'

import request from '../../request.js'
import UserContext from '../../UserContext'

import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'
import InputTextList from '../../components/InputTextList'
import Dropdown from '../../components/Dropdown'

const CreateCSA = () => {
  const [defaultData, setDefaultData] = React.useState([])
  const [newCSA, setNewCSA] = React.useState({
    name: '',
    description: '',
    agricultores: [''],
    trabalhadores: [''],
    df: true,
    cotas: true
  })

  const user = React.useContext(UserContext)

  const handleData = (csa) =>  setNewCSA(csa)
  const handleError = (error) => console.log('error:', error)

  const payload = {
    nome: newCSA.name,
    descricao: newCSA.description,
    users: [user.id]
  }

  const createCSA = () => {
    request('post', 'csas', handleData, handleError, payload, true)
  }

  React.useEffect(()=>request('get', 'production-types', setDefaultData, handleError), [])

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
          )
        }
        <Checkbox label='Outra'/>
        <input type='text' />
      </div>

      <div>
        <div>Há cotas disponíveis?</div>
        <RadioButton label='Sim' check={newCSA.cotas} onClick={()=>setNewCSA({...newCSA, cotas: true})}/>
        <RadioButton label='Não' check={!newCSA.cotas} onClick={()=>setNewCSA({...newCSA, cotas: false})}/>
      </div>
      <button>Cancelar</button>
      <button>Avançar</button>
      <br/>

      <div style={{background: '#DDDDDD'}}>Fim da parte 1</div>

      <div>Ponto de convivência</div>
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
      <button>Cancelar</button>
      <button>Avançar</button>
      <br />
      <div style={{background: '#DDDDDD'}}>Fim da parte 2</div>

      <div>Modo de ser</div>

      <div>Data de formação</div>
      <span>Selecione o mês </span>
      de
      <span> Selecione o ano</span>
      <div>
        <div>Particularidades da sua CSA</div>
        <input type='textarea' />
      </div>

      <button>Cancelar</button>
      <button>Avançar</button>
      <br />
      <div style={{background: '#DDDDDD'}}>Fim da parte 3</div>

      <div>Nossas fotos</div>
      <div>IMAGEM</div>
      <input type='text' placeholder='Digite uma legenda'/>
      <div>Nossos vídeos</div>
      <input type='text' placeholder='Insira o link do vídeo' />

      <button>Cancelar</button>
      <button>Avançar</button>
      <br />
      <div style={{background: '#DDDDDD'}}>Fim da parte 4</div>

      <div>Contato</div>
      <div>
        <div>Email</div>
        <input type='text' placeholder='Digite o email' />
      </div>

      <div>
        <div>Telefone</div>
        <input type='text' placeholder='DDD' />
        <input type='text' placeholder='xxxx-xxx' />
        <div>Falar com</div>
        <input type='text' placeholder='Digite o nome' />
      </div>

      <div>
        <div>Site</div>
        <input type='text' placeholder='insira o link do site' />
        <button>acrescentar outro site</button>
      </div>

      <div>
        <div>Facebook</div>
        <input type='text' placeholder='Insira o link do Facebook' />
      </div>

      <div>
        <div>Instagram</div>
        <input type='text' placeholder='Insira o link do Instagram' />
      </div>

      <button>Cancelar</button>
      <button>Avançar</button>
      <br />
      <div style={{background: '#DDDDDD'}}>Fim da parte 5</div>

      <div>Dúvidas frequentes</div>
      <div>
        <div>Dúvida frequente</div>
        <input type='text' placeholder='Digite o título de uma dúvida comum sobre sua CSA'/>
        <div>Resposta</div>
        <input type='textarea' placheholder='Digite a resposta da dúvida acima'/>
      </div>

      <button>Cancelar</button>
      <button>Publicar perfil</button>
      <br />
      <div style={{background: '#DDDDDD'}}>Fim da parte 6</div>

      <br />
      <button onClick={createCSA}>Criar</button>
      { newCSA.id ?
        <Redirect to={`/csas/csa/${newCSA.id}`} />
        :null
      }
    </div>
  )
}

export default CreateCSA
