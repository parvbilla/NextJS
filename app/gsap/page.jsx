import { db } from "../config/db";
import DoctorCards from "./DoctorCards";

export default async function Hospital() {

    const [rows] = await db.query(
        "SELECT * FROM doctors"
    );

    return (
        <DoctorCards rows={rows} />
    );
}