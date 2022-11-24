import React, { useState } from "react";
import allCountryScores from "./allCountryScores";
import PlayerScore from "./PlayerScore";

function HighScoreTable() {
  const [order, setOrder] = useState("ascending");

  function ChangeOrder() {
    return order === "ascending"
      ? setOrder("descending")
      : setOrder("ascending");
  }

  return (
    <div>
      <div className="heading">
        <h1>High Scores per Country</h1>
        <div className="button">
          <button onClick={ChangeOrder}>Reorder scores</button>
        </div>
      </div>
      {allCountryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, index) => {
          return (
            <div className="score-card">
              <h2>HIGH SCORE: {country.name}</h2>
              <PlayerScore key={index} scores={country.scores} order={order} />
            </div>
          );
        })}
    </div>
  );
}

export default HighScoreTable;