import NavBar from "../ReusableComponents/NavBar";
import RoundButton from "../ReusableComponents/RoundedButton";

export default function HomepageView(props) {
  return (
    <div>
      <NavBar />
      <div className="flex-row-homepage">
        <span className="flex-column-homepage">
            <h1 className="App-name">Melodic Mystery</h1>
            <div className="description-font-30px">
              This is a music quiz game! Let's have fun guessing the
              name, artist, production year and lyrics of some of the most popular songs. 
            </div>
            <div className="flex-row-buttons">
              <RoundButton
                onClick={function hashGameSelectionACB() {
                  window.location.hash = "#/inGame";
                }}
                disabled={false}
                type={"gradientBlue playAsGuest"}
                content={"Play a game"}
              />
            </div>
        </span>
        <div className="graphic-background"></div>
      </div>
    </div>
  );
}
