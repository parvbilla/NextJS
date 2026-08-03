"use server"


import { db } from "../config/db";

export async function ActionContactSave(prevData,formData) {

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
   

    console.log(name,email,message);

    await new Promise((res)=>setTimeout(res,3000));

    if(!name || !email || !message ){
        return{
            success: false,
            message : "all field are required"
        };
    }

    try{
        await db.execute("INSERT INTO contacts (name,email,message) VALUES(?,?,?)",[name,email,message]);
    return{
        success: true,
        message : "data added successfully"
    }
}catch(e){
        console.log("error occured..",e);
        return{
        success: false,
        message : "data not added error occured"
    }
    }

    
}