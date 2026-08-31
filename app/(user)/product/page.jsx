// type one search params
// async function Product(prop){
//     const data = await prop.searchParams;
//     console.log(data);
//     return(
//         <>
//         <h1>product page </h1>
//         </>
//     )
// }

import Productlist from "./productlist";


async function Product({searchParams}){
    const searchparams = await searchParams;
    console.log(searchparams)

    const catergory = searchparams?.catergory || 'all';
    const price = searchparams?.price || 0;
    const page = searchparams?.page || 1;
    return(
        <>
        <h1>Product Page </h1>
        <h1>Showing catergory {catergory} and price {price}</h1>
        <h1>page {page}</h1>

        <hr/>
        <br/>
        <Productlist/>
        </>
    )
}

export default Product;