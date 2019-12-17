import React from 'react';

export default function Header(props){
    return(
        <header>
            <h1>Street Smarts</h1>
            <aside>Points: {props.points}</aside>
        </header>

    )
}
