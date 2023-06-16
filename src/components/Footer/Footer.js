import React from 'react'
import './Footer.css'
import Twitter from './footerlogos/twticon.png'
import Facebook from './footerlogos/fblogo.png'
import LinkedIn from  './footerlogos/inlogo.png'
import YouTube from './footerlogos/ytlogo.png'
import Instagram from './footerlogos/iglogo.png'
import Snapchat from './footerlogos/sclogo.png'
import LinkBubble from './LinkBubble'

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='s-container'>
        <span>© 2020</span>
      </div>
      <div className='b-container'>
        <LinkBubble img={Twitter} url={'https://twitter.com/?lang=es'}/>
        <LinkBubble img={Facebook} url={'https://es-la.facebook.com/'}/>
        <LinkBubble img={LinkedIn} url={'https://ar.linkedin.com/'}/>
        <LinkBubble img={YouTube} url={'https://www.youtube.com/'}/>
        <LinkBubble img={Instagram} url={'https://www.instagram.com/'}/>
        <LinkBubble img={Snapchat} url={'https://www.snapchat.com/'}/>
      </div>
    </div>
  )
}

export default Footer