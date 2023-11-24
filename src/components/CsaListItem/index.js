import React from 'react'
import { Link } from 'react-router-dom'
const populate = "?populate[0]=region&populate[1]=meeting_points&populate[2]=agricultores&populate[3]=coagricultores"

/**
 * 
 * @param {*} param0 
 * @returns 
 */

const CsaListItem = ({csa}) => {
  console.log('csa:', JSON.stringify(csa))
  return(
    <div style={{width: '100%'}}>
      <div><Link to={`/csas/csa/${csa.id + populate}`}>{csa.Name}</Link></div>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>Ponto de convivência:</div>
          {csa.meeting_points.map( (meetingPoint, index) =>
            <div key={index} style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                {meetingPoint.region? meetingPoint.region.Name : ""}
              </div>
              {meetingPoint.csasWeektimeFrame? meetingPoint.csasWeektimeFrame.filter( csaWeektimeFrame => csaWeektimeFrame.csa.Name === csa.Name).map(
                (csaWeektimeFrame => csaWeektimeFrame.weekSchedule? csaWeektimeFrame.weekSchedule.map( (schedule, i) =>
                  <div key={i}>{`${schedule.weekday}, ${schedule.startTime}-${schedule.endTime}`}</div>
                ): null)
              ): null} 
              
            </div>
          )}
        </div>
        <hr/>

        <div>
          <div  style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>Local de produção:</div>
            <div>{csa.region? csa.region.Name : ""}</div>
            <div></div>
          </div>
          <hr/>
        </div>

      </div>
    </div>
  )
}

export default CsaListItem
