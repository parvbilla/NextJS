

async function User(){

    await new Promise((res)=>{
        setTimeout(res,5000)
    });
    return(
        <>
        <h1>User page </h1>
        </>
    )
}

export default User;