import RoundButton from "../ReusableComponents/RoundedButton";
import GameContext from "../context/gameContext.js";
import { useContext, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { saveGame,getGames } from "../firebaseModel.js";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import HighScoreTable from "../ReusableComponents/HighScoreTable";

export default function ResultsView({errorMessage, goBackACB, games, handleClickSaveACB, handleCancel, handleChange, ranking, showSavePopup, showAvoidPopup, handleSubmit}) {

  const gameContext = useContext( GameContext );
  const {gameMode, time, score  } = gameContext;
  const { width, height } = useWindowSize()
  const totalScore = Math.floor((score/time)*100000);

  const [resultMsg, setResultMsg] = useState('');

  function printResultMsg(){
    if (score === 5){
      setResultMsg('Congratulations!');
    }
    if (score === 4){
      setResultMsg('Well done!');
    }
    if (score === 3){
      setResultMsg('Good job!');
    }
    if (score === 2){
      setResultMsg("Come on! You're better than this");
    }
    if (score === 1){
      setResultMsg('Unlucky!');
    }
    if (score === 0 && time === 0) {
      setResultMsg('Maybe next time...');
    }
  }



  useEffect(printResultMsg);

  return (
    <div className = "resultsContainer">
      <div className = "leftSideResults">
        <div className = "resultsTitle"> Melodic Mystery </div>
        <div className = "resultsMessage"> {resultMsg} </div>
        <div className = "pointsGridText"> 
          <div className = "answerText"> Correct answer:</div>
          <div className = "answerText"> Time:</div>
          {resultMsg == "Congratulations!" ? <Confetti
            width={width}
            height={height}
            colors={['#5D78FC', '#673F8C', '#8A5AD8']}
            gravity={0.05}
            /> : <div></div>}
        </div>
        <div className = "pointsGridScore"> 
          <div className="colorDiv">{score}/5</div>
          <div className="colorDiv">{time} seconds</div>
        </div>
        <div className="answerText"> 
          In mode: Guess the {gameMode}
        </div>
        <div className = "scoreResult">
          Score: {totalScore}
        </div>
        <div className = "rankingResult"> 
          Current Ranking: {ranking}
         </div>
        <div className = "resultButtons"> 
          <RoundButton
                disabled={false}
                type={"gradientBlue"}
                content={"Save result to leaderboard"}
                onClick={handleClickSaveACB}
              />
              <RoundButton
                onClick ={goBackACB}
                disabled={false}
                type={"black_toGame"}
                content={"Back to game selection"}
              />
        </div>
      </div>
    
      <div className = "rightSideResults"> 
        <div style={{display:"flex", justifyContent:"center", width: window.innerWidth * 0.4 }}>
            <HighScoreTable games = {games} gameMode = {gameMode}/>
          </div>
      </div>

      <Popup open={showSavePopup} closeOnEscape={true} onClose={handleCancel}>
        <div className="pop-up">
          <p className="pop-up-title">
          Save your name on Leaderboard
          </p>
          <input className="usernameinput" onChange={handleChange} ></input>
          {
        showAvoidPopup && <p className="avoidmessage">{errorMessage}</p>
       }
          <div className = "popupGrid" >
            <button className="pop-up-option" onClick={handleCancel}>
              <p className="pop-up-option-content">Cancel</p>
            </button>
            <button className="pop-up-option" disabled={showAvoidPopup} onClick={handleSubmit}>
              <p className="pop-up-option-content" >Submit</p>
            </button>
          </div>
        </div>
      </Popup>

      
      {/* <Popup open={showAvoidPopup} >
        
        <p className="avoidmessage">{errorMessage}</p>
  
      </Popup>
       */}


    </div>
    
  );
}

//<audio controls src={currentAudio}></audio>