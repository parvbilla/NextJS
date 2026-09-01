
"use server"

import { db } from "../config/db";

export async function studentSave(formData) {
    const name = formData.get("name");
    const course = formData.get("course");
    const college = formData.get("college");

    console.log(name,course,college);

    await db.execute("INSERT INTO student (name,course,college) VALUES(?,?,?)",[name,course,college]);
    console.log("data added successfully...");

}