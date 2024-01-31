import { useState } from 'react'
import Timer from './components/Timer'
import './App.css'

function App() {
  const [showComponent, setShowComponent] = useState(false)

  return (
    <>
    <div> <button onClick={(()=>{setShowComponent(!showComponent)})} >
     {showComponent? "Hide Timer" : "Show Timer" } </button> </div>
     {/* <Timer/> */}
     <div> {showComponent && <Timer/>} </div>
    </>
  )
}

export default App
