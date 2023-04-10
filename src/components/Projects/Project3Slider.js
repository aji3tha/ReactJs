import React from 'react'
import { useEffect,useState } from 'react'

function Project3Slider() {
    const [users,setUsers]=useState([{id:"",name:"",username:"",email:"",address:{street:"",suite:"",city:"",geo:{lat:"",lng:""}}}]);
    const [index,setIndex]=useState(0);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res=>setUsers(res))
    }, [])
    useEffect(()=>{
        const interval =setInterval(()=>{
            if (index >= users.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        },1000)
        return () => clearInterval(interval);
        
    },[index,users])
    const previousSlider=()=>{
        if(index<=0){
            setIndex(users.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }
    const nextSlider=()=>{
        if (index >= users.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    const {id,name,username,email,address}=users[index];

  return (
    <div>
        <h3>Project 3 : Slider</h3>
        <div style={{border: '2px dotted red',width:300}} className="card">
            <ul>
                <li>ID: {id}</li>
                <li>Name: {name}</li>
                <li>User Name: {username}</li>
                <li>Email: {email}</li>
                <li>Address:</li>
                <ul>
                <li>Street: {address.street}</li>
                <li>ZipCode: {address.zipcode}</li>
                <li>Latitude: {address.geo.lat}</li>
                </ul>
                
            </ul>
        </div>
        <button onClick={previousSlider}>{"<"}</button>
        <button onClick={nextSlider}>{">"}</button>
    </div>
  )
}

export default Project3Slider
