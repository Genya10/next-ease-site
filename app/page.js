import Link from "next/link"

async function fetchData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return data
}

export default async function Home() {
  const result = await fetchData()

  return (
    <div>
    <h1>Main page</h1>   
    {result.map(post => (
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link href={`/post/${post.id}`}>Details</Link>
      </div>
    ))}
    </div>
  );
}
