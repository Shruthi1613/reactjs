import React from 'react'
import Course from './Course'


const App = () => {
  return (
    <Course Coursedetails={{
      CourseName:"Java Full Stack",
      CourseAvail:true,
      CourseDur:"6 Months"
    }}/>
  )
}

export default App