import { React, useReducer } from "react";
import gameContext from "./gameContext";
import gameReducer from "./gameReducer";
import { APIController } from "../fetchPromise";
import { getGames } from "../firebaseModel.js";

const SET_GAME = "SET_GAME";
const SET_GENRE = "SET_GENRE";
const GET_DATA = "GET_DATA";
const GET_CORRECT = "GET_CORRECT";
const SET_SCORE = "SET_SCORE";
const SET_TIME = "SET_TIME";
const SET_LYRICS = "SET_LYRICS";
const RESET_STATE = "RESET_STATE";
const SET_LEADERBOARD = "SET_LEADERBOARD";

function GameState(props) {
  const initialState = {
    gameMode: undefined,
    score: 0,
    gameData: [],
    corrAnswers: [],
    lyricsArray: [],
    genre: undefined,
    time: 0,
    leaderboardData: []
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  async function getTokenAndPlaylist() {
    const resp = await APIController.getToken();
    const playlist = await APIController.getPlaylistById(
      resp,
      "37i9dQZEVXbNG2KDcFcKOF"
    );
    return playlist.tracks.items.filter(
      (song) => song.track.preview_url != null
    );
  }

  async function getPlaylistByGenre() {
    
    const resp = await APIController.getToken();
    const genres = await APIController.getGenres(resp);

    let id = "";
    for (const element of genres) {
      if (element.name.toLowerCase().includes(state.genre)) {
        id = element.id;
        break;
      }
    }
    const playlists = id
      ? await APIController.getPlaylistByGenre(resp, id)
      : [];
    let ranNum = Math.floor(Math.random() * 10);
    const playlist = playlists[ranNum];
    let songs = await APIController.getTrack(resp, playlist.tracks.href);
    return songs.items.filter((song) => song.track.preview_url != null);
  }
  const isKoreanWord = (input) => {
    return input.match(/[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g) ? true : false;
  }
  async function getLyrics(song) {
    try {
      const language = await APIController.getLanguage(
        song.track.artists[0],
        song.track.name
      );
      let currLanguage = language.response.song.language 

      const resp = await APIController.getLyricsID(song.track.external_ids.isrc);
      const id = await resp.message.body.track.track_id;
      const lyrRes = await APIController.getLyrics(id);
      if(isKoreanWord(lyrRes.message.body.lyrics.lyrics_body)){
        return ""
      }

      return lyrRes.message.body.lyrics.lyrics_body;
    } catch (error) {
        return ""
    }
   
  }
  async function getLyricSongs(songs){
  
    let lyrics = [];
    let lyricSongs = [];
    while (true) {
      let randomSong = songs[Math.floor(Math.random() * songs.length)];
      if (lyricSongs.includes(randomSong)) {
        continue;
      } else if (lyricSongs.length === 5) {
        break;
      }
      let currLyrics = await getLyrics(randomSong);
      if(currLyrics !== ""){
        lyrics.push(currLyrics);
        lyricSongs.push(randomSong);
      }
      if(lyrics.length > 4){
        break
      }
    }
    dispatch({ type: GET_CORRECT, payload: lyricSongs})
    dispatch({ type: SET_LYRICS, payload: lyrics });
  }
  async function getData() {
    let songs = [];
    if (state.genre.includes("all")) {
      songs = await getTokenAndPlaylist();
    } else {
      songs = await getPlaylistByGenre();
    }
    let correctSong = [];
    if(state.gameMode.includes("Lyrics")){
      getLyricSongs(songs)
      return;
    }
    while (true) {
      let randomSong = songs[Math.floor(Math.random() * songs.length)];
      if (correctSong.includes(randomSong)) {
        continue;
      } else if (correctSong.length === 5) {
        break;
      }
      correctSong.push(randomSong);
    }


    let Game = [];
    Game[0] = [correctSong[0]];
    Game[1] = [correctSong[1]];
    Game[2] = [correctSong[2]];
    Game[3] = [correctSong[3]];
    Game[4] = [correctSong[4]];

    for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 4; j++) {
        let randomSong = songs[Math.floor(Math.random() * songs.length)];
        if (!Game[i].includes(randomSong)) {
          Game[i][j] = randomSong;
        } else {
          j--;
        }
      }
      shuffleArray(Game[i]);
    }
    dispatch({ type: GET_DATA, payload: Game });
    dispatch({ type: GET_CORRECT, payload: correctSong });
  }

  function setGenre(genre) {
    dispatch({ type: SET_GENRE, payload: genre });
  }

  function setGameMode(gameMode) {
    dispatch({ type: SET_GAME, payload: gameMode });
  }

  function setTime(time) {
    dispatch({ type: SET_TIME, payload: time });
  }

  function setScore(score) {
    dispatch({ type: SET_SCORE, payload: score });
  }
  function reset() {
    dispatch({ type: RESET_STATE });
  }
  async function getLeaderBoard(){
    const data = await getGames();

    dispatch({type: SET_LEADERBOARD, payload: data })
  }

  return (
    <gameContext.Provider
      value={{
        gameMode: state.gameMode,
        score: state.score,
        gameData: state.gameData,
        corrAnswers: state.corrAnswers,
        genre: state.genre,
        time: state.time,
        lyricsArray: state.lyricsArray,
        leaderboardData: state.leaderboardData,
        getLeaderBoard,
        setGameMode,
        setGenre,
        setScore,
        setTime,
        getData,
        reset,
      }}
    >
      {props.children}
    </gameContext.Provider>
  );
}
export default GameState;
