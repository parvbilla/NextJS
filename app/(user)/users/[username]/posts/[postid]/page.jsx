async function Postid(prop){
    const data = await prop.params;
    console.log(data)
    return(
        <>
        <h1> Hello postid page </h1>
        <h1>Post Id:- {data.postid}</h1>
        <h1>UserName :- {data.username}</h1>

        </>
    )
}

export default Postid;