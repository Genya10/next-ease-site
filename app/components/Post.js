import Link from "next/link"
 
 export default function Post({result}){
    return (
        <div className="post">
            <h3>{result.title}</h3>
            <p>{result.body}</p>
            <h2>Author ID:{result.id}</h2>
            <Link href='/'>Back</Link>
        </div>
    )
 }