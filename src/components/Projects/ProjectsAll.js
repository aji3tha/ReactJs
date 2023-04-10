import React from 'react'
import Project1CRUDApp from './Project1CRUDApp'
import Project2JsonUserFilter from './Project2JsonUserFilter'
import Project3Slider from './Project3Slider'
import Project4StarRating from './Project4StarRating'
function ProjectsAll() {
  return (
    <div>
        <h1>All Projects</h1>
         <Project1CRUDApp />
         <Project2JsonUserFilter />
         <Project3Slider />
         <Project4StarRating />
    </div>
  )
}

export default ProjectsAll