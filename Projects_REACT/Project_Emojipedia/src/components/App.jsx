import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function addEmoji(add) {
  return (
    <Entry
      id={add.id}
      emoji={add.emoji}
      name={add.name}
      meaning={add.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(addEmoji)}
    </div>
  );
}

export default App;
