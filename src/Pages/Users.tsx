
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Users = () => {
  const userData = [
    { id: 1, name: "John Doe", email: "m@example.com" },
    { id: 2, name: "Jane Doe", email: "j@example.com" },
    { id: 3, name: "Bob Smith", email: "b@example.com" },
    { id: 4, name: "Alice Johnson", email: "a@example.com" },
    { id: 5, name: "Charlie Brown", email: "c@example.com" },
  ]
 

  
  return (
    <>
    <div>
      <h1>Users List Page</h1>
      {userData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          <Link to={`/users/${item.id}`}>{item.id}</Link>
        </div>
      ))}
    </div>
    </>
  )

}

export default Users