import React from 'react'
import hyper from '../images/hyper.mp4'

const Intro = () => {
  return (
    <div className='introhyper'>
        <video src={hyper} autoPlay muted loop width={'100%'}></video>
    </div>
  )
}

export default Intro