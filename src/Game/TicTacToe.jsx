import React from "react";
import ".././Game/tictactoe.css"
import circle from "../assets/circle.jpg"
import cross from "../assets/cross.png"

export default function Game() {
  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
            
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}
