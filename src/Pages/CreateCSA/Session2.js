import React from 'react'
import RadioButton from '../../components/RadioButton'
import Dropdown from '../../components/Dropdown'
import Hour from '../../components/Hour'

const Session2 = ({newCSA, setNewCSA, defaultData}) => {

  return(
    <div>
      <div>Ponto de Convivência</div>
      {newCSA.meetingPoints.map((item, index)=>
        <div key={index}>
          <div>
            <Dropdown placeholder='Região' placeholder={'Selecione uma região'}
            values={defaultData.regions ? defaultData.regions.map((region) => region.name ) : []}
            onClick={(name) => {
              let mp = newCSA.meetingPoints.slice(0)
              mp[index].region = defaultData.regions.find((region) => region.name === name).id
              setNewCSA({...newCSA, meetingPoints: mp})
            }}/>
          </div>
          <div>
            <div>Endereço</div>
            <input type='text' placeholder='Digite o endereço'
              value={newCSA.place} onChange={(e) => {
                let mp = newCSA.meetingPoints.slice(0)
                mp[index].place = e.target.value
                setNewCSA({...newCSA, meetingPoints: mp})}
            }/>
          </div>
          <div>
            <div>Local de referência</div>
            <input type='text' placeholder='Digite o endereço'
              value={newCSA.meetingPoints.reference} onChange={(e) => setNewCSA({...newCSA, reference: e.target.value})}/>
          </div>

          <div>
            <div>Que dia(s) acontece(m)?</div>
              <div>
                {item.weekSchedule.map((day, i) =>
                  <div key={i} style={{display: 'flex', flexDirection: 'row'}}>
                    <Dropdown placeholder={'Dia'}
                      currentValue={day.day}
                      values={['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']}
                      onClick={(name) => {
                          let mp = newCSA.meetingPoints.slice(0)
                          mp[index].weekSchedule[i].day = name
                          setNewCSA({...newCSA, meetingPoints: mp})
                        }}
                    />
                  <div>
                    <div>Hora de início:</div>
                    <Hour onChange={(name)=>{
                            let mp = newCSA.meetingPoints.slice(0)
                            mp[index].weekSchedule[i].startTime = name
                            setNewCSA({...newCSA, meetingPoints: mp})
                          }}
                      />
                  </div>
                  <div>
                    <div>Hora de término:</div>
                    <Hour onChange={(name) => {
                          let mp = newCSA.meetingPoints.slice(0)
                          mp[index].weekSchedule[i].endTime = name
                          setNewCSA({...newCSA, meetingPoints: mp})
                        }}
                      />
                  </div>
                  {i !== 0 ?
                    <button onClick={() => {
                        let meetingPoints = newCSA.meetingPoints.slice(0)
                        meetingPoints[index].weekSchedule = [...meetingPoints[index].weekSchedule.slice(0, i),
                                                         ...meetingPoints[index].weekSchedule.slice(i+1)]
                        setNewCSA({...newCSA, meetingPoints: meetingPoints})
                      }}>Remover horário
                    </button>
                  : null}
                </div>
                )}
                <button onClick={()=>{
                  let mp = newCSA.meetingPoints.slice(0)
                  mp[index].weekSchedule = [...mp[index].weekSchedule, Object.create(mp[index].weekSchedule[mp[index].weekSchedule.length-1])]
                  setNewCSA({...newCSA, meetingPoints: mp})
                }}>Adicionar horário</button>
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
          let weekSchedule = Object.create(newCSA.meetingPoints[newCSA.meetingPoints.length-1].weekSchedule[newCSA.meetingPoints[newCSA.meetingPoints.length-1].weekSchedule.length -1])
          newMP.weekSchedule = [weekSchedule]
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
