import React from 'react'
import './LinkBubble.css'

const LinkBubble = ({img, url}) => {
  return (
    <div className='bubble-wrapper'>
        <a href={url}>
            <img src={img} alt={img}/>
        </a>
    </div>
  )
}

export default LinkBubble