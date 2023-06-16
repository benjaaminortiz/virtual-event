import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='h-main'>
      <h4>WEBINAR</h4>
      <div className='h-content'>
        <h1>El reto de humanizar el CX financiero en 2021.</h1>
        <h1 style={{fontStyle: 'italic'}}>La experiencia de un Unicornio de Latam</h1>
        <h3>MIERCOLES 16 DE DICIEMBRE | 17 HS (HORARIO DE QUITO)</h3>
      </div>
    </div>
  )
}

export default Header