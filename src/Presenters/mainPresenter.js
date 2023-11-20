import { useEffect, useState } from "react";
import GameScreenView from "../Views/gamescreenView";
import GameSelectionView from "../Views/gamesView";
import GenresView from "../Views/genresView";
import LoadingscreenView from "../Views/loadingscreenView";
import ResultsView from "../Views/resultsView";
import FillLyricsView from "../Views/filllyricsView";
import HomepageView from "../Views/homepageView";
import { APIController } from "../fetchPromise";
import GameContext from "../context/gameContext.js";
import { useContext } from "react";
import Gamescreen from "./gamescreenPresenter";
import FillLyrics from "./filllyricsPresenter";
import GameSelection from "./gamesPresenter";
import Genres from "./genresPresenter";
import Loadingscreen from "./loadingscreenPresenter";
import Results from "./resultsPresenter";

export default function Main(){
    const [currView, setCurrView] = useState("GameSelection")
    const gameContext = useContext(GameContext);
    const {gameMode, reset} = gameContext;
    useEffect(() => {
      reset()
    }, [])
    

      function gameModeCB(){
        
        if (gameMode === "Lyrics") {
          return (currView === "FillLyrics") && <FillLyrics setCurrView = { setCurrView }/>
        }
        else {
          return  (currView === "GameScreen") && <Gamescreen setCurrView = { setCurrView }/>

        }
      }
    return(
        <div>
          {(currView === "GameSelection") && <GameSelection setCurrView = { setCurrView }/>}
            {(currView === "Genres") && <Genres setCurrView = { setCurrView }/> }
            {(currView === "LoadingScreen") && <Loadingscreen setCurrView = { setCurrView }/>}
            {(currView === "Results") && <Results setCurrView = { setCurrView } currView ={ currView } />}
            {gameModeCB()}

        </div>   
    )
}