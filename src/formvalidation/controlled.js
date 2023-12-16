import axios from "axios"
import { useState } from "react"

const Controlled=()=>{
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const [errorMessage,setErorMessage]=useState("")
const [errorMessage1,setErorMessage1]=useState("")

const handleClick=(e)=>{
    e.preventDefault()
const userDetails={
    username:username,
    password:password
}
axios.post("https://dummyjson.com/auth/login",userDetails
,{ headers: { 'Content-Type': 'application/json'}})
.then(res=>{
if(res.data.message){
alert(res.data.message)
}else{
    alert("login succesfully")
}
})

}
const handleUsername=(e)=>{

setUsername(e.target.value)
if(e.target.value.length<5){
setErorMessage("enter minimun 5 letters")
}else{
    setErorMessage("")
}

}

const handlePassword=(e)=>{
    setPassword(e.target.value)
    if(e.target.value.length<5){
        setErorMessage1("enter minimun 5 letters")
    }else{
        setErorMessage1("")
    }

}
return(
    
    <form onSubmit={handleClick}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={username} onChange={handleUsername} />
      <small id="emailHelp" style={{color:"red"}}  >{errorMessage}</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  value={password} onChange={handlePassword} />
      <p style={{color:"red"}}>{errorMessage1}</p>
    </div>
     
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
)




}
export default Controlled

// const handleClick=(e)=>{
//     e.preventDefault()
//     const userDetails={
//         username:username,
//         password:password
//     }
//     fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userDetails )
//       })
//       .then(res => res.json())
//       .then(res=>{
//         if(res.message){
//            alert(res.message)
//         }else{
//           alert("login sucessufully")
//         }
//       })
    
    
    
//     }
//     const handleUsername=(e)=>{
//         setUsername(e.target.value)
//     if(e.target.value.length<5){
//         setErorMessage("please enter minmun 5 letters")
//     }else{
//         setErorMessage("")
//     }
//     }
//     const handlePassword=(e)=>{
    
//     setPassword(e.target.value)
    
//     if(e.target.value.length<5){
//         setErorMessage1("please enter minmun 5 letters")
//     }else{
//         setErorMessage1("")
//     }
    
    
//     }
    