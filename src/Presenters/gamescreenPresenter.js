import GameScreenView from "../Views/gamescreenView";
import GameContext from "../context/gameContext.js";
import { useEffect, useContext, useState  } from "react";

export default function Gamescreen({setCurrView}){
    const [selectedArray, setSelectedArray] = useState([ false, false, false, false ]);
    const [years, setYear] = useState([0, 0, 0, 0]);
    const [currRound, setCurrRound] = useState(1);
    const gameContext = useContext(GameContext);
    const {gameMode, setTime, score, setScore, gameData, corrAnswers} = gameContext;
    const [currAudio, setCurrAudio] = useState(new Audio(corrAnswers[currRound-1].track.preview_url));


    const [i,set_i] = useState(0);
    useEffect(() => {
        const tick = () => set_i(i => i + 1);
        const id = setInterval(tick, 1000);
        return () => clearInterval(id)
    }, []); 
    useEffect(() => {
      setCurrAudio(new Audio(corrAnswers[currRound - 1].track.preview_url));
  }, [currRound]);
        
    function selectAnswerACB(e) {
        if (e.target.className.includes("one")) {
          setSelectedArray([true, false, false, false]);
        }
        if (e.target.className.includes("two")) {
          setSelectedArray([false, true, false, false]);
        }
        if (e.target.className.includes("three")) {
          setSelectedArray([false, false, true, false]);
        }
        if (e.target.className.includes("four")) {
          setSelectedArray([false, false, false, true]);
        }
      }

    function getContent(song, id) {
        //getLyrics();
        switch (gameMode) {
          case "Year":
            let year = song.track.album.release_date.split("-")[0];
            year = parseInt(year)
            years[id] = 0
            while (true) {
              if (years.includes(year)) {
                year--;
              }else{
                years[id] = year
                break;
              }
            }
            return year;
          case "Title":
            return song.track.name;
          case "Artist":
            let artists = "";
            song.track.artists.map((artist) => {
              if (artists === "") {
                artists = artist.name;
              } else {
                artists = artists + ", " + artist.name;
              }
            });
            return artists;
          default:
            return;
        }
      }

    function handleNextRound() {
        let selectedAnswer =
          gameData[currRound - 1][
            selectedArray.findIndex((element) => element == true)
          ].track.name;
        if(gameMode ===  "Year")
        {
            if(years[selectedArray.findIndex((element) => element === true)] == corrAnswers[currRound - 1].track.album.release_date.split("-")[0]) {
                setScore(score + 1);
              }
        }
        else if(selectedAnswer === corrAnswers[currRound - 1].track.name) {
          setScore(score + 1);
        }
        if (currRound === 5) {
          setTime(i)
          setCurrView("Results");
          currAudio.pause();
        }
        currAudio.pause();
        setYear([0,0,0,0])
        setCurrRound(currRound + 1);
        
        setSelectedArray([false, false, false, false]);
      }

    return(
        <GameScreenView currAudio = {currAudio} setCurrAudio = {setCurrAudio} selectAnswerACB = {selectAnswerACB} selectedArray = { selectedArray } getContent = { getContent } handleNextRound = { handleNextRound } currRound = { currRound }/>
    )
}