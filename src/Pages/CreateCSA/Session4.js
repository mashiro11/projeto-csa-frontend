import React from 'react'

const Session4 = ({newCSA, setNewCSA}) => {
  return(
    <div>
      <div>Nossas fotos</div>
      {newCSA.images.map((item, index)=>
        <div key={index}>
          <div>IMAGEM</div>
          <input type='text' placeholder='Digite uma legenda'
            value={newCSA.images[index].description}
            onChange={(e)=> {
              let images = newCSA.images.slice(0)
              images[index].description = e.target.value
              setNewCSA({...newCSA, images:images})
          }}/>
        {index !== 0 ?
          <button onClick={()=> setNewCSA(
              {...newCSA,
                images: [...newCSA.images.slice(0, index),
                         ...newCSA.images.slice(index + 1)]
              })}>
              Remover
          </button>
        :null}
        </div>
      )}
      <button onClick={()=>setNewCSA({...newCSA, images:[...newCSA.images, {file:'', description:''}]})}>
        Adicionar outra imagem
      </button>

      <div>Nossos vídeos</div>
      {newCSA.videos.map((item, index) =>
        <div key={index}>
          <input type='text' placeholder='Insira o link do vídeo'
            value={newCSA.videos[index]}
            onChange={(e)=>{
              let videos = newCSA.videos.slice(0)
              videos[index] = e.target.value
              setNewCSA({...newCSA, videos:videos})
            }}
          />
          {index !== 0 ?
            <button onClick={() => setNewCSA(
                {...newCSA,
                  videos:[...newCSA.videos.slice(0, index),
                          ...newCSA.videos.slice(index + 1)]
                }
            )}>Remover</button>
            :null
          }
        </div>
      )}
      <button onClick={() => setNewCSA({...newCSA, videos: [...newCSA.videos, '']})}>
        Adicionar outro vídeo
      </button>

    </div>
  )
}

export default Session4
