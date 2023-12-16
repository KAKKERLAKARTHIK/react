import { createRef, useState } from "react";
 
const Uncontrolled=()=>{
  const username=createRef()
const password=createRef()
const [errorMessage,setErorMessage]=useState()
const handleClick=(e)=>{
e.preventDefault()
  const userDetails={
    username:username.current.value,
    password:password.current.value
  }
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userDetails )
  })
  .then(res => res.json())
  .then(res=>{
    if(res.message){
      setErorMessage(res.message)
    }else{
      alert("login sucessufully")
    }
  });
}
    return (
   
    
                <form onSubmit={handleClick}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  ref={username}/>
                    <small id="emailHelp" style={{color:"red!important"}} className="form-text text-muted">{errorMessage}</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={password} />
                  </div>
                   
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              );
            }
            export default Uncontrolled
          
      
