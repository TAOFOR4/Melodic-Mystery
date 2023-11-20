import LoadingscreenView from "../Views/loadingscreenView";
import GameContext from "../context/gameContext.js";
import { useContext,} from "react";

export default function Loadingscreen({setCurrView}){
    const gameContext = useContext(GameContext);
    const {reset} = gameContext;

    function goBackACB(){
        reset();
        setCurrView("GameSelection");
    }

    return(
        <LoadingscreenView setView = { setCurrView } goBackACB = {goBackACB}/>
    )
}