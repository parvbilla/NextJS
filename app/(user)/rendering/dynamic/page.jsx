import { cache } from "react";
import { db } from "../../../config/db";
import { notFound } from "next/navigation";

export const dynamic ="force-dynamic";

async function Dynamic(){
    await getAllStudent();
    console.log("dyanmic function");
    return(
        <>
       <div>
        <h1>Dynamic Page </h1>
        <StudentList/>
       </div>
        </>
    )
}

async function StudentList(){
    const student =  await getAllStudent();
    console.log("studentlist function");
    if (!student) return notFound();
    return(
        <>
        {
            student.map((item)=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.email}</h1>
                    <h1>{item.course}</h1>
                </div>
            ))
        }
        </>
    )

}

  const getAllStudent = cache( async function (){
    let [student] = await db.execute("select * from students");
    console.log(student);
     await db.execute("DELETE FROM students WHERE id = 30");
     [student] = await db.execute("select * from students");
    console.log(student);
    return student;
});

export default Dynamic;