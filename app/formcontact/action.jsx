

"use server"
import { db } from "../config/db";

export async function saveFormContact(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(name,email,message);

    await new Promise((res)=>setTimeout(res,3000));

    try{
    await db.execute("INSERT INTO contacts (name,email,message) VALUES (?,?,?)",[name,email,message]);
    console.log("data saved successfully...")
    }catch(e){
        console.log("error occured...",e);
    }
}