import React, { useState } from 'react'

function Project1CRUDApp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState([{ name: "test", email: "test@gmail.com", phone: "1234567890" }]);
    const addUser = () => {
        console.log(name, email, phone);
        setUser([...user, { name: name, email: email, phone: phone }]);
        setName("");
        setEmail("");
        setPhone("");

    }
    const deleteAll = () => {
        setUser([""]);
    }
    const individualDelete = (name) => {
        setUser(user.filter(e => e.name != name));
    }
    return (
        <div>
            <h3>Project 1: CRUD App</h3>
            <input type="text" placeholder='Enter your name' value={name} onChange={(event) => setName(event.target.value)} />
            <input type="email" placeholder='Enter your Email' value={email} onChange={(event) => setEmail(event.target.value)} />
            <input type="number" placeholder='Enter your Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)} />
            <button onClick={addUser}>Add User</button>
            <button onClick={deleteAll}>Delete All User</button>
            <div>
                <table>
                    <thead><tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Cancel</th>
                    </tr></thead>
                    {user.map((e) => {
                        return (

                            <tbody>
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                    <td><button onClick={() => individualDelete(e.name)}>X</button></td>
                                    </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default Project1CRUDApp