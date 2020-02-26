import React from 'react'
import styles from './styles.js'

import LayoutContext from '../../LayoutContext.js'

const Filters = () => {
  const layout = React.useContext(LayoutContext)
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
                  <input type='radio' /><label>Últimas comentadas</label><br/>
                  <input type='radio' /><label>Primeiras comentadas</label><br/>
                  <input type='radio' /><label>Mais comentadas</label><br/>
                  <input type='radio' /><label>Menos comentadas</label>
                </div>
            </div>

            <div>
              <div className='orange'>TEMA DA CONVERSA</div>
              <h5>Praticas relacionadas ao tema</h5>
              <div>Selecione uma ou mais práticas</div>
              <div>LIMPAR FILTROS</div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Filters
