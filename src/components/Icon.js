import React from 'react';
import Emoji from './Emoji'
import './Icon.css'


let icon;

export default function Icon({weather})
{
    /* This will loop through the Emoji array and if
    the description from the array equals to the weather description
    then the icon variable will be assign to the emoji
    of that array.
    */
    for (let i=0; i<Emoji.length; i++){
        if(Emoji[i].description===weather){
            icon=Emoji[i].emoji
        }
    }
    

    return(

        <div>
            <p className="icon">{icon}</p>
        </div>
    )
}

