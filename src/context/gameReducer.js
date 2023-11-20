const SET_GAME = "SET_GAME";
const SET_GENRE = "SET_GENRE";
const GET_DATA = "GET_DATA";
const GET_CORRECT = "GET_CORRECT";
const SET_SCORE = "SET_SCORE";
const SET_TIME = "SET_TIME";
const SET_LYRICS = "SET_LYRICS";
const RESET_STATE = "RESET_STATE";
const SET_LEADERBOARD = "SET_LEADERBOARD";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){
        case SET_GAME:
            return { ...state, gameMode: action.payload };
        case SET_GENRE:
            return { ...state, genre: action.payload };
        case GET_DATA:
            return { ...state, gameData: [ ...action.payload ]};
        case GET_CORRECT:
            return { ...state, corrAnswers: [ ...action.payload ]};
        case SET_SCORE:
            return { ...state, score: action.payload }
        case SET_TIME:
            return { ...state, time: action.payload }
        case SET_LYRICS:
            return { ...state, lyricsArray: [ ...action.payload ]};
        case SET_LEADERBOARD:
            return { ...state, leaderboardData: [ ...action.payload ]};
        case RESET_STATE:
			return {
				...state,
                gameMode: undefined,
                score: 0,
                gameData: [],
                corrAnswers: [],
                lyricsArray: [],
                genre: undefined,
                time: 0,
			};
        default:
            return state;
    }
}

