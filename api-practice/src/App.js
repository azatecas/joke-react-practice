import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Jokes from "./components/Jokes";
import Axios from "axios";

const jokes = {
  id: 1,
  type: "general",
  setup: "What do birds give out in halloween?",
  punchline: "Tweets",
};

function App() {
  const [joke, setJoke] = useState(jokes);
  const [newJoke, setNewJoke] = useState(false);

  const fetchData = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => {
        setJoke(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [newJoke]);

  return (
    <div className="App">
      <Nav />
      <Jokes joke={joke} newJoke={newJoke} setNewJoke={setNewJoke} />
    </div>
  );
}

export default App;
