import { useState } from "react"
import "./regi.css"

const RegistrationForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const [confiomPassword, setConfiomPassword] = useState()
    const [addres, setAddress] = useState()

    const [errorUser, setErrorUser] = useState()
    const [errorEmail, setErrorEmail] = useState()

    const [errorPassword, setErrorPassword] = useState()
    const [errorConfiomPassword, setErrorConfiomPassword] = useState()
    const [fill, fillError] = useState()

    const handleClick = (e) => {
        let details=[]

       e.preventDefault()
        let Data=JSON.parse(localStorage.getItem("userDetails"))
        details=Data==null?[]:Data
        if ( !password || !username  ) {
           fillError("fill  all inputs")
        } else {
            const userDetails = {
                username: username,
                password: password,
                email: email,
                gender: gender,
                state: addres,

            }
            details=[...Data,userDetails]
            localStorage.setItem("userDetails", JSON.stringify(details))


        }




    }
    const handleUsername = (e) => {

        setUsername(e.target.value)
        if (e.target.value.length < 5 || e.target.value.match(/[0-9]/)) {
            setErrorUser("please set username minimum5 letters and enter to z")
        }
        else {
            setErrorUser("")
        }

    }
    let pass = ""
    const handlePassword = (e) => {
        setPassword(e.target.value)
        pass = e.target.value
        console.log(pass);
        if (e.target.value.match(/[@!3$<%^&*]/)) {
            setErrorPassword("")

        } else {

            setErrorPassword("please use special charecters")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            setErrorEmail("")
        } else {
            setErrorEmail("invalid mail")
        }
    }
    const handleMale = () => {
        setGender("male")
    }
    const handleFemale = () => {
        setGender("female")
    }

    const handleConfiomPassword = (e) => {
        console.log(e.target.value);
        if (password == e.target.value) {
            setErrorConfiomPassword("")
        } else {
            setErrorConfiomPassword("passwordnot matched")

        }


    }
    const handleAdd = (e) => {
        setAddress(e.target.value)
    }







    return (
        <div className="container">
            <h1>Registration form</h1>
        <form onSubmit={handleClick}>
            <label for="email">email:</label>
            <input type="email" id="email" value={email} onChange={handleEmail} /><br />
            <small style={{ color: "red" }}>{errorEmail}</small><br />
            <label for="username">username:</label>
            <input type="text" id="username" value={username} onChange={handleUsername} /><br />
            <small style={{ color: "red" }}>{errorUser}</small><br />
            <label for="password">password:</label>
            <input type="password" id="password" value={password} onChange={handlePassword} /><br />
            <small style={{ color: "red" }}>{errorPassword}</small><br />
            <label for="confiomPassword">confriompassword:</label>
            <input type="password" id="confiomPassword" value={confiomPassword} onChange={handleConfiomPassword} /><br />
            <small style={{ color: "red" }}>{errorConfiomPassword}</small><br />
            <label for="gender" >gender:</label>
            <br></br>
            <label for="male" >male</label>
            <input type="radio" name="gender" id="male" value={gender} onChange={handleMale} />
            <br />
            <label for="female">female</label>
            <input type="radio" id="female" name="gender" value={gender} onChange={handleFemale} /><br />
            <select value={addres} onChange={handleAdd}>
                <option>select state</option>
                <option >telangana</option>
                <option>andrapradhesh</option>
                <option >karnataka</option>
                <option>tamilnadu</option>
                <option >keral</option>
                <option>maharshta</option>
                <option >odisa</option>
                <option>goa</option>
            </select>
            <input type="submit"/><br/>
            <small style={{ color: "red" }}>{fill}</small><br />
            
        </form>
        </div>
    )

}
export default RegistrationForm