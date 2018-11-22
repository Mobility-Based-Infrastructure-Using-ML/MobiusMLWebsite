import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Phone from '../components/Phone';

const IndexPage = () => (
  <div>

    <div className="Hero">
      <div className="HeroGroup">
      <h1>Swiped IO</h1>
      <p>At home? At school? <br /> On the train ride back from work? <br /> We got you.</p>
      <Link to="/page-2/">Buy Now</Link>
      </div>
      
    </div>

    <Phone />
    

    <div className="Cards">
      <h2>Features</h2>
      <div className="CardGroup">
        <Card title="One Click Captchas"
          text=""
          image={require('../images/wallpaper.jpg')}/>
        <Card title="Lightning Fast Speeds"
          text=""
          image={require('../images/wallpaper2.jpg')}/>
        <Card title="Intuitive Interface"
          text=""
          image={require('../images/wallpaper3.jpg')}/>
        <Card title="Super Simple Setup"
          text=""
          image={require('../images/wallpaper.jpg')}/>
        <Card title="Webhook Support"
          text=""
          image={require('../images/wallpaper2.jpg')}/>
          <Card title="Supreme, Shopify, and More"
          text=""
          image={require('../images/wallpaper3.jpg')}/>
      </div>
    </div>
    
  </div>
)

export default IndexPage
