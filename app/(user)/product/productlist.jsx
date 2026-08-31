"use client"

import { useSearchParams } from "next/navigation";


function Productlist(){

    const data = useSearchParams();
    const category = data.get("category");
    const price = data.get("price");
    const page = data.get("page");
    console.log(data)
    return(
        <>
        <h1>Product list Page ...</h1>
        <h1>Showing catergory {category} and price {price}</h1>
        <h1>Page {page}</h1>

        </>
    )
}

export default Productlist;