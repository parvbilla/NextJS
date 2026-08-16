import { db } from "../config/db";
import DoctorCards from "./DoctorCards";

async function Model(){
    const [rows] = await db.execute("SELECT * FROM doctors")
    return(
        <>
        <DoctorCards rows={rows} />
        </>
    )
}

export default Model;