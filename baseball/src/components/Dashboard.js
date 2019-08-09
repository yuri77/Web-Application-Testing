import React, { useState } from "react";
import Display from "./Display";

function Dashboard() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const handleStrike = strike => {
    if (strike < 2 && ball < 4) {
      setStrike(strike + 1);
    } else if (strike === 2) {
      setStrike(0);
      setBall(0);

      console.log(strike);
    }
  };
  const handleBall = ball => {
    if (ball < 3 && strike < 3) {
      setBall(ball + 1);
    } else if (ball === 3) {
      setBall(0);
      setStrike(0);
    }
    console.log(ball);
  };
  const handleFoul = () => {
    if (strike < 1) {
      setStrike(strike + 1);
    } else if (strike === 1) {
      setStrike(0);
    } else if (strike <= 2) {
      setStrike(strike);
    } else {
      setStrike(0);
    }
  };
  const handleHit = () => {
    setStrike(0);
    setBall(0);
  };

  return (
    <>
      <button onClick={() => handleStrike(strike)}>Strike</button>
      <button onClick={() => handleBall(ball)}>ball</button>
      <button onClick={() => handleFoul()}>foul</button>
      <button onClick={() => handleHit()}>hit</button>
      <Display ball={ball} strike={strike} />
    </>
  );
}

export default Dashboard;
