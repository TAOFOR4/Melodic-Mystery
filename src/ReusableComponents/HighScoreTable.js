export default function HighScoreTable({games, gameMode}) {
  return (
    <div className="highScoreTable">
            <div style={{display:"grid", justifyContent:"center"}}>
              <div className="result_header">
                <div style={{fontSize:"2.5vw", fontStyle:"bold", fontWeight:"700", color:"#ffffff"}}>Ranking:</div>
                <div style={{marginLeft:"1vw", fontSize:"2vw", fontWeight:"300", color:"#ffffff"}}>Guess the {gameMode}</div>
              </div>
            </div>

            <div style={{paddingTop:"2vh", display:"flex", justifyContent:"center"}}>
              <table style={{width:"80%", textAlign:"center"}}>
                <thead>
                <tr style={{color:"#ffffff"}}>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
                </thead>
              
                <tbody>
                {
                    
                  games.filter(x => x.gameMode == gameMode).sort(function(a, b) { 
                    return b.score/b.time - a.score/a.time;
                }).map((game, index) => {
                  if(index > 9) return;
                  return(
    
                    <tr key = {game.username} style={{height:"50px", color:"#ffffff"}}>
                    <td>{index+1}</td>
              
                       <td>{game.username}</td>
                       <td>{Math.floor((game.score/game.time) * 100000)}</td>
                      </tr>
                )})}
                </tbody>
                </table>
            </div>
          </div>
  )
}
