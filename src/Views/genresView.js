import SquareCard from "../ReusableComponents/SquareCard";
import RoundButton from "../ReusableComponents/RoundedButton";
import GenreAll from "../IconsGenre/genreAll.svg";
import GenreRock from "../IconsGenre/genreRock.svg";
import GenrePop from "../IconsGenre/genrePop.svg";
import GenreHipHop from "../IconsGenre/genreHipHop.svg";
import GenreRB from "../IconsGenre/genreRB.svg";
import GameContext from "../context/gameContext.js";
import { useContext } from "react";

export default function GenresView({selectGenreACB, goBackACB}){

    const gameContext = useContext(GameContext);
    const {gameMode} = gameContext;

    return(
        <div className ="genreComponent">
            {/* Genre selection title */}
            <div className={"select_genre_title " + gameMode}> Guess the {gameMode} </div>

            {/* Genre selection description */}
            <div className="select_genre_description"> Select your preferred genre: </div>

            {/* Genre selection cards */}
            <div className ="genreCards">
                <div className="card">
                    <SquareCard
                        disabled = {false}
                        type={gameMode}
                        content={<div className="gameName">All</div>}
                        img={<div style={{pointerEvents: "none"}}><img className="gameimg" src={GenreAll}></img></div>}
                        onClick = { selectGenreACB }
                    />
                </div>
                <div className="card">
                    <SquareCard
                        disabled = {false}
                        type={gameMode}
                        content={<div className="gameName">Rock</div>}
                        img={<div style={{pointerEvents: "none"}}><img className="gameimg" src={GenreRock}></img></div>}
                        onClick = { selectGenreACB }
                    />
                </div>
                <div className="card">
                    <SquareCard
                        disabled = {false}
                        type={gameMode}
                        content={<div className="gameName">Pop</div>}
                        img={<div style={{pointerEvents: "none"}}><img className="gameimg" src={GenrePop}></img></div>}
                        onClick = { selectGenreACB }
                    />
                </div>
                <div className="card">
                    <SquareCard
                        disabled = {false}
                        type={gameMode}
                        content={<div className="gameName">Hip-Hop</div>}
                        img={<div style={{pointerEvents: "none"}}><img className="gameimg" src={GenreHipHop}></img></div>}
                        onClick = { selectGenreACB }
                    />
                </div>
                <div className="card">
                    <SquareCard
                        disabled = {false}
                        type={gameMode}
                        content={<div className="gameName">R&B</div>}
                        img={<div style={{pointerEvents: "none"}}><img className="gameimg" src={GenreRB}></img></div>}
                        onClick = { selectGenreACB }
                    />
                </div>
            </div>
            {/* Back button */}
            <div className ="genreBackButton">
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