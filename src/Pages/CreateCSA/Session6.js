import React from 'react'

const Session6 = ({newCSA, setNewCSA}) => {
  return(
    <div>
      <div>Dúvidas frequentes</div>
      {newCSA.faq.map((item, index)=>
        <div key={index}>
          <div>Dúvida frequente</div>
          <input type='text' placeholder='Digite o título de uma dúvida comum sobre sua CSA'
            value={item.question}
            onChange={(e)=>{
              let faq = newCSA.faq.slice(0)
              faq[index].question = e.target.value
              setNewCSA({...newCSA, faq:faq})
            }}/>

          <div>Resposta</div>
          <input type='textarea' placheholder='Digite a resposta da dúvida acima'
            value={item.answer}
            onChange={(e)=>{
              let faq = newCSA.faq.slice(0)
              faq[index].answer = e.target.value
              setNewCSA({...newCSA, faq:faq})
            }}/>

          {index !== 0 ?
            <button onClick={()=>setNewCSA({... newCSA, faq: [...newCSA.faq.slice(0, index), ...newCSA.faq.slice(index+1)]})}>
              Remover
            </button>
          :null}
        </div>
      )}
      <button onClick={()=>setNewCSA({...newCSA, faq:[...newCSA.faq, {question: '', answer:''}]})}>
        Adicionar outra duvida frequente
      </button>
    </div>
  )
}

export default Session6
