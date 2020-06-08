import React from 'react'
import { Link } from 'react-router-dom'

const CsaListItem = ({csa}) => {
  console.log('csa:', csa)
  return(
    <div style={{width: '100%'}}>
      <div><Link to={`/csas/csa/${csa.id}`}>{csa.nome}</Link></div>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>Ponto de convivência:</div>
          {csa.meetingPoints.map( (meetingPoint, index) =>
            <div key={index} style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                {meetingPoint.region.name}
              </div>
              {meetingPoint.weekSchedule.map( (schedule, i) =>
                <div key={i}>{`${meetingPoint.weekday}, ${schedule.startTime}-${schedule.endTime}`}</div>
              )}
            </div>
          )}
        </div>
        <hr/>

        <div>
          <div  style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Local de produção:</div>
            <div>{csa.region.name}</div>
            <div></div>
          </div>
          <hr/>
        </div>

      </div>
    </div>
  )
}

export default CsaListItem
