import Link from "next/link"

export default function Posts({result}){

    return (
        <div>
            {result.map(post => (
            <div key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Link href={`/post/${post.id}`}>Details</Link>
            </div>
            ))}
        </div>
    )
}