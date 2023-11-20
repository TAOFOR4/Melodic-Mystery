import ResultsView from "../Views/resultsView";
import { useState, useEffect, useContext  } from "react";
import GameContext from "../context/gameContext.js";
import { saveGame,getGames } from "../firebaseModel.js";

export default function Results({currView, setCurrView}){
    const gameContext = useContext( GameContext );
    const { score, time, leaderboardData, gameMode } = gameContext;
    const [message, setMessage] = useState('');
    const [resultMsg, setResultMsg] = useState('');
    const [showSavePopup, setShowSavePopup] = useState(false);
    const [showAvoidPopup, setshowAvoidPopup] = useState(false);
    const [victoryAudio, setVictoryAudio] = useState(new Audio('victoryMusic.mp3'));
    const [errorMessage, setErrorMessage] = useState("Every artist should have a name!")
    const [ranking, setRanking] = useState(0);
  
    useEffect(() => {
        getCurrentRanking()
    }, []);

    function handleClickSaveACB() {
      setShowSavePopup(true);
      setshowAvoidPopup(true)
    }
    function handleSubmit() {
      saveGame(message, score, time, gameMode);
      window.location.hash = "#/";
    }
  
    function handleCancel() {
      setShowSavePopup(false);
      setshowAvoidPopup(false)
    }
  
    function handleChange(evt) {
      setMessage(evt.target.value)
      if(!evt.target.value.length){
        setErrorMessage("Every artist should have a name!")
        setshowAvoidPopup(true)
      }else{
        if(!leaderboardData.filter(element => element.gameMode == gameMode).find(element => element.username == evt.target.value ))
        {
          setshowAvoidPopup(false)
        }else{
          setErrorMessage("The username already exists.")
          setshowAvoidPopup(true)
        }
      }
     

    }
  
    function avoidSameName(a) {
      return !a;
    }
  
    useEffect(() => {
            victoryAudio.play();

            window.onpopstate = () => {
                victoryAudio.pause();
            };

            return () => {

                window.onpopstate = null;
            };
    });
    function goBackACB(){
        victoryAudio.pause()
        setCurrView("GameSelection")
    }

    function getCurrentRanking() {
    let currentData = leaderboardData.filter(x => x.gameMode == gameMode);
    let ranking = currentData.filter(x => x.score/x.time > score/time).length + 1;
    setRanking(ranking)
    }
    return(
        <ResultsView 
            goBackACB = { goBackACB } 
            games = {leaderboardData}
            handleClickSaveACB = {handleClickSaveACB}
            showSavePopup = {showSavePopup}
            handleCancel = {handleCancel}
            handleChange = {handleChange}
            avoidSameName = {avoidSameName}
            handleSubmit = {handleSubmit}
            showAvoidPopup = {showAvoidPopup}
            errorMessage = {errorMessage}
            ranking = {ranking}
            />
    )
}