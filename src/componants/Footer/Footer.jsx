import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="blur blur-f"></div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
            
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                
                <div className='logo'>
                    <span>Ahsan's</span>
                    <h4>Fit Club</h4>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer