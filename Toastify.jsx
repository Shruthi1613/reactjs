import React from "react"
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

 const App= ()=> {

    let handleSubmit = ()=>{
    toast.success("Successfully logged in ", {
        Position : toast.POSITION.TOP_CENTER
    })
    }
    return (
        <>
        <div>
            <ToastContainer/>
            <button onClick={handleSubmit}>Click for Message</button>
        </div>
        </>
    )
}
export default App