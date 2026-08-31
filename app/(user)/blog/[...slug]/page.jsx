
async function Blog(prop){
    const {slug} = await prop.params;
    console.log(slug)
    console.log(slug.length)
    return (
        <>
        <h1>Blog Page ...</h1>
        {slug.map((data,index)=>(
            <h1 key={index}>{data}</h1>
        ))}
        </>
    )
}

export default Blog;