import { useEffect, useState } from "react";
import LoadingBar from "../ReusableComponents/LoadingBar";
import GameContext from "../context/gameContext.js";
import { useContext } from "react";
import RoundButton from "../ReusableComponents/RoundedButton";

export default function LoadingscreenView({ goBackACB , setView }){
    const gameContext = useContext(GameContext);
    const [message, setMessage] = useState("Loading...")
    const {getData} = gameContext;
    useEffect(() =>{
        getData()
    },[])

    return(
        <div className ="loadingbarContainer">
            <div className ="loadingbar"></div>
            <LoadingBar setView = {setView} setMessage = {setMessage}/>
            <p className="loadingbarDescription"> {message} </p>
            {/* Back button */}
            <div className ="loadingBackButton">
                <RoundButton
                    disabled = {false}
                    type={"black"}
                    content={"Back to game selection"}
                    onClick ={ goBackACB }
                />
            </div>
        </div>
    )
}