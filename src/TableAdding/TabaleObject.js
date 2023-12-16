import { useState } from "react"
import "./table.css"
const TableObject=()=>{
const [data,setData]=useState([])
const [name,updateName]=useState("")
const [salary,updateSalary]=useState("")
const [role,updaterole]=useState()


const employeDetails=(e)=>{
    e.preventDefault()
const details={
    employename:name,
    employerole:role,
    employesalary:salary
}
const data1=[...data,details]
setData(data1)
 
console.log(data);
}

const handlename=(e)=>{
updateName(e.target.value)
}
const handleRole=(e)=>{
    updaterole(e.target.value)
}
const handleSalry=(e)=>{
    updateSalary(e.target.value)
}



return(
    <>
    <form onSubmit={employeDetails}>
     employename:<input type="text" value={name} onChange={handlename}/><br/>
   employerole <input type="text" value={role } onChange={handleRole}/><br/>
    employesalary <input type="number" value={salary}onChange={handleSalry}/><br/>
     <input type="submit"/>
  </form>

  <table style={{border:"1px solid red",borderCollapse:"collapse" }}>
      <thead>
        <tr>
          <th >Employee Name</th>
          <th>Employee Role</th>
          <th>Employee Salary</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, index) => (
          <tr key={index}>
            <td>{val.employename}</td>
            <td>{val.employerole}</td>
            <td>{val.employesalary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  
)
}
export default TableObject