import GameButton from "../ReusableComponents/SquareGame.js";
import title from '../IconsGame/GuessTitle.svg'
import year from '../IconsGame/GuessYear.svg'
import artist from '../IconsGame/GuessArtist.svg'
import lyrics from '../IconsGame/GuessLyrics.svg'
import background from '../IconsGame/Background.svg'
import NavBar from "../ReusableComponents/NavBar.js";
import useWindowSize from 'react-use/lib/useWindowSize'
import RoundButton from "../ReusableComponents/RoundedButton";
import HighScoreTable from "../ReusableComponents/HighScoreTable.js";
import { useEffect, useState } from "react";

export default function GamesSelectionView({selectGameModeACB, goBackACB, leaderboardData}){
    const { width, height } = useWindowSize()

    const gameMode = ["Title", "Artist", "Year", "Lyrics"]; 

    /* Inspired by: https://www.appsloveworld.com/reactjs/200/98/how-to-show-every-array-object-in-react-js-after-specific-time-interval */
    const [i,set_i] = useState(0);
    useEffect(() => {
        const tick = () => set_i(i => i + 1);
        const id = setInterval(tick, 5000);
        return () => clearInterval(id)
    }, []); 

    return(
        <div>
        <div className ="gameContainer">
            <div className ="leftSide">
                {/* <img className="background" src={background}></img> */}
                <div className ="cardGrid">
                    <GameButton
                            disabled = {false}
                            type={"Title"}
                            verb={<div className="gameverbcontent">Guess the </div>}
                            content={<div className="gameName">Title</div>}
                            img={<div><img className="gameimg" src={title}></img></div>}
                            text={<div className="gamecontent">Guess the title of a song within 15 seconds</div>}
                            onClick = {selectGameModeACB}
                        />
                
                        <GameButton
                            disabled = {false}
                            type={"Year"}
                            verb={<div className="gameverbcontent">Guess the </div>}
                            content={<div className="gameName">Year</div>}
                            img={<div><img className="gameimg"  src={year}></img></div>}
                            text={<div className="gamecontent">Guess what year a song was released within 15 seconds</div>}
                            onClick = {selectGameModeACB}
                        />

                        <GameButton
                            disabled = {false}
                            type={"Artist"}
                            verb={<div className="gameverbcontent">Guess the </div>}
                            content={<div className="gameName">Artist</div>}
                            img={<div><img className="gameimg" width="120px" src={artist}></img></div>}
                            text={<div className="gamecontent">Guess the artist of a song within 15 seconds</div>}
                            onClick = {selectGameModeACB}
                        />

                        <GameButton
                            disabled = {false}
                            type={"Lyrics"}
                            verb={<div className="gameverbcontent">Guess the </div>}
                            content={<div className="gameName">Lyrics</div>}
                            img={<div><img className="gameimg" width="180px" src={lyrics}></img></div>}
                            text={<div className="gamecontent">Fill in the blanks of the lyrics of a song within 15 seconds</div>}
                            onClick = {selectGameModeACB}
                        />
                </div>
                {/* Back button */}
                <div className ="backButton">
                    <RoundButton
                        disabled = {false}
                        type={"black"}
                        content={"Back to Home"}
                        onClick ={ goBackACB }
                    />
                </div>
            </div>
            <div className ="rightSide">
                
                <HighScoreTable games = {leaderboardData} gameMode = {gameMode[i%4]}/>
            </div>
        </div>
        </div>
        
    )
}