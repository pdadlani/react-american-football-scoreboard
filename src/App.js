//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import BottomRow from "./BottomRow";
import Buttons from "./Button";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard home ={scoreHome} away={scoreAway} />
        <BottomRow />
      </section>
      <Buttons homeSet={setScoreHome} home={scoreHome} awaySet = {setScoreAway} away={scoreAway}/>
    </div>
  );
}

export default App;
