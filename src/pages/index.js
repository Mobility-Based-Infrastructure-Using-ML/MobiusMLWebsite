import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Phone from '../components/Phone';

const IndexPage = () => (
  <div>

    <div className="Hero">
      <div className="HeroGroup">
      <h1>Mobius ML</h1>
      <p>Machine Learning Based <br /> Facial Recognition <br /> To Assist Quadriplegics. </p>
      <Link>Learn More</Link>
      </div>
      
    </div>

    <Phone />
    

    <div className="Cards">
      <h2>Features</h2>
      <div className="CardGroup">
        <Card title="Revolutionary Technology"
          text=""
          image={require('../images/wallpaper.jpg')}/>
        <Card title="Insanely Low Loss"
          text=""
          image={require('../images/wallpaper2.jpg')}/>
        <Card title="Completely Open Source"
          text=""
          image={require('../images/wallpaper3.jpg')} logoImage={require('../images/githubLogo.png')}/>
      </div>
    </div>
    
  </div>
)

export default IndexPage
