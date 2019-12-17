import React from 'react'

export default function WinLoseCard({currentPoints}){
    return(
        <>
        {currentPoints >= 20
           ? <div className="winlose-card">
               <p>You Win The Game of Life! </p>
                <img src="https://media1.tenor.com/images/eb60f4e0ed1d4dabf26ef07e36f46290/tenor.gif?itemid=13114834" />
            </div>
            : <div className="winlose-card">
                <p>You Lose The Game Of Life!</p>
                <img src="https://66.media.tumblr.com/e4fc441778ce0585cb8569d66dcc8c89/tumblr_p8a9f2YFKK1uyphz9o1_500.gifv" />
            </div>
        }
        </>
    )
}
