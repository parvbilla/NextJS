

"use server"
import { db } from "../config/db";
import { revalidatePath } from "next/cache";

export async function actionForm(formData) {
    const name = formData.get("name");
    const part = formData.get("part");
    const hospitalName = formData.get("hospitalName")

    await db.execute("INSERT INTO doctors (name,part,hospitalName) VALUES(?,?,?)",[name,part,hospitalName]);
    console.log("data added successfully....");
    revalidatePath("/hospital");
}