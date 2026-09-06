
import { db } from "../config/db";
import DoctorTable from "./DoctorTable";
import ThemeButton from "./ThemeButton";

export default async function Toggle() {
    const [rows] = await db.execute("SELECT * FROM doctors");
    return(
        <>
            <ThemeButton/>
            <DoctorTable rows={rows}/>
        </>
    )
}