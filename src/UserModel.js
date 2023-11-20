class UserModel {
    constructor (score=0 , username="Guest"){
        this.currentGame = undefined;
        this.currentScore = score;
        this.currentUsername = username;
        this.currentGenre = undefined;
        this.observercbs = [];
        this.correctAnswers = 0;
        this.currentTime = 0;
    }
}

export default UserModel;





