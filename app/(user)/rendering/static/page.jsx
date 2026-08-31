import { db } from "../../../config/db";


export const revalidate =30;

async function Static(){

    let [student] = await db.execute("select * from students");
    console.log(student);
     await db.execute("DELETE FROM students WHERE id = 30");
     [student] = await db.execute("select * from students");
    console.log(student);
    return(
        <>
       <div>
        <h1>Static Page </h1>
        {
            student.map((item)=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.email}</h1>
                    <h1>{item.course}</h1>
                </div>
            ))
        }
       </div>
        </>
    )
}

export default Static;