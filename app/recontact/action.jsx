
"use server"

import { redirect } from "next/navigation";

export async function saveReContact(formData) {
    const name = formData.get("name");
    console.log(name);

    await new Promise((res)=>setTimeout(res,3000));

    console.log("data saved successfully....");

    redirect("/success");
}