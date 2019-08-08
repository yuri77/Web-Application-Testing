import React from "react";

function Display({ ball }) {
  return (
    <section className="display">
      <div>ball:{ball}</div>
      {/* <div>strike:{props.strike}</div>
      <div>foul:{props.foul}</div>
      <div>hit:{props.hit}</div> */}
    </section>
  );
}

export default Display;
