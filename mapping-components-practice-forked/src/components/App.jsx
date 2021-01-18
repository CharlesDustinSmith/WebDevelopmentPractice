import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../emojipedia";

function emojiDictionary(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(emojiDictionary)}
    </div>
  );
}

export default App;
