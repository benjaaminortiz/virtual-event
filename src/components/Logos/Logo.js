import React from 'react'
import './Logo.css'

const Logo = ({url}) => {
  return (
    <div className='logo'>
       <img src={url} alt={url}></img> 
    </div>
  )
}

export default Logo