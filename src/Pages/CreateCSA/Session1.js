import React from 'react'

import RadioButton from '../../components/RadioButton'
import Checkbox from '../../components/Checkbox'
import InputTextList from '../../components/InputTextList'
import AddableItem from '../../components/AddableItem'
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

      <div>
        Agricultor
      </div>
      {/*---Should be component---*/}
      {newCSA.agricultores.map((item, index) =>
        <div key={index}>
          <input type='text'
            placeholder='Digite o nome do(a) agricultor(a)'
            onChange={(e) => {
              let ag = newCSA.agricultores.slice(0)
              ag[index] = {name: e.target.value}
              setNewCSA({...newCSA, agricultores: ag})
            }}
          />
          {index !== 0 ?
            <button onClick={() => setNewCSA(
                {...newCSA,
                  agricultores: [...newCSA.agricultores.slice(0, index),
                                 ...newCSA.agricultores.slice(index+1)]
                }
            )}>Remover</button>
            :null
          }
        </div>
      )}
      <button onClick={() => setNewCSA({...newCSA, agricultores: [...newCSA.agricultores, '']})}>
        Acrescentar outro(a) agricultor(a)
      </button>
      {/*---*/}

      <div>
        <div>
          Trabalhadores rurais
        </div>
        {/*---Should be component---*/}
        {newCSA.trabalhadores.map((item, index) =>
          <div key={index}>
            <input type='text'
              placeholder='Digite o nome do(a) trabalhador(a)'
              onChange={(e) => {
                let ag = newCSA.trabalhadores.slice(0)
                ag[index] = {name: e.target.value}
                setNewCSA({...newCSA, trabalhadores: ag})
              }}
            />
            {index !== 0 ?
              <button onClick={() => setNewCSA(
                  {...newCSA,
                    trabalhadores: [...newCSA.trabalhadores.slice(0, index),
                                   ...newCSA.trabalhadores.slice(index+1)]
                  }
              )}>Remover</button>
              :null
            }
          </div>
        )}
        <button onClick={() => setNewCSA({...newCSA, trabalhadores: [...newCSA.trabalhadores, '']})}>
          Acrescentar outro(a) trabalhador(a)
        </button>
        {/*---*/}
      </div>

      <div>
        <div>Local de produção</div>
        <RadioButton label={'No DF'}
          check={newCSA.df} onClick={()=>setNewCSA({...newCSA, df: true})} />
        <RadioButton label={'Fora do DF'}
          check={!newCSA.df} onClick={()=>setNewCSA({...newCSA, df: false})} />

        {newCSA.regions.map((item, index) =>
          <Dropdown key={index}
            placeholder={'Selecione uma região'}
            values={defaultData.regions ? defaultData.regions.map((region) => region.name ) : []}
            onClick={(name) => {
              let reg = newCSA.regions
              reg[index] = defaultData.regions.find((region) => region.name === name).id
              setNewCSA({...newCSA, regions: reg})
            }}/>
        )}
        <button onClick={() => setNewCSA({...newCSA, regions:[...newCSA.regions, '']})}>
          Acrescentar outro local de produção
        </button>
      </div>

      <div>
        <div>Tipos de produção</div>
        {defaultData['production-types'] ?
          defaultData['production-types'].map((item, index) =>
            <Checkbox label={item.name} key={index} onCheck={(check) => {
                if(check) setNewCSA({...newCSA, productionTypes:[...newCSA.productionTypes, item.id] })
                else setNewCSA(
                  {...newCSA,
                  productionTypes:[...newCSA.productionTypes.slice(0, newCSA.productionTypes.indexOf(item.id)),
                                   ...newCSA.productionTypes.slice(newCSA.productionTypes.indexOf(item.id) + 1)]
                  })
            }}/>
        ): null}

        <div>
          Outra:
          <input type='text'
            onChange={(e)=>setNewCSA({...newCSA, newProductionType: e.target.value})}
            value={newCSA.newProductionType}
          />
        </div>
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
