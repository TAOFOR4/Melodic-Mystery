import GameSelectionView from "../Views/gamesView";
import GameContext from "../context/gameContext.js";
import { useContext, useEffect } from "react";

export default function GameSelection({setCurrView}){

    const gameContext = useContext(GameContext);
    const {setGameMode, setTime, setScore, gameMode, getLeaderBoard, leaderboardData} = gameContext;
    function selectGameModeACB(e){

        if (e.target.innerHTML.includes("year")){
            setGameMode("Year");
        }
        if (e.target.innerHTML.includes("title")){
            setGameMode("Title");
        }
        if (e.target.innerHTML.includes("artist")){
            setGameMode("Artist");
        }
        if (e.target.innerHTML.includes("lyrics")){
            setGameMode("Lyrics");
        }
        setCurrView("Genres")
        setScore(0)
        setTime(0)
    }
    function goBackACB(){
        window.location.hash = "#/";
    }
    useEffect(()=>{
        getLeaderBoard();

    },[])
    return(
        <GameSelectionView leaderboardData = {leaderboardData} setView = { setCurrView } selectGameModeACB = { selectGameModeACB } goBackACB = {goBackACB} gameMode = {gameMode}/>
    )
}