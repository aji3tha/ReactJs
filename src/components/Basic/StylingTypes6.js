
// Different type of styling
// 1) Inline styling
// 2) Css
// 3) Sass
// 4) Styled Component
//npm install --save styled-components

import styled from 'styled-components'
import React from 'react'
function StylingTypes6() {
  return (
    <>
    <h3>Class 6 : Styling Types</h3>
    <InlineStyle />
    <hr />
    <StyledComponentStyling />
    </>
  )
}
const InlineStyle=()=>{
    return(
        <>
        <p className='inline-style' style={{textTransform: 'uppercase',fontWeight:"600"}}>Inline styling</p>
        </>
    )
}
const StyledComponentStyling=()=>{
    return(
        <>
        <StyleByComponent>
            <p>I am a styled component</p>   
        </StyleByComponent>
        </>
    )
}
const StyleByComponent = styled.section`
p{
    font-size:20px;
    color:blue;
}
`
export default StylingTypes6
