import React from 'react'

const Session5 = ({newCSA, setNewCSA}) => {
  return(
    <div>
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
    </div>
  )
}

export default Session5
