import React from 'react'
import RadioButton from '../RadioButton'
import styles from './styles.js'

import LayoutContext from '../../LayoutContext.js'
import Drawer from '../Drawer'
import Searchbox from '../Searchbox'
import Checkbox from '../Checkbox'
import Button from '../Button'
const Filters = ({filterOptions, onSelect, sortFunctions}) => {

  const layout = React.useContext(LayoutContext)
  const [searchValue, setSearchValue] = React.useState('')
  const [selectOneState, setSelectOneState] = React.useState([true, false, false, false])
  const selectOneOptions = ["Últimas comentadas", "Primeiras comentadas", "Mais comentadas", "Menos comentadas"]

  return(
    <div style={styles.container(layout)}>
      <h3 style={{paddingLeft: 20}}>FILTROS</h3>
      <hr/>
      <div style={{paddingLeft: 20}}>
        <div>
          <div className='orange'>
            COMENTÁRIOS
          </div>
          <h5>Ordenar por:</h5>
          <div>
            {selectOneOptions.map((option, index) =>
              <RadioButton key={index}
                label={option}
                check={selectOneState[index]}
                onClick={ (value) => {
                  if(value){
                    let forcedState = [false, false, false, false]
                    forcedState[index] = true
                    setSelectOneState(forcedState)
                    sortFunctions[index]()
                  }
                }}
              />
            )}
          </div>
        <div>
          <div className='orange'>TEMA DA CONVERSA</div>
          <h5>Praticas relacionadas ao tema</h5>
          <Drawer initialState='closed' moveLabelDown
            labelType='text'
            openLabel='Selecione uma ou mais práticas'
            closeLabel='Fechar lista de práticas'>
            <Searchbox value={searchValue} setValue={setSearchValue} placeholder='Busque práticas ou selecione abaixo'/>
            {filterOptions?.map( (routineCategory, index) =>
              <Drawer key={index} labelType='button' label={routineCategory.name} initialState='open'>
              {routineCategory.routines
                ?.filter( routine => routine.Name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((routine, index)=>
                <div key={index}>
                  <Checkbox label={routine.name} onCheck={onSelect(routine.name)}/>
                </div>
              )}
              </Drawer>
            )}
            <Drawer labelType='button' label='Outros' initialState='close'>
              <div><Checkbox/>Outras práticas</div>
            </Drawer>
          </Drawer>
          <Button>LIMPAR FILTROS</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Filters
