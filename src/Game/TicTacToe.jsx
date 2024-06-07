import React, { useState } from "react";
import ".././Game/tictactoe.css";
import circle_icon from "../assets/circle.jpg";
import cross_icon from "../assets/cross.png";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (num) => {
    if (lock || board[num] !== "") {
      return;
    }

    const newBoard = board.slice();
    if (count % 2 === 0) {
      newBoard[num] = "x";
    } else {
      newBoard[num] = "o";
    }

    setBoard(newBoard);
    setCount(count + 1);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setLock(false);
  };

  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={() => toggle(0)}>
            {board[0] === "x" && <img src={cross_icon} alt="X" />}
            {board[0] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" onClick={() => toggle(1)}>
            {board[1] === "x" && <img src={cross_icon} alt="X" />}
            {board[1] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" onClick={() => toggle(2)}>
            {board[2] === "x" && <img src={cross_icon} alt="X" />}
            {board[2] === "o" && <img src={circle_icon} alt="O" />}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={() => toggle(3)}>
            {board[3] === "x" && <img src={cross_icon} alt="X" />}
            {board[3] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" onClick={() => toggle(4)}>
            {board[4] === "x" && <img src={cross_icon} alt="X" />}
            {board[4] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" onClick={() => toggle(5)}>
            {board[5] === "x" && <img src={cross_icon} alt="X" />}
            {board[5] === "o" && <img src={circle_icon} alt="O" />}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={() => toggle(6)}>
            {board[6] === "x" && <img src={cross_icon} alt="X" />}
            {board[6] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" onClick={() => toggle(7)}>
            {board[7] === "x" && <img src={cross_icon} alt="X" />}
            {board[7] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" onClick={() => toggle(8)}>
            {board[8] === "x" && <img src={cross_icon} alt="X" />}
            {board[8] === "o" && <img src={circle_icon} alt="O" />}
          </div>
        </div>
      </div>
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
