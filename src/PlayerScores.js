import React from "react";

function PlayerScore(props) {
  const orderedScores = [...props.scores].sort((a, b) => {
    return props.order === "ascending" ? a.s - b.s : b.s - a.s;
  });

  return (
    <div className="player-scores">
      {orderedScores.map((score) => {
        return (
          <div className="player-score">
            <div className="player">{score.n}</div>
            <div className="score">{score.s}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerScore;