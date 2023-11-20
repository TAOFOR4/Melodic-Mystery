import { useState, useEffect } from "react";

export default function LyricsSquare({setCorrectAnswer, lyrics}) {
  const [lines, setLines] = useState([]);
 
  useEffect(() => {
    createLines();
  }, [lyrics]);

  function createLines() {

    let currLines = lyrics.split("\n");
    let newLines = [];

    if (currLines[currLines.length - 1] === "...") {
      newLines[0] = currLines[currLines.length - 4];
      newLines[1] = currLines[currLines.length - 3];
      if (currLines[currLines.length - 2].split(" ").length > 4) {
        let line = currLines[currLines.length - 2].split(" ");
        setCorrectAnswer(
          line[line.length - 3]  +  " " + line[line.length - 2] + " " + line[line.length - 1]
        );
        newLines[2] =
          currLines[currLines.length - 2]
            .split(" ")
            .slice(0, line.length - 3)
            .join(" ") + " __ __ __";
      } else {
        setCorrectAnswer(currLines[currLines.length - 2]);
        newLines[2] = "__ __ __";
      }
    } else {
      newLines[0] = currLines[currLines.length - 3];
      newLines[1] = currLines[currLines.length - 2];
      if (currLines[currLines.length - 1].split(" ").length > 4) {
        let line = currLines[currLines.length - 1].split(" ");
        setCorrectAnswer(
          line[line.length - 3] + " "  + line[line.length - 2] + " " + line[line.length - 1]
        );
        newLines[2] =
          currLines[currLines.length - 1]
            .split(" ")
            .slice(0, line.length - 3)
            .join(" ") + " __ __ __";
      } else {
        setCorrectAnswer(currLines[currLines.length - 1]);
        newLines[2] = "__ __ __";
      }
      
    }
    if(!newLines[0])newLines[0] = "";

    setLines(newLines);
  }
  
  return (
    <span className="square_lyrics">
      {lines.map((line, id) => {
        return <div className="lyricsText" key={line}>{line + "\n"}</div>;
      })}
    </span>
  );
}
