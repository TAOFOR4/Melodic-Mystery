import FillLyricsView from "../Views/filllyricsView";
import GameContext from "../context/gameContext.js";
import { useContext} from "react";
import {useState, useEffect} from "react";



export default function FillLyrics({setCurrView}){
    const gameContext = useContext(GameContext);
    const {score, setTime, setScore, lyricsArray, corrAnswers} = gameContext;
    const [currRound, setCurrRound] = useState(1); //Set the current round
  const [showQuitPopup, setShowQuitPopup] = useState(false); //For quit popup
  const [answer, setAnswer] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState("");
  
  const [i,set_i] = useState(0);
  useEffect(() => {
      const tick = () => set_i(i => i + 1);
      const id = setInterval(tick, 1000);
      return () => clearInterval(id)
  }, []); 

  function levenshteinDistance(str1, str2) {
    const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
       track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
       track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
       for (let i = 1; i <= str1.length; i += 1) {
          const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
          track[j][i] = Math.min(
             track[j][i - 1] + 1, // deletion
             track[j - 1][i] + 1, // insertion
             track[j - 1][i - 1] + indicator, // substitution
          );
       }
    }
    return track[str2.length][str1.length];
 };
  function nextRound() {
    let dist = levenshteinDistance(answer, correctAnswer) 
    let points;

    if(answer.length > correctAnswer.length){
        points = (answer.length-dist) / answer.length
    }else{
        points = (correctAnswer.length-dist) / correctAnswer.length
    }
    points = Math.round(points * 10) / 10
    if (currRound === 5) {
        setTime(i)
        setCurrView("Results");
      }
    setScore(score + points)
    setCurrRound(currRound + 1)
    setAnswer("")
  }

  function handleClickQuitACB() {
    setShowQuitPopup(true);
  }

  function handleQuit() {
    window.location.hash = "#/";
  }

  function handleCancel() {
    setShowQuitPopup(false);
  }
  function handleLyricsACB() {

    let array = lyricsArray[currRound-1].split("\n\n");
    let i = array.length - 2;
    while (i >= 0) {
      if (array[i].split("\n").length < 3) {
        i--;
      }else{
        return array[i]
      }
      
    }
  }
    return(
        <FillLyricsView 
            setView = {setCurrView}
            handleLyricsACB = {handleLyricsACB}
            handleCancel = {handleCancel}
            handleQuit = {handleQuit}
            nextRound = {nextRound}
            handleClickQuitACB = {handleClickQuitACB}
            setAnswer = {setAnswer}
            currRound = {currRound}
            showQuitPopup = {showQuitPopup}
            setCorrectAnswer = {setCorrectAnswer}
            answer = {answer}
            song = {corrAnswers[currRound-1]}
            
         /> 
    )
}