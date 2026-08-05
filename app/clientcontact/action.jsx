"use server";

import { db } from "../config/db";

export async function saveClientContact(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(name, email, message);

    await db.execute(
        "INSERT INTO contacts (name,email,message) VALUES(?,?,?)",
        [name, email, message]
    );
}



