import React from 'react'

const Course = (props) => {
    if(props.Coursedetails.CourseAvail == true)
    {
  return (
    
        <>
       <h1>{props.Coursedetails.CourseName}</h1>
       <h1>{props.Coursedetails.CourseDur}</h1>
       <button style={{color:"green"}}>AVAILABLE</button>
       </>
     )
}
    else 
{
    return (
        <>
        <h1>{props.Coursedetails.CourseName}</h1>
       <h1>{props.Coursedetails.CourseDur}</h1>
       <button style={{color:"red"}}>NOT AVAILABLE</button>
        </>
    )
}
}


export default Course