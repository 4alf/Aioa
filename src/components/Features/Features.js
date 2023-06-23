import React from 'react';
import FeatureTextGroup from '../FeatureTextGroup/FeatureTextGroup';
import './Features.css';

export default function Features() {
const featureData = [
    {
        number: '01',
        text: 'Aioa is a smart app built with  ai features that manages all your notification with one click.'
    },

    {
        number: '02',
        text: 'Aioa monitors your conversations, post, calender and meetings for maximum experience.'
    },

    {
        number: '03',
        text: 'Aio integrates third-party apps which is needed to get the app functional.'
    }

   
]


return (
    <div id="features">
        <h2>Aioa Features</h2>
        <div className="row">

            <div className="col">
            <FeatureTextGroup number={featureData[0].number} text={featureData[0].text} />
            <FeatureTextGroup number={featureData[1].number} text={featureData[1].text} />
            </div>

            <div className="col">
            <FeatureTextGroup number={featureData[2].number} text={featureData[2].text} />
           
            </div>
        </div>
    </div>
)
}

/**
 * Aioa videoProdut !
 * <div claasName=col col-2">
 * 
 * <video autoPlay loop>
 * 
 * <source src={aioaVideo} type="video/mp4" />
 * 
 * </video>
 * </div>
 * 
 */