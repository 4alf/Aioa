import React from 'react'

import heroPhone from "../../images/Aioadevice.svg";

import './Hero.css'


export default function Hero() {
    return(
        <div id="hero">
            <div className="text">
            <h1>All In One App</h1>
                <p>A smart solution that handles all your notifications in one app. You never miss out on any notification again. <br/>We eill be launching soon join for early access.</p>
            </div>
            <div className="image">
                <img src={heroPhone} alt="Aioa Mobile Phone"/>
            </div>
        </div>
    )
}