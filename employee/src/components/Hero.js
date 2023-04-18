import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from '../data';
import Button from 'react-bootstrap/Button';
import { json, useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

function Hero() {
  let navigate = useNavigate()
  // delet
  const Deletefunction = (id) => {

    let index = employee.map(item => item.Id).indexOf(id)


    employee.splice(index, 1)

    navigate('/')

  }
  // edit
  const EditMethod=(id,name,age,desig,salary)=>{
    localStorage.setItem("id",JSON.stringify(id))
    localStorage.setItem("name",name)
    localStorage.setItem("age",JSON.stringify(age))
    localStorage.setItem("desig",desig)
    localStorage.setItem("salary",JSON.stringify(salary))

  }

  return (
    <>
      <h1 className='p-2 m-5' style={{ textAlign: "center" }}>Employee Details</h1>
      <p className='p-2 w-75 fs-4' style={{ marginLeft: "15%" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, vel error facere, eaque quis consequatur aspernatur reprehenderit fugit quaerat sunt asperiores tempore, ab voluptas. Dignissimos cumque saepe velit unde sint.</p>
      <Link to='/Add'>
        <Button className='mb-5' style={{ marginLeft: "40%" }} variant="success">Add New Employee<i style={{ marginLeft: "6px" }} class="fa-solid fa-user"></i></Button>

      </Link>   
       <Table striped bordered hover className='p-2  w-75 text-center fs-5' style={{ marginLeft: "15%" }} >
        <thead p>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employee && employee.length > 0 ?
              employee.map(item =>
                <tr>
                  <td>{item.Id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.desig}</td>
                  <td>{item.salary}</td>
                  <td>
<Link to='/Edit'>
                      <Button onClick={()=>EditMethod(item.Id,item.name,item.age,item.desig,item.salary)} variant="info" className='me-3  w-20' style={{ width: "70px" }}><i class="fa-solid fa-user-pen"></i></Button>
  
</Link>                    <Button onClick={() => Deletefunction(item.Id)} variant="danger" style={{ width: "70px" }}><i class="fa-sharp fa-solid fa-trash"></i></Button>
                  </td>
                </tr>
              )

              : 'no table data'


          }

        </tbody>
      </Table>
    </>
  )
}

export default Hero