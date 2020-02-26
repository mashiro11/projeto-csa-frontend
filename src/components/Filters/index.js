import React from 'react'
import styles from './styles.js'

const Filters = ({layout}) => {
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
          <h3>FILTROS</h3>
          <div>
            <div className='orange'>COMENTÁRIOS</div>
            <div>Ordenar por:</div>
              <div>
                <div>Últimas comentadas</div>
                <div>Primeiras comentadas</div>
                <div>Mais comentadas</div>
                <div>Menos comentadas</div>
              </div>
          </div>

          <div>
            <div className='orange'>TEMA DA CONVERSA</div>
            <div>Praticas relacionadas ao tema</div>
            <div>Selecione uma ou mais práticas</div>
            <div>LIMPAR FILTROS</div>
          </div>
        </div>}
    </div>
  )
}

export default Filters
