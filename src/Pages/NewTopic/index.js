import React from 'react'

const NewTopic = () => {
  return(
    <div>
      <div>
        <div>Conversas</div>
        <div>Publicar nova</div>
      </div>
      <div>
        <form>
          <div>Tema</div>
          <input type='text' />
          <div>Comentário sobre o tema</div>
          <input type='text' />
          <div>Anexos</div>
          <div className='link'>Insira uma imagem ou um documento</div>

          <div>Práticas relacionadas ao tema</div>
          <div className='link'>Selecione  uma ou mais práticas</div>
          <input type='submit' className='button' value='PUBLICAR'/>
        </form>
      </div>

    </div>
  )
}

export default NewTopic
