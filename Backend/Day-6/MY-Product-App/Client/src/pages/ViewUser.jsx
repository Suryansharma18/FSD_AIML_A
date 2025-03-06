import React from 'react'
import {useState,useEffect} from 'react'; 
const ViewUser = () => {
    const [users,setUsers] = useState([]);
    const fetchuser=async()=>{
       const resdata = await fetch("http://localhost:3002/users",{
        method:"GET"
       });
       const userjson  = await resdata.json();
       setUsers(userjson);
    }
    useEffect(()=>{
        fetchuser();
    },[])
    let count=0;
  return (
    <div>
      <h1>List of users</h1>
      <table>
        <thead>
            <tr>
                <th>Sr.No.</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user=>(
                    <tr>
                        <td>{++count}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button>Edit</button>
                        <button>Delete</button>
                        </td>
                    </tr>

                ))
            }
        </tbody>
      </table>
      
    </div>
  )
}

export default ViewUser
