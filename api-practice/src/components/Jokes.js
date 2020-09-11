import React, { useState } from "react";

function Jokes({ joke, newJoke, setNewJoke }) {
  const [toggle, setToggle] = useState(false);

  const { type, id, setup, punchline } = joke;
  const togglePunchline = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const toggleJoke = () => {
    setNewJoke(!newJoke);
    setToggle(false);
  };
  return (
    <>
      <h1>{setup}</h1>
      {toggle ? <h3>{punchline}</h3> : null}
      <button
        onClick={() => {
          togglePunchline();
        }}
      >
        Reveal Punchline
      </button>
      <button
        onClick={() => {
          toggleJoke();
        }}
      >
        next
      </button>
    </>
  );
}

export default Jokes;
