import React from 'react'
import { useState } from 'react';


const obj = [{
    "58": {
        "id": "58",
        "name": "Mark Hill",
        "designation": "Cheif Executive Officer",
        "team": "Product",
        "manager": "",
        "img": "https://i.imgur.com/uk87y7L.jpg",
        "short": "CEO"
    },
    "59": {
        "id": "59",
        "name": "Joe Linux",
        "designation": "Cheif Technology Officer",
        "team": "Development and IT",
        "manager": "58",
        "img": "https://i.imgur.com/I8N6wle.gif",
        "short": "CTO"
    },
    "60": {
        "id": "60",
        "name": "Linda May",
        "designation": "Cheif Bussiness Officer",
        "team": "Bussiness Flow",
        "manager": "58",
        "img": "https://i.imgur.com/Id57NSW.jpg",
        "short": "CBO"
    },
    "61": {
        "id": "61",
        "name": "John Green",
        "designation": "Cheif Accounting Officer",
        "team": "Finance",
        "manager": "58",
        "img": "https://i.imgur.com/NRYrB0l.jpeg",
        "short": "CAO"
    },
    "62": {
        "id": "62",
        "name": "Ron Blomquist",
        "designation": "Cheif Information Officer",
        "team": "Development and IT",
        "manager": "59",
        "img": "https://i.imgur.com/Xdx7Ptn.jpeg",
        "short": "CIO"
    },
    "63": {
        "id": "63",
        "name": "Michael Rubin",
        "designation": "Cheif Innovative Officer",
        "team": "Development and IT",
        "manager": "59",
        "img": "https://i.imgur.com/eX7uYfG.jpeg",
        "short": "CIO"
    },
    "64": {
        "id": "64",
        "name": "Allice Lopez",
        "designation": "Cheif Communication Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/waxFbz6.jpg",
        "short": "CCO"
    },
    "65": {
        "id": "65",
        "name": "Marry Johnson",
        "designation": "Cheif Brand Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/Zi7qqQA.jpg",
        "short": "CBO"
    },
    "66": {
        "id": "66",
        "name": "Kirk Douglas",
        "designation": "Cheif Bussiness Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/0hhtbTn.jpeg",
        "short": "CBO"
    },
    "67": {
        "id": "67",
        "name": "Erica Reel",
        "designation": "Cheif Bussiness Officer",
        "team": "Bussiness Flow",
        "manager": "60",
        "img": "https://i.imgur.com/I9XFqdd.jpg",
        "short": "CBO"
    }
}];
function Project2JsonUserFilter() {
    return (
        <div>
            <h3>Project 2 : Json User Filter</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Team</th>
                        <th>Manager</th>
                        <th>Image</th>
                        <th>Short</th>
                    </tr>
                </thead>
                <tbody>
                    {obj.map(o => Object.values(o).map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                            <td>{item.team}</td>
                            <td>{item.manager}</td>
                            <td><img src={item.img} style={{ width: 50, height: 50 }} /></td>
                            <td>{item.short}</td>
                        </tr>
                    )))}
                </tbody>
            </table>
            <hr />
            <JsonEmployeeFilter />
        </div>
  )
}
const JsonEmployeeFilter = () => {
    const [team, setTeam] = useState([]);
    return (
        <>
            <h4>Filtering the Manager and their Team</h4>
            <input placeholder='Filter By Id (58 to 67)' value={team} onChange={(event) => { setTeam(event.target.value) }} />
            {console.log(team)}
            <h4>Manager Details</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Team</th>
                        <th>Manager</th>
                        <th>Image</th>
                        <th>Short</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team.length > 0 && obj.map((e) => Object.values(e).map((item) => {
                            return (
                                <>
                                    {item.id.includes(team) ? <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.team}</td>
                                        <td>{item.manager}</td>
                                        <td><img src={item.img} style={{ width: 50, height: 50 }} /></td>
                                        <td>{item.short}</td>
                                    </tr> : ""}
                                </>

                            );
                        }


                        ))
                    }

                </tbody>
            </table>
            <h4>Manager Team Member's Details</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Team</th>
                        <th>Manager</th>
                        <th>Image</th>
                        <th>Short</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        team.length > 0 && obj.map((e) => Object.values(e).map((item) => {
                            return (
                                <>
                                    {item.manager.includes(team) ? <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.team}</td>
                                        <td>{item.manager}</td>
                                        <td><img src={item.img} style={{ width: 50, height: 50 }} /></td>
                                        <td>{item.short}</td>
                                    </tr> : ""}
                                </>

                            );
                        }


                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Project2JsonUserFilter