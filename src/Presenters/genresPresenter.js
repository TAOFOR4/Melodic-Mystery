import GenresView from "../Views/genresView";
import GameContext from "../context/gameContext.js";
import { useContext} from "react";

export default function Genres({setCurrView}){

    const gameContext = useContext(GameContext);
    const {setGenre} = gameContext;

    function selectGenreACB(e){
        let clickedCard = e.target.innerText.toLowerCase();
        if (clickedCard.includes("all")){
            setGenre("all");
        }
        if (clickedCard.includes("hip-hop")){
            setGenre("hiphop");
        }
        if (clickedCard.includes("r&b")){
            setGenre("r&b");
        }
        if (clickedCard.includes("rock")){
            setGenre("rock");
        }
        if (clickedCard.includes("pop")){
            setGenre("pop");
        }
        setCurrView("LoadingScreen")
    }
    function goBackACB(){
        setCurrView("GameSelection")
    }
    return(
        <GenresView selectGenreACB = { selectGenreACB } goBackACB = {goBackACB}/>
    )
}