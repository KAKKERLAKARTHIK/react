import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import "./home.css"

export default function Homepage() {
const [data,setData]=useState([])
console.log(data);
const handleClick=()=>{
    axios.get("https://fakestoreapi.com/products")
.then((res)=>{
     setData(res.data)
})}



  return (
    <>
    <Navbar/>
     <button onClick={handleClick}>click to see all items</button>
     <div className='grid'>
     {
 data.map((val)=>{
    return(
        <React.Fragment key={val.id}>

<div className='main'>
<img src={val.image} width={100} height={100}/>

<h3>{val.title}</h3>
<div className='button'>
<button><Link to={`/ProductDetails/${val.id}`}>view details</Link></button>
</div>
 </div>


        </React.Fragment>
        
    )
 })

     }
     </div>
    </>
  )
}
