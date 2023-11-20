import LyricsSquare from "../ReusableComponents/LyricsSquare";
import RoundButton from "../ReusableComponents/RoundedButton";
import Popup from "reactjs-popup";
import HintButton from "../ReusableComponents/HintButton";


export default function FillLyricsView({answer, setAnswer, currRound, handleCancel, handleClickQuitACB, handleLyricsACB, nextRound, handleQuit, showQuitPopup, setCorrectAnswer, song}) {
    function handleChangeACB(e){
        setAnswer(e.target.value)
      }
  return (
    <div className ="fillyricsContent">
      <div className ="filllyricsViewRoundcounter">
        <div className = "flex-row-round lyrics" >
          <div className = "button roundText lyrics">
            <h3>Round {currRound}/5</h3>
          </div>
        </div>
      </div>
      <div className="flex-column-lyrics">
        <LyricsSquare lyrics={handleLyricsACB()} setCorrectAnswer = {setCorrectAnswer} />
      </div>
      <div className ="lyricsInput">
        <input className="input_lyrics" onChange={handleChangeACB} value={answer}></input>
      </div>
      <div className ="lyricsButtons">
        <RoundButton
          disabled={false}
          type={"quit"}
          content={"Quit"}
          onClick={handleClickQuitACB}
        />
        <RoundButton
          disabled={false}
          type={"nextLyrics"}
          content={"Next"}
          onClick={nextRound}
        />
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

      <div></div>
    </div>
  );
}
