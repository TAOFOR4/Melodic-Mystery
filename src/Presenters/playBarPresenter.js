import { useEffect, useState } from "react";
import GameContext from "../context/gameContext.js";
import { useContext } from "react";
import Freezeframe from 'freezeframe';
import PlayBarView from "../ReusableComponents/PlayBar.js";

export default function PlayBar(props) {

    const [currStage, setCurrStage] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(15);
    const [currRound, setCurrRound] = useState(props.round);
    const gameContext = useContext(GameContext);
    const { gameMode} = gameContext;

    const [ff, setff] = useState(null);

    useEffect(() => {
          if(props.round == 1){
            setff(new Freezeframe('.freezeframe',{
              trigger: false,
              overlay: false         
            }));
          }
          if(props.round > 1){
            ff.stop();
          }
          
          // props.setAudio;  
          setCurrRound(props.round);  
          setRemainingSeconds(15);
          setCurrStage(0);
      }, [props.round]);

      useEffect(() => {
          if (ff){
            ff.stop();
          }
      }, [ff]);
    
    const handlePlayACB = () => {
        if (currStage === 0) {
            props.audio.play();
            ff.start();
        } 
        if (currStage === 1) {
            props.audio.pause();
            ff.stop();
        }
        setCurrStage((currStage+1)%2);
      };

    // Inspiration for timer: https://stackoverflow.com/a/67221578 
    const timer = () => {
        var tick = setInterval(() => {
          if (currStage === 0) {
            clearInterval(tick);
            return;
          }
          if (remainingSeconds <= 0) {
            clearInterval(tick);
            props.audio.pause();
            ff.stop();
            setCurrStage(3); 
            return;
          }
          setRemainingSeconds(remainingSeconds => remainingSeconds - 1);
        }, 1000);
        return () => {
          clearInterval(tick);
        };
      };

      useEffect(timer, [remainingSeconds, currStage]);


  return (
    <PlayBarView
        handlePlayACB = {handlePlayACB}
        remainingSeconds = {remainingSeconds}
        currStage = {currStage}
        gameMode = {gameMode}
    />
  )
}

