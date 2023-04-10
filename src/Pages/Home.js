import React from 'react'
import ChildrenProps5 from '../components/Basic/ChildrenProps5'
import DifferentComponents2 from '../components/Basic/DifferentComponents2'
import FetchData9 from '../components/Basic/FetchData9'
import Hook from '../components/Basic/Hooks/Hook'
import Jsx, { JsxCondition, JsxConditionBlock, JsxConditionBlockWithoutElse } from '../components/Basic/Jsx1'
import Props3 from '../components/Basic/Props3'
import SpredingStudent from '../components/Basic/Spread4'
import StylingTypes6 from '../components/Basic/StylingTypes6'
import ProjectsAll from '../components/Projects/ProjectsAll'

function Home() {
  return (
    <div>
    <ChildrenProps5>
    <h3>Home</h3>
<Jsx />
<hr />
<JsxCondition />
<hr />
<JsxConditionBlock />
<hr />
<JsxConditionBlockWithoutElse />
<DifferentComponents2 />
<Props3 name="Aji" id={3} email="aji@gmail.com" skills={['HTML','css','React','Nextjs']} />
<SpredingStudent />
<StylingTypes6 />
<Hook />
<FetchData9 />
<ProjectsAll />
</ChildrenProps5>

    </div>
  )
}

export default Home