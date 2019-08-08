import React from "react";

function Display({ ball, strike }) {
  return (
    <section className="display">
      <div>strike:{strike}</div>
      <div>ball:{ball}</div>
    </section>
  );
}

export default Display;
