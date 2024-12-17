import { useState } from "react";
import "./App.css";
import Board from "./Components/Board.jsx";
import Dialog from "./Components/Dialog.jsx";
function App() {
  return (
    <>
      <Dialog />
      <Board />
    </>
  );
}

export default App;
