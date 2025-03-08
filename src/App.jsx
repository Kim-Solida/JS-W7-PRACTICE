import React from "react";
import Scores from "./components/Scores";
import { STUDENT_RESULTS } from "./data";
import pnLogo from "./assets/pn-logo.png";
import "./index.css";

function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students Results for PNC Batch 2024</h1>
      </header>

      <main className="scores-container">
        {Object.entries(STUDENT_RESULTS).map(([subject, scores]) => (
          <Scores key={subject} courseName={subject} courseResults={scores} />
        ))}
      </main>
    </>
  );
}

export default App;
