import React from 'react'
import ChildrenProps5 from './ChildrenProps5'
import DifferentComponents2 from './DifferentComponents2'
import Jsx, { JsxCondition, JsxConditionBlock, JsxConditionBlockWithoutElse } from './Jsx1'
import Props3 from './Props3'
import SpredingStudent from './Spread4'
import StylingTypes6 from './StylingTypes6'

function BasicAll() {
    return (
        <div>
            <ChildrenProps5>
            <Jsx />
            <hr />
            <JsxCondition />
            <hr />
            <JsxConditionBlock />
            <hr />
            <JsxConditionBlockWithoutElse />
            <DifferentComponents2 />
            <Props3 name="Aji" id={3} email="aji@gmail.com" skills={['HTML', 'css', 'React', 'Nextjs']} />
            <SpredingStudent />
            <StylingTypes6 />
            </ChildrenProps5>
            
        </div>
    )
}

export default BasicAll