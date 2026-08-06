import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: "localhost",
    user : "root",
    password : "mysql",
    database: "hospitaldb",
});

try{
    const connection = await db.getConnection();
    console.log("database connected successfully");
    connection.release();
}catch(err){
    console.log("Exception :- ",err);
}