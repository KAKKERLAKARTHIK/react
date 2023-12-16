
import { useState } from "react";
import "./circle.css";

function Circle() {
  const [colors, setColors] = useState([])

  const click1 = () => {
    setColors([...colors, "white"])
  }
 const clickColor=(i)=>{
let update=[...colors]
update[i]="blue"
console.log(update);
setColors(update)
 }
  return (
    <>
      {colors.map((color, ind) => (
        <div
          key={ind}
          className="circle"
          style={{ backgroundColor: color }}
          onClick={() => {
            clickColor(ind)
          }}
        ></div>
      ))}
      <button onClick={click1}>click</button>
    </>
  )
}

export default Circle
