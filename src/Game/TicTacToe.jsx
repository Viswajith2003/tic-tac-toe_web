import React from "react";
import ".././Game/tictactoe.css"
import circle from "../assets/circle.jpg"
import cross from "../assets/cross.png"

export default function Game() {
  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
            <div className="row1">
              <div className="boxes"></div>
              <div className="boxes"></div>
              <div className="boxes"></div>
            </div>
            <div className="row2">
              <div className="boxes"></div>
              <div className="boxes"></div>
              <div className="boxes"></div>
            </div>
            <div className="row3">
              <div className="boxes"></div>
              <div className="boxes"></div>
              <div className="boxes"></div>
            </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
}
