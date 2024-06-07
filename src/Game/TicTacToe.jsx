import React, { useState } from "react";
import "../Game/tictactoe.css";
import circle_icon from "../assets/circle.jpg";
import cross_icon from "../assets/cross.png";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null);
  const [lock, setLock] = useState(false);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  };

  const toggle = (num) => {
    if (lock || board[num] !== "" || winner) {
      return;
    }

    const newBoard = board.slice();
    newBoard[num] = count % 2 === 0 ? "x" : "o";
    setBoard(newBoard);
    setCount(count + 1);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setLock(true);
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setWinner(null);
    setLock(false);
  };

  const renderBoxes = (rowIndex) => {
    return [0, 1, 2].map((colIndex) => {
      const boxIndex = rowIndex * 3 + colIndex;
      return (
        <div className="boxes" key={boxIndex} onClick={() => toggle(boxIndex)}>
          {board[boxIndex] === "x" && (
            <img src={cross_icon} alt="X" className="box-img" />
          )}
          {board[boxIndex] === "o" && (
            <img src={circle_icon} alt="O" className="box-img" />
          )}
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
        {[0, 1, 2].map((rowIndex) => (
          <div className={`row${rowIndex + 1}`} key={rowIndex}>
            {renderBoxes(rowIndex)}
          </div>
        ))}
      </div>
      {winner && (
        <h2 className="winner-message">
          Congratulations! {winner.toUpperCase()} wins!
        </h2>
      )}
      <button className="reset" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
}

















// import React, { useState } from "react";
// import ".././Game/tictactoe.css"
// import circle_icon from "../assets/circle.jpg"
// import cross_icon from "../assets/cross.png"

// let data=["","","","","","","","","",]

// export default function Game() {

//   let [count,setCount]=useState(0)
//   let [lock,setLock]=useState(false)

//   const toggle=(w,num)=>{
//     if(lock){
//       return 0
//     }
//     if(count%2===0)
//     {
//       e.target.innerHTML = `<img src="${cross_icon}">`;
//       data[num]="x"
//       setCount(++count)
//     }
//     else{
//       e.target.innerHTML=`<img src="${circle_icon}>`;
//       data[num]="o"
//       setCount(++count)
//     }
//   }
//   return (
//     <div className="container">
//       <h1 className="title">Tic-Tac-Toe</h1>
//       <div className="board">
//             <div className="row1">
//               <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
//               <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
//               <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
//             </div>
//             <div className="row2">
//               <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
//               <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
//               <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
//             </div>
//             <div className="row3">
//               <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
//               <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
//               <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
//             </div>
//       </div>
//       <button className="reset">Reset</button>
//     </div>
//   );
// }
