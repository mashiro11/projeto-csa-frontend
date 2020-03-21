import React from 'react'
import RadioButton from '../RadioButton'
import styles from './styles.js'

import LayoutContext from '../../LayoutContext.js'
import Drawer from '../Drawer'
import Searchbox from '../Searchbox'
import Checkbox from '../Checkbox'

const Filters = () => {
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
                <Drawer labelType='button' label='Produção' initialState='open'>
                  <div>
                    <div><Checkbox />Definição do que será plantado</div>
                    <div><Checkbox />Manejo da produção</div>
                    <div><Checkbox />Planejamento do plantio</div>
                    <div><Checkbox />Definição do método do plantio</div>
                    <div><Checkbox />Aquisição de insumos</div>
                    <div><Checkbox />Colheita</div>
                    <div><Checkbox />Troca de excedentes de produtos e insumos</div>
                  </div>
                </Drawer>
                <Drawer labelType='button' label='Distribuição' initialState='close'>
                  <div>
                    <div><Checkbox />Montagem das cestas</div>
                    <div><Checkbox />Listagem dos itens que compõem a cesta</div>
                    <div><Checkbox />Vendas espontâneas de produtos</div>
                    <div><Checkbox />Retirada dos produtos complementares</div>
                    <div><Checkbox />Partilha a doação de excedentes</div>
                  </div>
                </Drawer>
                <Drawer labelType='button' label='Convivência' initialState='close'>
                  <div>
                    <div><Checkbox />Divulgação externa</div>
                    <div><Checkbox />Divulgação interna</div>
                    <div><Checkbox />Acolhimento de novos coagricultores</div>
                    <div><Checkbox />Atividades de convivência</div>
                    <div><Checkbox />Avaliações da CSA</div>
                    <div><Checkbox />Reuniões de gestão</div>
                    <div><Checkbox />Definição de funções e responsabilidades</div>
                    <div><Checkbox />Troca de informações sobre saúde e alimentação</div>
                    <div><Checkbox />Comunicação com a Rede CSA Brasília</div>
                    <div><Checkbox />Inclusão de produtos complementares</div>
                  </div>
                </Drawer>
                <Drawer labelType='button' label='Financeiro' initialState='close'>
                  <div>
                    <div><Checkbox />Pagamento de comentas</div>
                    <div><Checkbox />Repasse para terceiros</div>
                    <div><Checkbox />Pagamento de produtos complementares</div>
                    <div><Checkbox />Gestão do fundo de reserva</div>
                    <div><Checkbox />Levantamento dos custos de produção e distribuição</div>
                    <div><Checkbox />Definição do fundo de reserva e repasses para terceiros</div>
                    <div><Checkbox />Definição de quantidade, tipos e valores de cotas</div>
                    <div><Checkbox />Controle de entradas e saídas de coagricultores</div>
                    <div><Checkbox />Adesão de coagricultores/ formalização do compromisso</div>
                    <div><Checkbox />Pagamento de funcionários</div>
                  </div>
                </Drawer>
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
