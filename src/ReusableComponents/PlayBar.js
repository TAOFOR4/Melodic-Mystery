import { useEffect, useState } from "react";
import GameContext from "../context/gameContext.js";
import { useContext } from "react";
// import ReactFreezeframe from 'react-freezeframe';
// import Freezeframe from 'freezeframe';
import Freezeframe from 'freezeframe';

export default function PlayBarView(props){

    return(
        <div className = "playButtonContainer">
            <div className ="playButtonLeftAligned">
                <div className="secondsText">
                    <h3>{props.remainingSeconds} s</h3>
                </div>
                <div className="playAndPause">
                  {props.currStage === 0 ? <input type="image" src={`playButton${props.gameMode}.svg`} className="playButton" onClick={props.handlePlayACB} /> : props.currStage === 1 ? <input type="image" src={`pauseButton${props.gameMode}.svg`} className="playButton" onClick={props.handlePlayACB}/> : <input type="image" src={"playButtonDeactivated.svg"} className="playButton" />}
                </div>
            </div>
            <div className ="playButtonRightAligned">
            <div className ="dummy_one"></div>
            <div className ="dummy_two">
                <img className="freezeframe" src= {`playBar${props.gameMode}.gif`} /> 
            </div>
            </div>
        </div>
    )  
}

