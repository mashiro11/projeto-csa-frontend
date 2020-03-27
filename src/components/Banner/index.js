import React from 'react'

const Banner = ({title, image}) => {
  return(
    <div className='bannerContainer' style={{backgroundImage: `url(${image})`}}>
      <div className='bannerTitle'>{title}</div>
    </div>
  )
}

export default Banner
