import React from 'react';
import WorkRow from '../WorkRow/WorkRow';
import './HowItWorks.css';


export default function HowItWorks() {
    const HowItWorksContent = [

        {
            //icon(01) should be here 
            heading:'Voice Control',
            text: 'Aoia recognises voice commands and executes your request. Support text when you dont want to speak.',
            alt: false
        },

        {
            //Icon(02) should be here
            heading : 'In app functionality',
            text: 'Handle all your notification on the app without having to leave or switching bettwen apps.',
            alt: false
        },

        {
            //Icon(03) should be here 
            heading: 'Brainstorming',
            text: 'text for here'
        }
    ]

    return (
        <div id="how">
            <h2>How it works</h2>

            {
                HowItWorksContent.map((itemsData, index) => {
                    return <WorkRow data={itemsData} key={index}/>
                })
            }
        </div>
    )
}