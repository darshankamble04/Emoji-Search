import logo from './logo.svg';
import './App.css';
import { useState } from "react"

let arr = ["😃", "🥺", "✨", "❤️", "🔥", "🥰", "😂", "😊"]
let emojiDic = {
  "😃": " Smiley",
  "🐻": " Animal",
  "🍔": " Food",
  "⚽": " Activity ",
  "🌇": " Travel",
  "💡": " idea",
  "🔣": " Symbols",
  "🎌": " Flags",
  "❤️": "Red Heart",
  "🥺": "Pleading Face",
  "✨": "Sparkles",
  "❤️🔥": "Heart on Fire",
  "🔥": "Fire",
  "🤏": "Pinching Hand",
  "🥰": "Smiling Face with Hearts",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling Face with Smiling Eyes"
}

function App() {

  let [x, func] = useState("")
  function keyVal(e) {
    let inputVal = e.target.value;
    func(emojiDic[inputVal])
    console.log(x)
  }

  function clickedKey(e1) {
    console.log("clicked", e1)
    func(emojiDic[e1])
  }

  return (
    <div className="App">
      <img style={{ display: "block", margin: "30px auto auto auto", width: "20vw" }} src="./emoji.png" alt="" />
      <input className="input" onChange={keyVal} />
      <h2 style={{ height: "30px" }} > {x}</h2>


      <ul>
        {
          arr.map((e1) => {
            console.log(e1)
            return <span key="emoji" style={{ padding: "8px", cursor: "pointer" }} onClick={() => clickedKey(e1)}> {e1} </span>
          })
        }
      </ul>
    </div>
  );
}

// thing that i notice
// class --> className
// 
export default App;
