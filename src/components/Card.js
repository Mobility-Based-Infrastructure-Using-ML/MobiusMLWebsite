import React from 'react';
import './Card.css'

const Card = props => (
    <div className="Card">
        <img src={props.image} id="backgroundImage"></img>
        <p>{props.text}</p>
        <div className="tilt">
            <img src={props.logoImage}></img>
            <h3>{props.title}</h3>
        </div>
    </div>
)


export default Card