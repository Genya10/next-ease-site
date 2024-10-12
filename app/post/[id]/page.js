import Post from "@/app/components/Post"

export async function generateMetadata({params, searchParams}){
   const post = await fetchDataId(params.id)

   return {
    title: post.title,
    description: post.body
   }
}

async function fetchDataId(id){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const data = await response.json()
  return data
}

 const PostPage = async({params: {id}}) => {
    const result = await fetchDataId(id)

    return (
        <div >    
            <Post result={result}/>
        </div>
    )
}

export default PostPage