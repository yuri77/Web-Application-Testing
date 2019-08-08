import React, { useState } from "react";
import Display from "./Display";

function Dashboard() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);

  const handleStrike = () => {};
  const handleBall = ball => {
    if (ball < 4) {
      setBall(ball + 1);
    } else if (ball === 4) {
      setBall((ball = 0));
    }
    console.log(ball);
  };
  const handleFoul = () => {};
  const handleHit = () => {};

  return (
    <>
      <button>Strike</button>
      <button onClick={() => handleBall(ball)}>ball</button>
      <button>foul</button>
      <button>hit</button>
      <Display ball={ball} />
    </>
  );
}

export default Dashboard;
