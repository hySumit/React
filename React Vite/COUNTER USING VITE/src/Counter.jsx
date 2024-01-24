import React from "react";
import { useState } from "react";


 function Counter() {
    const [count, setCount] = useState(0)

    return(
        <>
        <div>
            <h1>Current Value of Count = {count}</h1>

            <button onClick={()=>setCount(count + 1)} >Increase Count by 1</button>
            <button onClick={()=>setCount(count - 1)} >Decrese Count by 1</button>
        </div>
        </>
    )
  }

  export default Counter