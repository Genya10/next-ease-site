import Post from "@/app/components/Post"

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