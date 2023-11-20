import RectangleCard from "../ReusableComponents/RectangleCard";
import RoundButton from "../ReusableComponents/RoundedButton";
import PlayBar from "../Presenters/playBarPresenter";
import { APIController } from "../fetchPromise";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import GameContext from "../context/gameContext.js";
import { useContext } from "react";
// import Freezeframe from 'freezeframe';

export default function GameScreenView({ selectedArray, selectAnswerACB, handleNextRound, getContent, currRound, currAudio, setCurrAudio}) {

  const [showQuitPopup, setShowQuitPopup] = useState(false);
  const gameContext = useContext(GameContext);
  const { gameData, gameMode } = gameContext;
  function handleClickQuitACB() {
    setShowQuitPopup(true);
  }

  function handleQuit() {
    window.location.hash = "#/";
  }

  function handleCancel() {
    setShowQuitPopup(false);
  }
  return (
    <div className ="gamescreenViewContainer">
      <div className ="gamescreenViewRoundcounter">
        <div className={"flex-row-round button roundText border" + gameMode}>
          <h3>Round {currRound}/5</h3>
        </div>
      </div>
      <div className ="gamescreenViewPlaybar">
        <PlayBar
          audio= {currAudio}
          setAudio = {setCurrAudio}
          round={currRound}
        />
      </div>
      <div className ="gamescreenViewCards">
        <RectangleCard
          type={"card_one " + gameMode}
          content={getContent(gameData[currRound - 1][0], 0 )}
          onClick={selectAnswerACB}
          selected={selectedArray[0]}
        />
        <RectangleCard
          type={"card_two " + gameMode}
          content={getContent(gameData[currRound - 1][1], 1 )}
          onClick={selectAnswerACB}
          selected={selectedArray[1]}
        />
        <RectangleCard
          type={"card_three " + gameMode}
          content={getContent(gameData[currRound - 1][2], 2 )}
          onClick={selectAnswerACB}
          selected={selectedArray[2]}
        />
        <RectangleCard
          type={"card_four " + gameMode}
          content={getContent(gameData[currRound - 1][3], 3 )}
          onClick={selectAnswerACB}
          selected={selectedArray[3]}
        />
      </div>
      <div className ="gamescreenButtons">
        <div>
          <RoundButton
            disabled={false}
            type={"quit"}
            content={"Quit"}
            onClick={handleClickQuitACB}
          />
        </div>
        <div>
          <RoundButton
            disabled={false}
            type={"next " + gameMode }
            content={"Next"}
            onClick={handleNextRound}
            selectedArray={selectedArray}
          />
        </div>
      </div>

      <Popup open={showQuitPopup} closeOnEscape={true} onClose={handleCancel}>
        <div className="pop-up">
          <p className="pop-up-title">
            Are you sure that you want to quit this game?
          </p>
          <div className = "popupGrid" >
            <button className="pop-up-option" onClick={handleCancel}>
              <p className="pop-up-option-content">No</p>
            </button>
            <button className="pop-up-option" onClick={handleQuit}>
              <p className="pop-up-option-content">Yes</p>
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}
