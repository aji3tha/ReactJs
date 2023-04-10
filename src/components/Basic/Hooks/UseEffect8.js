import React from 'react'
import { useState,useEffect } from 'react'
// used to fetch data and setting timeout

function UseEffect8() {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(res =>setUser(res))
    }
    )
  return (
    <div>
        <h3>Class 8 : Use Effect</h3>
        <h4>Fetching Data by Use Effect</h4>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {user.map((ud)=>{
                    return(
                        <tr key={ud.id}>
                            <td>{ud.id}</td>
                            <td>{ud.name}</td>
                            <td>{ud.username}</td>
                            <td>{ud.email}</td>
                            <td>
                            <ul style={{listStyle:"none",color:"white",textAlign:"left"}}>
                                <li>{ud.address.street},</li>
                                <li>{ud.address.suite},</li>
                                <li>{ud.address.city},</li>
                                <li>{ud.address.zipcode},</li>
                                <li>{ud.address.geo.lat},</li>
                                <li>{ud.address.geo.lng}.</li>
                                
                            </ul>
                            </td>
                            <td>{ud.phone}</td>
                            <td>{ud.website}</td>
                            <td><ul style={{listStyle:"none",color:"white",textAlign:"left"}}>
                                <li>{ud.company.name}</li>
                                <li>{ud.company.catchPhrase}</li>
                                <li>{ud.company.bs}</li>
                                </ul></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default UseEffect8