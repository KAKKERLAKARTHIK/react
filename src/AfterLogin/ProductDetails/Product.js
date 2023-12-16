import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

export default function Product() {
    const id=useParams()
    const [data,setData]=useState({})
     console.log(id.id);
    const handleClick=()=>{
    axios.get(`https://fakestoreapi.com/products/${id.id}`)
    .then((res)=>{
        setData(res.data)
        
    })
    
    }
    console.log(data);
    console.log();
  return (
     <>
     <Navbar/>
<button onClick={handleClick}>click</button>
<h1>{data.title}</h1>
<img src={data.image} width={200}height={200}/>
<h2>{data.description}</h2>
<h3>{data.price}</h3>


      
     </>
  )
}
