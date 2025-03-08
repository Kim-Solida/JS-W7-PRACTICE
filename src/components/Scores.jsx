import React from "react";
import "../index.css";

const Scores = ({ courseName, courseResults }) => {
  const getScoreClass = (score) => (score < 50 ? "warning" : "");

  const scores = courseResults.map((result) => result.score);
  const average = (scores.reduce((acc, score) => acc + score, 0) / scores.length).toFixed(2);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="scores">
      <h1>{courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map(({ firstName, lastName, score }, index) => (
            <tr key={index}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td className={getScoreClass(score)}>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="stats-panel">
        <p><strong>Average</strong> <div></div>{average}</p>
        <p><strong>Min</strong> <div></div>{min}</p>
        <p><strong>Max</strong> <div></div>{max}</p>
      </div>
    </div>
  );
};

export default Scores;