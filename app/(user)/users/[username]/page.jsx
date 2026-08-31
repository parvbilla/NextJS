"use client"

import { use } from "react";

function Username(prop){
    const user = use (prop.params);
    console.log(user);

    return(
        <>
        <h1>Hello Username : {user.username}</h1>
        </>
    )
}

export default Username;