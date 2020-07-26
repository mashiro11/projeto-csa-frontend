import React from 'react'

const Session5 = ({newCSA, setNewCSA}) => {
  return(
    <div>
      <div>Contato</div>
      <div>
        <div>Email</div>
        <input type='text' placeholder='Digite o email'
          value={newCSA.email}
          onChange={(e)=>setNewCSA({...newCSA, email: e.target.value})}
        />
      </div>

      <div>
        <div>Telefone</div>
        <input type='text' placeholder='DDD'/>
        <input type='text' placeholder='xxxx-xxx' />
        <div>Falar com</div>
        <input type='text' placeholder='Digite o nome'
          value={newCSA.talkTo}
          onChange={(e) => setNewCSA({...newCSA, talkTo: e.target.value})}/>
      </div>

      <div>
        <div>Sites</div>

        {newCSA.websites.map((item, index) =>
          <div key={index}>
            <input type='text' placeholder='insira o link do site'
              value={item}
              onChange={(e)=>{
                let websites = newCSA.websites.slice(0)
                websites[index] = e.target.value
                setNewCSA({...newCSA, websites: websites})
              }}
            />
            {index !== 0 ?
              <button onClick={(e)=> setNewCSA(
                  {...newCSA,
                    websites: [...newCSA.websites.slice(0, index),
                               ...newCSA.websites.slice(index+1)]
                  }
              )}>
                Remover
              </button>
            :null}

          </div>
        )}
        <button onClick={()=>setNewCSA({...newCSA, websites:[...newCSA.websites, '']})}>Acrescentar outro site</button>
      </div>

      <div>
        <div>Facebook</div>
        <input type='text' placeholder='Insira o link do Facebook'
          value={newCSA.facebook}
          onChange={(e) => setNewCSA({...newCSA, facebook: e.target.value})}
        />
      </div>

      <div>
        <div>Instagram</div>
        <input type='text' placeholder='Insira o link do Instagram'
          value={newCSA.instagram}
          onChange={(e) => setNewCSA({...newCSA, instagram: e.target.value})}
        />
      </div>

    </div>
  )
}

export default Session5
