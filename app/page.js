import Posts from "./components/Posts"

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
      <Posts result={result}/>
    </div>
  );
}
