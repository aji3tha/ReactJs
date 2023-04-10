import React from 'react'

function DifferentComponents2() {
  return (
    <div>
        <h3>Class 2 : Different type of Components</h3>
        <h4>Different type of Components</h4>
        <ul>
            <li>
            <h4>Functional Component</h4>
            <div><FunctionalComponent /></div>
            </li>
            <hr />
            <li>
            <h4>Class Component</h4>
            <div><ClassComponent /></div>
            </li>
            <hr />
            <li>
            <h4>ArrowFunctional Component</h4>
            <div><ArrowFunctionalComponent /></div>
            </li>
            
            </ul></div>
  )
}

// FunctionalComponent
function FunctionalComponent() {
  return (
    <div>Functional Component</div>
  )
}

// ClassComponent
class ClassComponent extends React.Component {
  render() {
    return (
      <div>Class Component</div>
    )
  }
}

// ArrowFunctionalComponent
 const ArrowFunctionalComponent = () => {
  return (
    <div>ArrowFunctional Component</div>
  )
}


export default DifferentComponents2