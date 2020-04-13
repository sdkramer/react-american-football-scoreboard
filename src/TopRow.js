import React, { useState} from "react";

const TopRow = () => {


  const [homeScore, setHomeScore] = useState(0);

  const [awayScore, setAwayScore] = useState(0);

  const homeScoreChangerTd = (event) => {
    setHomeScore(homeScore + 7);
  };

  const homeScoreChangerFg = (event) => {
    setHomeScore(homeScore + 3);
  };

  const awayScoreChangerTd = (event) => {
    setAwayScore(awayScore + 7);
  };

  const awayScoreChangerFg = (event) => {
    setAwayScore(awayScore + 3);
  };


return (
  <div className="topRow">
  <div className="home">
    <h2 className="home__name">Lions</h2>

    {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
    <div className="home__score">{homeScore}</div>
  </div>
  <div className="timer">00:03</div>
  <div className="away">
    <h2 className="away__name">Tigers</h2>
    <div className="away__score">{awayScore}</div>
  </div>
</div>


);


};

export default TopRow;