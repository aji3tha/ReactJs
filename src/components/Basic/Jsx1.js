// Javascript XML
import React from 'react'


const name = "Aji"
const content = <h5>React tutorial By {name}</h5>
const list = (
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ul>
)
const list1 =
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ul>
const list3 =
  <>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
  </>
function Jsx() {
  return (
    <>
      <div>{content}</div>
      <h3>Class 1 : Different type of element creation</h3>
      <h4> Different type of element creation</h4>
      <a href="#">{list}</a>
      <a href="#">{list1}</a>
      <a href="#">{list3}</a>
      <hr />
      <h4>Conditions</h4>
      <ul>
        <li>JsxCondition</li>
        <li>JsxConditionBlock</li>
        <li>JsxConditionBlockWithoutElse</li>
      </ul>
    </>

  )
}

export const JsxCondition = () => {
  return (
    <>
     <h4>JsxCondition</h4>
      {10 > 5 ? "ABC" : "XYZ"}
    </>
  )
}

export const JsxConditionBlock = () => {
  return (
    <>
      {10 > 5 ?
        <>
          <h4>Block conditions</h4>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </ul>
        </>
        :
        "XYZ"}
    </>
  )
}
export const JsxConditionBlockWithoutElse = () => {
  return (
    <>
      {
        10 > 5 &&
        <>
          <h4>Condition Block Without Else</h4>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </ul>
        </>
      }
    </>
  )
}
export default Jsx