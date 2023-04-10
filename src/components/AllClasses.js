import React from 'react'
import BasicAll from './Basic/BasicAll'
import DifferentComponents2 from './Basic/DifferentComponents2'
import Hook from './Basic/Hooks/Hook'
import Jsx, { JsxCondition, JsxConditionBlock, JsxConditionBlockWithoutElse } from './Basic/Jsx1'
import Props3 from './Basic/Props3'
import SpredingStudent from './Basic/Spread4'
import StylingTypes6 from './Basic/StylingTypes6'

function AllClasses() {
  return (
    <div>
            <h3>All Classes</h3>
            <BasicAll />
            <Hook  />
            <h3>Class 10 : Routers</h3>
            <h4>Refer App.js for Router concept</h4>
    
    </div>
  )
}

export default AllClasses