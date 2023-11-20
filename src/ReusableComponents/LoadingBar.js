
import { useState, useContext, useEffect } from "react";
import GameContext from "../context/gameContext";
export default function LoadingBar(props){

    const gameContext = useContext(GameContext);
    const {gameMode, lyricsArray, gameData} = gameContext;
    const [currentLoadingbar, setLoadingbar] = useState(`LoadingScreen${gameMode}.gif`);
    const [animationDone, setAnimationDone] = useState(false)
    
    // Source for methodology: https://stackoverflow.com/a/68920972 
    setTimeout(()=>{
        setLoadingbar(`Loading${gameMode}.png`);
        setAnimationDone(true)
        setTimeout(() => {
            props.setMessage("Almost There...")
            setTimeout(() => {
                props.setMessage("Rome wasn't built in a day...")
                setTimeout(() => {
                    props.setMessage("Patience is not the ability to wait, but the ability to keep a good attitude while waiting!")
                },[1000])
            },[2000])
        },[2000])
        }, [6000])
    useEffect(() => {
        if((lyricsArray.length > 0 || gameData.length > 0)  && animationDone)
            gameMode === "Lyrics" ? props.setView("FillLyrics") : props.setView("GameScreen")
    }, [lyricsArray, animationDone])
    
    return(
        <div>
            <div>
                <img className="loadingBar" src={currentLoadingbar}/>
            </div>
        </div>
    )  
}
