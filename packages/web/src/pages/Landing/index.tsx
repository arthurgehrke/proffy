import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

const Landing:React.FC = () => {
  return(
    <div id="landing-page">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <div>
          <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
        </div>
        <div className="buttons-container">
          <a href="" className="study"></a>
        </div>
      </div>
    </div>
  )
}

export default Landing
