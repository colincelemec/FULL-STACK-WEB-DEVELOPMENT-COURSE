import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function addNote(add) {
  return <Note key={add.key} title={add.title} content={add.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(addNote)}

      <Footer />
    </div>
  );
}

export default App;

