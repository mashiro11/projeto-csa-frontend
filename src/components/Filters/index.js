import React from 'react'
import RadioButton from '../RadioButton'
import styles from './styles.js'

import LayoutContext from '../../LayoutContext.js'
import Drawer from '../Drawer'
import Searchbox from '../Searchbox'
import Checkbox from '../Checkbox'

const Filters = ({filterOptions, onSelect}) => {
  const layout = React.useContext(LayoutContext)
  const [searchValue, setSearchValue] = React.useState('')

  return(
    <div style={styles.container(layout)}>
      {layout === 'MOBILE' ?
        <span>
          <span>Filtros</span>
          <span> </span>
          <span style={styles.filterQuant}>5</span>
        </span>
        :
        <div>
          <h3 style={{paddingLeft: 20}}>FILTROS</h3>
          <hr/>
          <div style={{paddingLeft: 20}}>
            <div>
              <div className='orange'>
                COMENTÁRIOS
              </div>
              <h5>Ordenar por:</h5>
                <div>
                  <RadioButton checked={false} onClick={ state => console.log('willSet:', state)}>
                    Últimas comentadas
                  </RadioButton>
                  <RadioButton checked={false}>
                    Primeiras comentadas
                  </RadioButton>
                  <RadioButton checked={false}>
                    Mais comentadas
                  </RadioButton>
                  <RadioButton checked={false}>
                    Menos comentadas
                  </RadioButton>
                </div>
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
                    ?.filter( routine => routine.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((routine, index)=>
                    <div key={index}>
                      <Checkbox onCheck={onSelect(routine.name)}/>
                      {routine.name}
                    </div>
                  )}
                  </Drawer>
                )}
                <Drawer labelType='button' label='Outros' initialState='close'>
                  <div><Checkbox/>Outras práticas</div>
                </Drawer>
              </Drawer>
              <div>LIMPAR FILTROS</div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Filters
