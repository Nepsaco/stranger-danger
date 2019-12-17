import React from 'react';
import picture from '../styles/sm2logo.png'

export default function Header(props){
    return(
        <header>
            <img src={picture}/>
            <aside>Points: {props.points}</aside>
        </header>

    )
}
