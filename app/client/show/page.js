import Link from 'next/link'

export default function Show (){
    return(
        <div>
        <h1>SHOW Page</h1> 
        <Link href='/'>Main</Link>
        <br/>
        <Link href='/client/12345'>Page 12345</Link>
        <br/>
        <Link href='/client/show/qwerty'>Qwerty</Link>
        </div>
    )
}