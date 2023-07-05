import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Home_Page() {

  const [users, setUsers] = useState([])
  // const {id} = useParams()

  useEffect(() => {
    loadUsers()
  }, []);
  //passing empty array to beacuase it will run infinite time so using epty array it will run only when the page is loaded.

  //TO load the users
  //JavaScript uses execute the line by line so we use async() or await()
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/users");
    setUsers(result.data);
  }
 
  const deleteUser = async(id)=>{
    await axios.delete('http://localhost:8080/api/v1/user/' + id)
    loadUsers()
  }

  return (

    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
                <td>
                  <Link className="btn btn-primary mx-1" 
                  to={'/viewUser/'+user.id}>View</Link>
                  <Link className="btn btn-outline-primary mx-1"
                    to={'/EditUser/'+user.id}>Edit</Link>
                  <button className="btn btn-danger mx-1" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
