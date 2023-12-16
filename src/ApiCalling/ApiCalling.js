import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"

function ApiCallinng(){
    const [item,setItem]=useState([])
useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
.then((response )=>{
    
    setItem(response.data)
}).catch((err)=>{
    alert(err.message)
})
})

console.log(item);
    return(
        <>
        {/* <button onClick={handleClick}>see</button> */}
        {item.map((val)=>{
            return(
<React.Fragment key={val.id}>
<div>{val.title}</div>
<img src={val.image}width={100}height={100}></img>



</React.Fragment>


            )
        })}
        </>
    )
}
export default ApiCallinng