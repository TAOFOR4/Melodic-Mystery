# Melodic Mystery 🎵

This project was created as part of the course <em>DH2642 Interaction Programming and the Dynamic Web</em> at Kungliga Tekniska Högskolan (KTH), Stockholm. 

## Description

The project features a music trivia game, in which the user gets to choose between four interactive game modes: "Guess the Title", "Guess the Year", "Guess the Artist" and "Fill in the Lyrics". Each game mode is playable for four different genre options "Rock", "Pop", "Hip-Hop", "R&B", as well as one mixed option "All". 

One game, e.g., "Guess the Title" - "All", consists of five rounds, where the goal of each round is the correctly identify the title of the song based on a 15 second long audio snippet. Four song alternatives are given for each round.

After five rounds, the player is given a score based on how many songs they identified correctly, as well as how quickly they answered. The top five users gets their name on the leaderboard.

## Status

Please note that for the mid-project review, only the "Guess the Title" - "All" mode is available, and will be the displayed mode regardless of what the user selected.

## Code structure

The layout below illustrates where you can find the predominant files for the mid-project review (without folders containing images etc.). 

```
└── src
    ├── context/
    │   ├── gameContext.js // Creating a context
    |   ├── gameReducer.js // Reducer file has the setter functions for the state
    │   ├── gameState.js // Application state
    ├── views/
    │   ├── aboutusView.js //About us page 
    |   ├── filllyricsView.js //Fill the Lyrics game mode
    │   ├── gamesView.js //The page where the user can select what game to play
    │   ├── gamescreenView.js //The in-game screen where the user hears songs and needs to guess on the title
    │   ├── genresView.js //The page where the user can select what genre to play on
    │   ├── homepageView.js // Homepage screen
    │   ├── loadingscreenView.js // The animation shown when loading between screens
    │   └── resultsView.js // final screen with the results of the game
    ├── presenters/
    │   ├── mainPresenter.js //Handles what screen to show during the different phases of the game
    │   ├── homepagePresenter.js // Presenter for the homepage
    |   ├── filllyricsPresenter.js // Presenter for the fill the lyrics mode
    |   ├── gamescreenPresenter.js // Presenter for playing game in each mode
    |   ├── gamesPresenter.js // Presenter for game selection
    |   ├── genrePresenter.js // Presenter for genre page
    |   ├── loadingPresenter.js // Presenter for loading page
    |   ├── playBarPresenter.js // Presenter for playbar and play button components
    |   ├── resultPresenter.js // Presenter for result page
    │   └── aboutusPresenter.js // Presenter for the about us page
    ├── ReusableComponents/
    |   ├── HighScoreTable.js //Leaderboard table
    │   ├── LoadingBar.js //The loading bar
    |   ├── LyricsSqure.js //Square box for lyrics
    │   ├── NavBar.js // Navbar Component
    │   ├── PlayBar.js // Playbar component shown in the gamescreen
    │   ├── RectangleCard.js //The rectangle card shown in the game
    │   ├── RoundedButton.js // The rounded button shown throughout the site
    │   ├── SquareCard.js // One of the square cards
    │   └── SquareGame.js // One of the square cards
    ├── App.css
    ├── App.js
    ├── firebaseModel.js 
    └── fetchPromise.js //Makes the Api call

 
```
## Installation
Before run the game, install with `npm install`

## Running the code

Navigate to the **Midterm-review-deployment** branch. Run `npm start` in order view the project in your browser at [http://localhost:3000](http://localhost:3000).
