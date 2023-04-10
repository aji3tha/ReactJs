import React from 'react'
import { useState } from 'react'

function UseState7() {
  return (
    <div>
        <h2>Hooks in react</h2>
        <h3>Class 7 : UseState</h3>
        <h4>Counter</h4>
        <UseStateCounter />
        <hr />
        <h4>Toggle</h4>
        <UseStateToggle />
        <hr />
        <h4>Input Box</h4>
        <UseStateInput />
    </div>
  )
}

const UseStateCounter=()=>{
    const [useCounter,setCounter]=useState(0);
return(
    <>
    <h3 style={{width:100,textAlign:'center'}}>{useCounter}</h3>
    <button onClick={()=>{setCounter(useCounter+1)}}>+</button>
    <button onClick={()=>{setCounter(useCounter-1)}}>-</button>
    <button onClick={()=>{setCounter(0)}}>Clear</button>
    </>
)
}
const UseStateToggle=()=>{
    const [useToggle,setToggle]=useState(false);
return(
    <>
    {useToggle ?  <div>
    <div>Use state toggle content</div>
    <p>Block of stmt</p>
    <p>True value</p>
    </div>
    :<p>false value</p>}
    <button onClick={()=>{setToggle(!useToggle)}}>{useToggle}Click Me!</button>
    </>
)
}

const UseStateInput=()=>{
    const [useInput,setInput]=useState("");
    return(
        <>
        <input placeholder='Enter Your name' value={useInput} onChange={(event)=>setInput(event.target.value)} />
        <button onClick={()=>{console.log(useInput)}}>Submit</button>
        </>
    )

}

export default UseState7