const { useState } = require("react")

function UseState1(){
const [count,setCount]=useState(0)
const handleClick=()=>{
    setInterval(()=>{
        setCount((previous)=>previous+1)
    },1000)
}
const handleEnd = () => {
    clearInterval(handleClick);
    setCount(0)
};

return(
<>
 <h1>{count}</h1>
<button onClick={handleClick}>start </button>
<button onClick={handleEnd}>reset</button>
</>


)

}
export default UseState1