import { db } from "../config/db";
import DoctorCard from "./DoctorCard";

export default async function Hospital() {

    const [rows] = await db.query(
        "SELECT * FROM doctors"
    );

    return (
        <DoctorCard rows={rows} />
    );
}