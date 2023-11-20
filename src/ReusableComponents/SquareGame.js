import React, { useState } from 'react';

export default function GameButton(props){
    const myClass = `square ${props.type}`
    const [isShown, setIsShown] = useState(false);

    return(
        <div align="center">
            {props.disabled ? <button disabled className="button disabled" >{props.content} {props.img}</button> : 
            <button className={myClass} 
            onMouseEnter={onMouseEnterACB}
            onMouseLeave={onMouseLeaveACB}
            onClick ={props.onClick}>
                {props.verb}{props.content} {(!isShown) && (props.img)}{(isShown) && (props.text)}
            </button>}
        </div>
    )

    async function onMouseEnterACB() {        
        // setTimeout(function() {
        //   setIsShown(true)   
        // }, 2000)
        // await timer(1000);
        setIsShown(true);
      }

    function onMouseLeaveACB() {
        setIsShown(false)   
    }
    
    function timer(ms) { 
        return new Promise(res => setTimeout(res, ms)); 
    }
}

              

  
