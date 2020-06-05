import React from 'react'
import { Link } from 'react-router-dom'

const CsaListItem = ({csa}) => {
  console.log('csa:', csa)
  return(
    <div style={{width: '100%'}}>
      <div><Link to={`/csas/csa/${csa.id}`}>{csa.nome}</Link></div>
      <div>
        <span>Ponto de convivência:</span>
        {csa.meetingPoints.map( (meetingPoint, index) =>
          <span key={index}>
            {meetingPoint.place} {meetingPoint.weekday},
            {meetingPoint.weekSchedule.map( (schedule, i) =>
              <span key={i}>{schedule.startTime}-{schedule.endTime}</span>
            )}
          </span>
        )}
      </div>
      <hr/>
      <div>Local de produção: {csa.region.name}</div>
      <hr/>
    </div>
  )
}

export default CsaListItem
