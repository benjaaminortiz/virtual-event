import React from 'react'
import './Specialist.css'

const Specialist = ({img, name, role}) => {
  return (
    <div className='spe-main'>
        <div className='spe-img-wrapper'>
            <img src={img} alt={img}/>
        </div>
        <div className='spe-body'>
            <h4>
                {name}
            </h4>
            <h6>
                {role}
            </h6>
        </div>
    </div>
  )
}

export default Specialist