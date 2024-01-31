import React from "react"
import { useState,useEffect } from 'react'


const Timer = ()=>{
    const [count,setCount] = useState(10)
    const [isActive, setIsActive] = useState(false)

    // functions for controls>>>>>>

    function handlePause(){
            setIsActive(false)
    }
    function reset(){
        setCount(10)
        setIsActive(false)
    }
    function start(){
        setIsActive(true)
    }

    
    useEffect(()=>{
        let interval;
        
        if (isActive){
            interval = setInterval(()=>{

                setCount((prev)=>{

                    if(prev <=1){

                        setIsActive(false)
                        return 0
                    }
                    return prev - 1
                })
            },1000)
        }

        return ()=>{
            clearInterval(interval)
        }

    },[isActive])
    return(
        <>
        <div>
            <h1>{count}</h1>

            {isActive ? (
                <button onClick={handlePause} >Pause</button>
            ):(
                <button onClick={start} disabled={count === 0}>
                    {count < 10 ? "Resume" : "Start"}
                </button>
            )}
            
            <button onClick={reset} disabled={count === 10} >Reset</button>
        </div>
        </>
    )
}
export default Timer