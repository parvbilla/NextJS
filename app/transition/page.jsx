"use client"

import { useState, useTransition } from "react";

function Transition(){

    const [count,setCount] = useState(0);
    const [isPending,startTransition] = useTransition();
    function increaseCount(){
        startTransition(()=>{
            setTimeout(()=>{
                setCount((count)=>count+1);
            },10000)
        })
    }
    return(
        <>
        <h1>Transition...</h1>
        <h1>Count {count}</h1>
        <button onClick={()=>increaseCount()}>Increase</button>
        {isPending && <h1>loading....</h1>}
        </>
    )
}

export default Transition;