"use client"

import { useActionState } from "react";
import { ActionContactSave } from "./action";


function ActionContact(){

    const initialState= {
        message:""
    }

    const [state,formAction,isPending]=useActionState(ActionContactSave,initialState);
    return(
        <>
        <h1>Action Contact Page...</h1>
        <form action={formAction}>
            <label>Name :- </label>
            <input
            type="text"
            required
            placeholder="enter your name"
            name="name" 
            />
             <label>Email :- </label>
            <input
            type="text"
            required
            placeholder="enter your name"
            name="email"
            />
             <label>Message :- </label>
            <textarea
            type="text"
            required
            rows={5}
            placeholder="enter your message"
            name="message"
            />
            <button disabled={isPending}>
                {isPending? "Submitting...":"Submit"}
            </button>
        </form>
        <h1>{state.message}</h1>
        </>
    )
}

export default ActionContact;