import React from 'react'
import JSON from './touristdata.json'
import Place from './Place';
import "./global1.css"

const App = () => {
  return (
    <>
    <div>
     <Place data={JSON}/>
     </div>
   </>
  )
}

export default App