
"use server"

import { revalidatePath } from "next/cache";
import { db } from "../config/db";

export async function DoctorAction(prevData,formData){
    const name = formData.get("name");
    const part = formData.get("part");
    const hospitalName = formData.get("hospitalName");

    await db.execute("INSERT INTO doctors (name,part,hospitalName) VALUES(?,?,?)",[name,part,hospitalName]);

    revalidatePath("/sonner");

    return{
        success : true,
        message : "data has been successfully added.."
    };
}

export default DoctorAction;