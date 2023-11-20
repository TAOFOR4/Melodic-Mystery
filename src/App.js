import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./Presenters/homepagePresenter";
import UserModel from "./UserModel";
import AboutUs from "./Presenters/aboutusPresenter";
import Main from "./Presenters/mainPresenter";
import GameState from "./context/gameState";
import Results from "./Presenters/resultsPresenter";

function App() {
  const myModel = new UserModel();

  const routes = [
    {
      path: "/",
      element: <Homepage model={myModel} />,
    },
    {
      path: "/aboutus",
      element: <AboutUs model={myModel} />,
    },
    {
      path: "/inGame",
      element: <Main model={myModel} />,
    },
  ];

  return (
    // <Results/>
    // <Genres/>
    // <Games/>
    //<Homepage />
    <div>
      <GameState>
        <RouterProvider router={createHashRouter(routes)} />
      </GameState>
    </div>
  );
}

export default App;
