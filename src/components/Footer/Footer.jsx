import React from 'react'

import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad aliquid, voluptatem, aperiam odio temporibus atque accusantium nostrum quidem odit ipsa! Dolore ex totam architecto magni esse. Quibusdam, animi veritatis.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+49123123123</li>
                <li>contanct@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        copyright
      </p>
    </div>
  )
}

export default Footer
