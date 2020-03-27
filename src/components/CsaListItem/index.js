import React from 'react'
import { Link } from 'react-router-dom'

const CsaListItem = ({csa}) => {
  return(
    <div>
      <Link to={`csas/csa/${csa.id}`}>{csa.nome}</Link>
    </div>
  )
}

export default CsaListItem
