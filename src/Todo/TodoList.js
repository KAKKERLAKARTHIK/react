import { useState } from "react"


const TodoList=()=>{
const [list,setList]=useState([])
const [input,setInput]=useState("")
const handleSubmit=(e)=>{
e.preventDefault()
  setList([...list,input])
 
setInput("")
}
const InputHandle=(e)=>{
setInput(()=>e.target.value)
}

const handleRemove=()=>{
    setList([])
}

const handleitem =(ind)=>{

    const newlist = list.filter((l,i)=> i!=ind)

    setList(newlist)
}
const updateItem=(ind)=>{
const newData= prompt("updtate todo")

if(newData !== null){

  const  newList = list.map((item,i)=>{

 return   i==ind ? newData : item

   
  })
  setList(newList)
  
}

}

return(

 <>
<form onSubmit={handleSubmit}>
<input type="text" value={input} onChange={InputHandle}/>
 <input type="submit"/>
 

</form>
<button onClick={handleRemove}>removeall</button>
 
 {list.map((element,ind)=>{
    return(
       <>
        <ul key={ind}>
            <li>{element}{ind+1}</li>
        </ul>
        
       
       <button onClick={()=>handleitem(ind)}>item remove</button>
       <button onClick={()=>updateItem(ind)}>update todo</button>

       </>
    )
 })

 }
 
 
 
 
 
 
 
 </>

 



)






}
export default TodoList