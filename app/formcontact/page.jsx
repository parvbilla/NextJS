"use client"

import { useFormStatus } from "react-dom";
import { saveFormContact } from "./action";


function FormContact(){
    return(
        <>
        <h1>use Form Status </h1> <br/>
        <form action={saveFormContact} method="post">
            <label>Name :- </label>
            <input 
            type="text"
            placeholder="enter your name"
            required
            name="name"
            />
             <label>Email :- </label>
            <input 
            type="text"
            placeholder="enter your name"
            required
            name="email"
            />
             <label>Message :- </label>
            <input 
            type="text"
            placeholder="enter your name"
            required
            name="message"
            />
            <Submit/>
        </form>
        </>
    )
}

function Submit(){
    const {pending,data,method,action} =useFormStatus();
    return(
        <>
        <button disabled={pending}>{pending? "submitting...": "submit"}</button>
        <h1>form status :- </h1>
        <h1>data :- </h1>
        <h1>Name :- {data?.get("name") || "None"} </h1>
        <h1>email :- {data?.get("email") || "None"} </h1>
        <h1>message :- {data?.get("message") || "None"} </h1>
        <h1>method :- {method || "None"}</h1>
        <h1>action :- {action ? "saveFormContact" : "None"} </h1>
        <h1>Pending :- {pending ? "Yes": "NO"}</h1>
        </>
    )
}

export default FormContact;