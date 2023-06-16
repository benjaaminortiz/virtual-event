import React from 'react'
import Logo from './Logo'
import Bitmap from "./img/Bitmap.png"
import Asobanca from "./img/asobanca.png"
import Ebanx from "./img/ebanx2_1.png"
import Ipbf from "./img/Captura de Pantalla 2020-12-09 a la(s) 01.25.30 p. m..jpg"
import Zendesk from "./img/ji-zen-int-logo.png"
import HT from "./img/logo_hightelecom_horizontal.png"
import './Logos.css'

const Logos = () => {
  return (
    <div className='l-main'>
      <Logo url={Bitmap} />
      <Logo url={Asobanca} />
      <Logo url={Ipbf} />
      <Logo url={HT} />
      <Logo url={Ebanx} />
      <Logo url={Zendesk} />
    </div>
  )
}

export default Logos