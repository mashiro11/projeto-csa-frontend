import React from 'react'
import RadioButton from '../../components/RadioButton'
import Dropdown from '../../components/Dropdown'

const Session2 = ({newCSA, setNewCSA, defaultValues}) => {
  return(
    <div>
      <div>Ponto de Convivência</div>
      {newCSA.meetingPoints.map((item, index)=>
        <div key={index}>
          <div>
            <Dropdown placeholder='Região' values={['R1', 'R2', 'R3']}/>
          </div>
          <div>
            <div>Endereço</div>
            <input type='text' placeholder='Digite o endereço'
              value={newCSA.address} onChange={(e) => {
                let mp = newCSA.meetingPoints.slice(0)
                mp[index].address = e.target.value
                setNewCSA({...newCSA, meetingPoints: mp})}
            }/>
          </div>
          <div>
            <div>Local de referência</div>
            <input type='text' placeholder='Digite o endereço'
              value={newCSA.reference} onChange={(e) => setNewCSA({...newCSA, reference: e.target.value})}/>
          </div>

          <div>
            <div>Que dia(s) acontece(m)?</div>
              <div>
                {item.schedule.map((day, i) =>
                  <div key={i} style={{display: 'flex', flexDirection: 'row'}}>
                    <Dropdown placeholder={'Dia'}
                      currentValue={day.day}
                      values={['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']}
                      onClick={(name) => {
                          let mp = newCSA.meetingPoints.slice(0)
                          mp[index].schedule[i].day = name
                          setNewCSA({...newCSA, meetingPoints: mp})
                        }}
                    />
                    <Dropdown placeholder={'Hora'}
                      currentValue={day.hour}
                      values={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
                               '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                      onClick={(name)=>{
                        let mp = newCSA.meetingPoints.slice(0)
                        mp[index].schedule[i].hour = name
                        setNewCSA({...newCSA, meetingPoints: mp})
                      }}
                    />
                  <Dropdown placeholder={'minutos'}
                    currentValue={day.minutes}
                    values={['00', '30']}
                    onClick={(name) => {
                      let mp = newCSA.meetingPoints.slice(0)
                      mp[index].schedule[i].minutes = name
                      setNewCSA({...newCSA, meetingPoints: mp})
                    }}
                  />
                  {i !== 0 ?
                    <button onClick={() => {
                        let meetingPoints = newCSA.meetingPoints.slice(0)
                        meetingPoints[index].schedule = [...meetingPoints[index].schedule.slice(0, i),
                                                         ...meetingPoints[index].schedule.slice(i+1)]
                        setNewCSA({...newCSA, meetingPoints: meetingPoints})
                      }}>Remover horário
                    </button>
                  : null}

                  <button onClick={()=>{
                    let mp = newCSA.meetingPoints.slice(0)
                    mp[index].schedule = [...mp[index].schedule, Object.create(mp[index].schedule[mp[index].schedule.length-1])]
                    setNewCSA({...newCSA, meetingPoints: mp})
                  }}>Adicionar horário</button>
                </div>
                )}
              </div>
          </div>

          {index !== 0 ?
            <button onClick={() => setNewCSA(
                {...newCSA,
                  meetingPoints: [...newCSA.meetingPoints.slice(0, index),
                                  ...newCSA.meetingPoints.slice(index+1)]
                })}
            >Remover ponto de convivência</button>
          :null}
        </div>
      )}
      <button onClick={()=> {
          let newMP = Object.create(newCSA.meetingPoints[newCSA.meetingPoints.length-1])
          let schedule = Object.create(newCSA.meetingPoints[newCSA.meetingPoints.length-1].schedule[newCSA.meetingPoints[newCSA.meetingPoints.length-1].schedule.length -1])
          newMP.schedule = [schedule]
          setNewCSA(
            {...newCSA,
              meetingPoints: [...newCSA.meetingPoints, newMP]
            })
        }}
      >Adicionar outro ponto de convivência</button>
    </div>
  )
}

export default Session2
